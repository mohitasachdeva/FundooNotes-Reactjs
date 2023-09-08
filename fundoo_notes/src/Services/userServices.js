import axios from 'axios'

export const logIn =(loginObj)=>{
    let res = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login",loginObj)
    console.log("Login.. in process......");
    // alert("Login.. in process......");
    return res;
}


export const UserSignUp =(signUpObj)=>{
    let res = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",signUpObj )
    console.log("SignUp.. in process......");
    // alert("Login.. in process......");
    return res;
}


