import Container from '@mui/material/Container';
import MenuAppBar from '../../components/AppBar'
import Grid from '@mui/material/Grid';
import MyCard from '../../components/Card'
import Button from 'react-bootstrap/Button';
import {
  BasicButton
} from "./components/Button";
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {
  useLocation,
  useParams,
  useHistory
} from 'react-router-dom';
import {
  useEffect,
  useState
} from 'react';
import './style.css';
import {
  BiSearchAlt,
  BiPhoneCall
} from 'react-icons/bi';
import {
  FiUser,
  FiUsers
} from 'react-icons/fi';
import {
  db,
  doc,
  getDocs,
  collection,
  query,
  where,
  setDoc,
  onSnapshot,
  addDoc,
  orderBy
} from '../../config/Firebase/Firebase.js';

const Users = ({
  users
}) => {
  const history = useHistory();
  const openChat = (chat) => {
    history.push(`/chat/${chat.uid}`);
  }
  return (
    <>
    {users.map((v, i) => (
      <div key={i} onClick={() => openChat(users[i])} className="user_card">
      <div className="user_card_pic">
        <img src="https://wl-brightside.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg" alt="" />
      </div>
      <div className="user_data">
        <h6>{v.firstName + " " + v.lastName}</h6>
          <span></span>
      </div>
      <div className="my_badge">
        <span>5</span>
      </div>
    </div>
    ))}
    </>
  )
}

const Groups = ({
  groups,
  users
}) => {
  const history = useHistory();
  const openChat = (chat) => {
    history.push(`/chat/${chat.uid}`);
  }
  return (
    <>
    <div className="group_modal">
         <CreateGroupModal users={users} />
       </div>
     {groups.map((v, i) => (
       <div onClick={() => openChat(groups[i])} className="group_card">
         <div className="group_card_pic">
           <img src="https://wl-brightside.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg" alt="" />
         </div>
       <div className="group_data">
         <h6>{v.groupName}</h6>
         <span></span>
       </div>
       <div className="my_badge">
         <span>10</span>
       </div>
     </div>
     ))}
     </>
  )
}

const CreateGroupModal = ({users}) => {
  const [groupName, setGroupName] = useState("");
  const [show,
    setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const createGroup = () => {
    {/**/}
  };
  return (
    <>
    <div className="d-grid gap-2">
        <Button className="create_group_btn" size="lg" variant="primary" onClick={handleShow}>
        Create Group
        </Button>
    </div>

    <Modal className="group_modal" show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create Group</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Group Name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Group Name" value={groupName} onChange={(e) => setGroupName(e.target.value)}/>
          </FloatingLabel>
          <FloatingLabel controlId="floatingSelect" label="Add Members">
            <Form.Select aria-label="Floating label select example" multiple>
              <option>None</option>
              {users.map((v, i) => (
                <option key={i}>{v.firstName + " " + v.lastName}</option>
              ))}
            </Form.Select>
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={createGroup}>
            Create
          </Button>
        </Modal.Footer>
      </Modal> < />
  );
}

const ChatList = (props) => {
  const history = useHistory();
  const location = useLocation()
  const {
    uid
  } = useParams()
  const [users,
    setUsers] = useState([]);
  const [groups,
    setGroups] = useState([]);
  const [showUsers, setShowUsers] = useState(false);
  
  const getAllUsers = async () => {
    setShowUsers(true);
    const docRef = query(collection(db, "users"), where("uid", '!=', uid));
    const querySnapshot = await getDocs(docRef);
    let arr = [];
    querySnapshot.forEach((doc) => {
      arr.push(doc.data());
    });
    setUsers(arr);
  }

  const getGroups = async () => {
    setShowUsers(false);
    const docRef = query(collection(db, "groups"), where("members", 'array -contains', uid));
    const querySnapshot = await getDocs(docRef);
    let arr = [];
    querySnapshot.forEach((doc) => {
      arr.push(doc.data());
    });
    setGroups(arr);
  }

  const openChat = (chat) => {
    history.push(`/chat/${chat.uid}`);
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div>
            <MenuAppBar title="Chat List" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="users_sidebar">
                            <div className="search_box">
                                <div className="search_bar">
                                <BiSearchAlt color="#fff" size={24} />
                             <input type="text" placeholder="Search" />
    </div>
    </div>
                            <div className="icons">
                      <>          <BasicButton onClick={getAllUsers} label={<FiUser color="#fff" size={24} />} />
                     <BasicButton onClick={getGroups} label={<FiUsers  color="#fff" size={24}  />} />
                       
                       </>
    </div>
   <div className="users_list">
     {showUsers ? <Users users={users} /> : <Groups users={users} groups={groups} />}
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export {
  ChatList
};