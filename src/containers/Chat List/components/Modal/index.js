import * as React from 'react';
import {useParams} from 'react-router-dom';
import Box from '@mui/material/Box';
import BasicButton from './components/Button';
import {BasicTextField} from '../../../../components/Input';
import Tags from './components/Select';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {db, collection, doc, addDoc, updateDoc} from '../../../../config/Firebase/Firebase.js';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  color: '#ffffff',
  bgcolor: '#df4830',
  border: '2px solid #fff',
  borderRadius: '5px',
  boxShadow: 24,
  p: 2,
};

export default function BasicModal({users}) {
  const [open, setOpen] = React.useState(false);
  const [groupName, setGroupName] = React.useState("");
  const [members, setMembers] = React.useState([]);
  const {uid} = useParams();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const createGroup = async () => {
    let arr = [];
    for (let i = 0; i < members.length; i++) {
      arr.push(members[i].uid);
    }
    setMembers(arr);
    const groupObj = {
      groupName,
      members: arr
    }
    const groupsRef = collection(db, "groups");
    await addDoc(groupsRef, groupObj)
    .then((value) => {
      const groups = collection(db, "groups");
      const group = doc(groups, value.id);
      updateDoc(group, {
        ...groupObj, group_id: value.id
      })
      .then(() => {
        alert("Group Created!");
        setGroupName("");
        handleClose();
      })
    })
  }
  
  return (
    <div>
      <BasicButton label="Create Group" onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5">
             Create Group
          </Typography>
          <BasicTextField
          label="Group Name"
          type="text"
          name="groupName"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)} />
          <Tags users={users} setMembers={setMembers} />
          <BasicButton label="Create" onClick={createGroup} />
        </Box>
      </Modal>
    </div>
  );
}