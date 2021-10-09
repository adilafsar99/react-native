import MenuAppBar from '../../components/AppBar'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MyCard from '../../components/Card';
import {
  useLocation,
  useParams
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
  auth,
  onAuthStateChanged,
  db,
  doc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  setDoc,
  onSnapshot,
  addDoc,
  orderBy
} from '../../config/Firebase/Firebase.js';
function Chat(props) {
  const location = useLocation()
  const {
    cid
  } = useParams();
  const [uid, setUid] = useState("");
  const [message,
    setMessage] = useState("");
  const [allMessages,
    setAllMessage] = useState([]);
  const [currentChat, setCurrentChat] = useState({});
  
  const getCurrentChat = async () => {
    const docRef = doc(db, "users", cid);
    const res = await getDoc(docRef);
    setCurrentChat(res.data());
  }
  
  const getAllMessages = async () => {
    let chat_id = "";
    if (uid < cid) {
      chat_id = uid + cid
    } else {
      chat_id = cid + uid
    }
    const q = query(collection(db, "messages"), where("chat_id", "==", chat_id), orderBy('timestamp', 'desc')
    );
    onSnapshot(q, (querySnapshot) => {
      const arr = [];
      querySnapshot.forEach((doc) => {
        arr.push(doc.data());
      });
      setAllMessage(arr)
    });
  }

  console.log("messages==>", allMessages)

  useEffect(() => {
    setAllMessage([]);
    getAllMessages();
    getCurrentChat();
    onAuthStateChanged(auth, (user) => {
      setUid(user.uid);
   })
  }, [])

  const send_message = async (event) => {
    if (event.keyCode === 13) {
      let chat_id = "";
    if (uid < cid) {
      chat_id = uid + cid
    } else {
      chat_id = cid + uid
    }
       let collectionRef = collection(db, 'messages');
      await addDoc(collectionRef, {
        message, uid, chat_id, timestamp: new Date()
      })
      .then(() => {
        setMessage("")
      })
    }
  }
  return (
    <div>
            <MenuAppBar title="Chat" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
      <div className="chat_container">
                                <div className="header">
                                    <div className="online_dot"></div>
                                    <div className="username">
                                        <h4>{currentChat?.firstName + " " + currentChat?.lastName}</h4>
      </div>
                                    <div className="chat_icons">
                                        <div className="icon_box">
                                            <BiPhoneCall size={24} color="#fff" />
        </div>
                                        <div className="icon_box">
                                            <MdVideoCall size={24} color="#fff" />
        </div>
      </div>
      </div>
                                <div className="messages">

                                    {allMessages.map((v, i) => {
          return (
            v.uid === uid ?
            <div className="message_left message_right">
                                                    <div className="user_message">
                                                        {v.message}
                                                        <div className="message_arrow_right"></div>
            </div>
                                                    <div className="message_right_image">
                                                        <img src="https://wl-brightside.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg" alt="" />
            </div>
            </div>:
            <div className="message_left">
                                                    <div>
                                                        <img src="https://wl-brightside.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg" alt="" />
            </div>
                                                    <div className="user_message">
                                                        {v.message}
                                                        <div className="message_arrow"></div>
            </div>
            </div>
          )
        }).reverse()}
      </div>
                                <div className="message_box">
                                    <div className="message_input">
                                        <input onKeyUp={send_message} value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Type your message here" />
        </div>
                                    <div>
                                        <FaRegSmile color="#df4830" size={28} />
        </div>
                                    <div className="icon_box_send">
                                        <FiSend color="#fff" size={18} />
        </div>
      </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export {
  Chat
};