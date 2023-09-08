import React, {useState} from "react";
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Button from '@mui/material/Button';
import { makeStyles } from "@mui/styles";

import './takeNote2.css'
import { addNote } from "../../Services/dataServices";
import ColorPopper from "../colorpoper/ColorPopper";

const useStyle = makeStyles({
    main_Container_2:{
        width: '100vw',
        height:'12vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-4.2rem',
        marginBottom: '6.5rem',
    },
    takeNote1_2:{
        width: '42.5%',
        height: '20%',
        position: 'relative',
    },
    card:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '0.5rem'
    },
    textFeild:{
        width: '85%',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '1.3rem',
        marginBottom: '0.5rem',
        marginTop: '0.9rem',
    },
    cardicons:{
        width: '95%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button_c:{
        marginLeft: '1rem',
        color:'rgb(54, 54, 54)',
    }
})



function TakeNote2(props) {
    const classes=useStyle()
    const [noteObj, setNoteObj]=useState({title:"", description:"" , isArchived:false , color:""})

    const onTitleChannge = (event)=>{
        setNoteObj(prevState=>({
            ...prevState,
            title:event.target.value
        }))
    }
    const onDespChange = (event)=>{
        setNoteObj(prevState=>({
            ...prevState,
            description:event.target.value
        }))
    }

    const onSaveNote =()=>{
        props.listenToTakeNote2()
        
        addNote(noteObj).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }

    const isArchiveFunction = () => {
        setNoteObj(prevState=>({
            ...prevState,
            isArchived:true
        }))
        console.log('Note is Archived...')
    }

    const listenToColor = (colour)=>{
        setNoteObj(prevState=>({
            ...prevState,
            color:colour
        }))
        console.log('Note color is changed...')


    }

    return (
        // <div className="main-Container-2">
        <div className={classes.main_Container_2}>
        {/* <div className="takeNote1"> */}
        <div className={classes.takeNote1_2}>
            <Card  sx={{ backgroundColor:noteObj.color }} className={classes.card} >
                <div className={classes.textFeild}>
                    <TextField onChange={onTitleChannge} variant="standard" InputProps={{disableUnderline:true}} sx={{input:{fontSize:'0.95rem' ,letterSpacing:'0.2ch' , fontWeight:'200', color:'black'}}} placeholder="Title" size="small" />
                    <TextField onChange={onDespChange} variant="standard"InputProps={{disableUnderline:true}} sx={{input:{fontSize:'0.98rem' ,letterSpacing:'0.3ch' ,fontWeight:'200' , color:'black'}}} multiline="true"  placeholder="Take a note..." size="small" />
                </div>
                <div className={classes.cardicons}>
                    <NotificationsNoneIcon sx={{cursor: 'pointer' ,fontSize:'medium'  }}/>
                    <PersonAddAltIcon sx={{cursor: 'pointer' ,fontSize:'medium'}}/>
                    <ColorPopper listenToColor={listenToColor} action="create" />
                    <ImageOutlinedIcon sx={{cursor: 'pointer' ,fontSize:'medium'}} />
                    <ArchiveOutlinedIcon onClick={isArchiveFunction} sx={{cursor: 'pointer',fontSize:'medium'}}/>
                    <MoreVertOutlinedIcon sx={{cursor: 'pointer',fontSize:'medium'}}/>
                    <UndoOutlinedIcon sx={{cursor: 'pointer', fontSize:'medium'}}/>
                    <RedoOutlinedIcon sx={{cursor: 'pointer',fontSize:'medium'}}/>
                    <Button onClick={onSaveNote} className={classes.button_c} size="small" sx={{color:"gray" , fontSize:'small'}}>Close</Button>
                </div>
            </Card>
        </div>
        </div>
    )
}

export default TakeNote2;