import React, { useState } from "react";
import Card from "@mui/material/Card";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import Button from "@mui/material/Button";

import "./takeNote3.css";
import ColorPopper from "../colorpoper/ColorPopper";
import {pinUnpinNote, trashedNote, updateArchiveNote, updateNote } from "../../Services/dataServices";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import InputBase from "@mui/material/InputBase";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  takeNote1_3:{
    height:'auto',
    width: '18vw',
    margin: '0.3rem',
    marginBottom: '0.3rem'
  },
  card_3:{
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.5rem'
  },
  title_desc_pinIcon:{
    height: 'auto',
    width:'100%',
    display: 'flex',
  },
  textFeild_3:{
    width: '90%',
    height: 'auto',
    /* border: 1px solid black; */
    marginLeft: '0.6rem',
    paddingBottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
  },
  textFeild_3_h3:{
    fontSize: '0.85rem',
    color: 'rgb(100, 100, 100)',
    marginBottom: '0.8rem',
    fontWeight: '100',
    letterSpacing:'0.2ch',
    width:' 100%'
  },
  pin_icon:{
    marginLeft: '0.6rem',
    border: '2px solid transparent',
    /* opacity: 0.5; */
    size: '50%'
  },
  cardicons_3:{
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around'
  }


  
})

function TakeNote3(props) {
  const classes=useStyle()
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 1,
  };

  const [open, setOpen] = React.useState(false);
  const [inputValues, setInputValues] = useState({
    noteIdList: "",
    title: "",
    description: "",
  });
  const handleOpen = (noteDetails) => {
    console.log("note details..................>", noteDetails);
    setOpen(true);
    setInputValues({
      noteId:noteDetails.id,
      title: noteDetails.title,
      description: noteDetails.description,
    });
  };
  const handleClose = () => setOpen(false);

  const listenToColorUpdate = () => {
    props.getNote();
  };

//   Archive note
  const updateArchive = (id) => {
    let archiveNote = {
      noteIdList: [id],
      isArchived: true,
    };
    updateArchiveNote(archiveNote)
      .then((res) => {
        console.log(res);
        console.log("Note Archived .....");
      })
      .catch((err) => {
        console.log(err);
      });
  };

// Trash note ------------------------

const onTrashNote = (id) => {
    let trashNote = {
      noteIdList: [id],
      isDeleted: true,
    };
    trashedNote(trashNote)
      .then((res) => {
        console.log(res);
        console.log("Note Deleted .....");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Pin  note ------------------------

const onPinNote = (id) => {
    let pinNote = {
      noteIdList: [id],
      isPined:true
    };
    pinUnpinNote(pinNote)
      .then((res) => {
        console.log(res);
        console.log("Note pined.......");
      })
      .catch((err) => {
        console.log(err);
      });
  };




// updateNote -------------------------
  const updateTitle = (event) => {
    setInputValues((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  };

  const updateDescription = (event) => {
    setInputValues((prevState) => ({
      ...prevState,
      description: event.target.value,
    }));
  };

  //   console.log(inputValues );

  const updateNoteValue = () => {
    updateNote(inputValues)
      .then((res) => {
        console.log(res);
        console.log("Note updated...............");
      })
      .catch((err) => {
        console.log(err);
      });
    setOpen(false);
  };

  return (
    // <div className="takeNote1-3">
    <div className={classes.takeNote1_3}>
      {/* <Card className="card-3" style={{ backgroundColor: props.note.color }}> */}
      <Card className={classes.card_3} style={{ backgroundColor: props.note.color }}>
        {/* <div className="title-desc-pinIcon"> */}
        <div className={classes.title_desc_pinIcon}>
          {/* <div onClick={() => handleOpen(props.note)} className="textFeild-3"> */}
          <div onClick={() => handleOpen(props.note)} className={classes.textFeild_3}>
            <h3 className={classes.textFeild_3_h3}> {props.note.title}</h3>
            {/* <p className="noteTitle">{props.note.description}</p> */}
            <p className={classes.noteTitle}>{props.note.description}</p>
          </div>
          <PushPinOutlinedIcon
            onClick={() => onPinNote(props.note.id)}
            // className="pin-icon"
            className={classes.pin_icon}
            sx={{ cursor: "pointer" }}
          />
        </div>
        {/* <div className="cardicons-3"> */}
        <div className={classes.cardicons_3 }>
          <NotificationsNoneIcon
            sx={{ cursor: "pointer", fontSize: "medium" }}
          />
          <DeleteOutlineOutlinedIcon 
           onClick={() => onTrashNote(props.note.id)}
            sx={{ cursor: "pointer", fontSize: "medium" }}
          />
          <ColorPopper
            id={props.note.id}
            listenToColorUpdate={listenToColorUpdate}
            action="update"
          />
          <ImageOutlinedIcon sx={{ cursor: "pointer", fontSize: "medium" }} />
          <ArchiveOutlinedIcon
            onClick={() => updateArchive(props.note.id)}
            sx={{ cursor: "pointer", fontSize: "medium" }}
          />
          <MoreVertOutlinedIcon
            sx={{ cursor: "pointer", fontSize: "medium" }}
          />
        </div>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="popupBox" sx={style}>
          <div className="popupBox-child">
            <InputBase
              onChange={updateTitle}
              placeholder="title"
              defaultValue={inputValues.title}
            />
            <InputBase
              onChange={updateDescription}
              multiline
              placeholder="Update note"
              defaultValue={inputValues.description}
            />
          </div>
          <div className="cardicons-2">
            <NotificationsNoneIcon
              sx={{ cursor: "pointer", fontSize: "medium" }}
            />
            <DeleteOutlineOutlinedIcon sx={{ cursor: "pointer", fontSize: "medium" }}
            />
            <ColorPopper action="create" />
            <ImageOutlinedIcon sx={{ cursor: "pointer", fontSize: "medium" }} />
            <ArchiveOutlinedIcon
              sx={{ cursor: "pointer", fontSize: "medium" }}
            />
            <MoreVertOutlinedIcon
              sx={{ cursor: "pointer", fontSize: "medium" }}
            />
            <UndoOutlinedIcon sx={{ cursor: "pointer", fontSize: "medium" }} />
            <RedoOutlinedIcon sx={{ cursor: "pointer", fontSize: "medium" }} />
            <Button onClick={updateNoteValue} className="button-c" size="small" sx={{ color: "gray", fontSize: "small" }} >Close</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default TakeNote3;
