import React from "react";
import { useState, useEffect } from "react";
import DrawerFun from "../../component/Drawer/Drawer";
import Header from "../../component/Header/header";
import MuiHeader from "../../component/Header/muiHeader";
import TakeNote1 from "../../component/takeNote1/takeNote";
import TakeNote2 from "../../component/TakeNote2/takeNote2";
import TakeNote3 from "../../component/TakeNote3/takeNote3";
import { getNoteList } from "../../Services/dataServices";

import "./Dashboard.css";

function DashBoard() {
  const [toggle, setToggle] = useState(false);
  const [noteList, setNoteList] = useState([]);
  const [noteChoice, setNoteChoice] = useState("Notes");
  const [drawerToggle, setDrawerToggle] = useState(false);

  const listenToTakeNote1 = () => {
    setToggle(true);
  };
  const listenToTakeNote2 = () => {
    setToggle(false);
  };

  const listenToDrawer = (hover) => {
    setNoteChoice(hover);
  };

  useEffect(() => {
    getNote();
  }, [noteChoice]);

  const getNote = () => {
    getNoteList()
      .then((res) => {
        let filterNotes = [];
        if (noteChoice === "Notes") {
          filterNotes = res.data.data.data.filter((notes) => {
            if (notes.isArchived === false && notes.isDeleted === false) {
              return notes;
            }
          });
        } else if (noteChoice === "Archive") {
          filterNotes = res.data.data.data.filter((notes) => {
            if (notes.isArchived === true && notes.isDeleted === false) {
              return notes;
            }
          });
        } else if (noteChoice === "Trash") {
          filterNotes = res.data.data.data.filter((notes) => {
            if (notes.isArchived === false && notes.isDeleted === true) {
              return notes;
            }
          });
        }
        console.log(res);
        setNoteList(filterNotes);
      })
      .catch((error) => {
        console.log(error);
      });
    return getNoteList;
  };

  const listernToHeader1 = () => {
    setDrawerToggle(!drawerToggle);
  };

  return (
    <div>
      {/* <Header listernToHeader1={listernToHeader1} /> */}
      <MuiHeader  listernToHeader1={listernToHeader1} />
      <DrawerFun listenToDrawer={listenToDrawer} drawerToggle={drawerToggle} />
      <div>
        {toggle ? (
          <TakeNote2 listenToTakeNote2={listenToTakeNote2} />
        ) : (
          <TakeNote1 listenToTakeNote1={listenToTakeNote1} />
        )}
      </div>
      <div className="dashBoard-con">
        <div className="dashBoard-container">
          {noteList.map((note) => (
            <TakeNote3 note={note} getNote={getNote} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
