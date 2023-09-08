import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
// import { create } from '@mui/material/styles/createTransitions';
import { changeColorNote } from '../../Services/dataServices';

export default function ColorPopper(props) {
  const colors = ["#FFFFF0", "#FFFDE0", "#AEC4EB", "#F1948A", "#F0FFF0", "#F5B7B1", "#F5B041", "#DC7633", "#FFE8D0", "#AAB7B8", "#FFF0F0", "#F5B041"]

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const selectColor = (colour ) => {
    if (props.action === "create") {
      props.listenToColor(colour)
    }
    else if (props.action === "update") {
      let updateColor = {
        noteIdList:[props.id],
        color: colour
      }
      changeColorNote(updateColor).then((res)=>{
        props.listenToColorUpdate()
        console.log(res, "note color updated...............");
      })
      .catch((err)=>{
        console.log(err);
      })
      console.log(colour,"color----------------->");

    }
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      {/* <button aria-describedby={id} type="button" onClick={handleClick}>
      <PaletteOutlinedIcon sx={{cursor: 'pointer' ,fontSize:'medium'}}/>
      </button> */}
      <PaletteOutlinedIcon onClick={handleClick} sx={{ cursor: 'pointer', fontSize: 'medium' }} />
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ p: 0.5, borderRadius: '5px', bgcolor: 'background.paper', display: 'flex', backgroundColor: "#F6D5D6" }}>
          {
            colors.map((color) => (
              <div style={{ height: 25, width: 25, borderRadius: '50%', margin: '0.15rem', backgroundColor: color, }} onClick={() => selectColor(color)}></div>
            ))
          }
        </Box>
      </Popper>
    </div>
  );
}
