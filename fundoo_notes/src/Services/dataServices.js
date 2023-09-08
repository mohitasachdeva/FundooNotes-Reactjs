import axios from 'axios'

const headerConfig = {
    headers: { Authorization: localStorage.getItem('token') }
}


export const getNoteList = () => {
    let res = axios.get("http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList?", headerConfig)
    return res;

}

export const addNote = (noteObj) => {
    let res = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes", noteObj, headerConfig)
    return res;
}

export const changeColorNote = (noteObj) => {
    let res = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes", noteObj, headerConfig)
    return res;
}

export const updateArchiveNote = (noteObj) => {
    let res = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes", noteObj, headerConfig)
    return res;
}

export const updateNote = (noteObj) => {
    let res = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes", noteObj, headerConfig)
    return res;
}

export const trashedNote = (noteObj) => {
    let res = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes", noteObj, headerConfig)
    return res;
}

export const pinUnpinNote = (noteObj) => {
    let res = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/pinUnpinNotes", noteObj, headerConfig)
    return res;
}




