import React from "react";
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { makeStyles } from "@mui/styles";
import './takeNote.css'


const useStyle = makeStyles({
    main_Container_1:{
        width: '100vw',
        height: '16vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        alignItems: 'center',
        marginTop: '-4.2rem',
        // border:'2px solid red',
    },
    takeNote1_1:{
        width: '42.5%',
        height: '50%',
        // border:'2px solid red',
        position:'relative',
        alignItems:'center'
    },
    card_1:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.5rem',
    },
    textFeild_1:{
        width: '73%',
        marginLeft: '0.6rem',
    },
    cardicons_1:{
        width: '27%',
        display: 'flex',
        justifyContent:'space-around',
    }
})


function TakeNote1(props) {
    const classes=useStyle()
    const openNote2 = ()=>{
        props.listenToTakeNote1()
    }
    return (
        <div className={classes.main_Container_1} >
            <div onClick={openNote2} className={classes.takeNote1_1} >
                <Card sx={{ minWidth: 75 }} className={classes.card_1}>
                    <div className={classes.textFeild_1}>
                        <TextField  variant="standard" InputProps={{ disableUnderline: true }}  sx={{input:{letterSpacing:'0.18ch' ,fontWeight:'bold' , color:'black' ,fontSize:'0.95rem'}}}placeholder="Take a note..." size="small" />
                    </div>
                    <div className={classes.cardicons_1}>
                        <CheckBoxOutlinedIcon sx={{cursor: 'pointer'}} />
                        <BrushOutlinedIcon sx={{cursor: 'pointer'}} />
                        <ImageOutlinedIcon sx={{cursor: 'pointer'}} />
                    </div>
                </Card>
            </div>
        </div>
    )
}
export default TakeNote1;