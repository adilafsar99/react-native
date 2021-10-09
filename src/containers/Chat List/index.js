import MenuAppBar from '../../components/AppBar'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MyCard from '../../components/Card';
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
  RiRefreshLine,
  RiContactsBookLine,
  RiArchiveDrawerLine
} from 'react-icons/ri';
import {
  FiUsers,
  FiSend
} from 'react-icons/fi';
import {
  MdVideoCall
} from 'react-icons/md';
import {
  FaRegSmile
} from 'react-icons/fa';
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
function ChatList(props) {
  const history = useHistory();
  const location = useLocation()
  const {
    uid
  } = useParams()
  const [users,
    setUsers] = useState([]);

  const getAllUsers = async () => {
    const docRef = query(collection(db, "users"), where("uid", '!=', uid));
    const querySnapshot = await getDocs(docRef);
    let arr = [];
    querySnapshot.forEach((doc) => {
      arr.push(doc.data());
    });
    setUsers(arr)
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
                                <RiRefreshLine color="#fff" size={24} />
                                <FiUsers color="#fff" size={24} />
                                <RiContactsBookLine color="#fff" size={24} />
                                <RiArchiveDrawerLine color="#fff" size={24} />
    </div>
                            <div className="users_list">
                                {
      users.map((v, i) => {
        return (
          <div onClick={() => openChat(users[i])} key={i} className="user_card">
                                                <div className="user_card_pic">
                                                    <img src="https://wl-brightside.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg" alt="" />
          </div>
                                                <div className="user_data">
                                                    <h6>{v.firstName + " " + v.lastName}</h6>
                                                    <span>Hi,how are you?</span>
          </div>
                                                <div className="my_badge">
                                                    <span>2</span>
          </div>
          </div>
        )
      })
      }
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