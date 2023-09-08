import './Signin.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react'
import { logIn } from '../../Services/userServices';
import { useNavigate } from 'react-router-dom';
// import { makeStyles } from '@mui/material';
// import { border, margin } from '@mui/system';             

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function SignIn() {
  const navigate = useNavigate()
  
  const [signinObj, setSigninObj] = useState({
    email: "",
    password: ""
  })

  const [regexObj, setRegexObj] = useState(
    {
      emailBorder: false,
      emailHelper: "",
      passwordBorder: false,
      passwordHelper: ""

    });

  const handleChangeEmail = (event) => {

    setSigninObj(prevState => ({
      ...prevState,
      email: event.target.value
    }))
    // console.log(event.target.value)
  }

  const handleChangePassword = (event) => {

    setSigninObj(prevState => ({
      ...prevState,
      password: event.target.value
    }))
    // console.log(event.target.value)
  }

  const onClickButton = () => {

    let emailTest = emailRegex.test(signinObj.email)
    let passwordTest = passwordRegex.test(signinObj.password)

    if (emailTest === false) {
      setRegexObj(prevState => ({
        ...prevState,
        emailBorder: true,
        emailHelper: "Enter valid email"
      }))
    }
    else if (emailTest === true) {
      setRegexObj(prevState => ({
        ...prevState,
        emailBorder: false,
        emailHelper: ""
      }))
    }

    if (passwordTest === false) {
      setRegexObj(prevState => ({
        ...prevState,
        passwordBorder: true,
        passwordHelper: "Enter valid password"
      }))
    }
    else if (passwordTest === true) {
      setRegexObj(prevState => ({
        ...prevState,
        passwordBorder: false,
        passwordHelper: ""
      }))
    }
    console.log(signinObj);
    console.log(regexObj);

    if (emailTest === true && passwordTest === true) {
      logIn(signinObj).then((res) => {
        localStorage.setItem('token',res.data.id)
        navigate('/dashboard')
        console.log(res);
      }).catch((error) => {
        console.log(error);
      })
      console.log("Login Success....");
      // alert("Login Success....");
    }
  }

  const onCreateAcount = () =>{
    navigate('./SignUp')
  }

  return (
    <header>
      <div className="container-1">
        <div className="heading">
          <img src={require('../SignUp_page/images/download (1).png')} alt="" />
          <h1>Sign in</h1>
          <h3>in with your gmail account</h3>
        </div>
        <div className="Singin-first">
          <TextField
            onChange={handleChangeEmail}
            error={regexObj.emailBorder}
            helperText={regexObj.emailHelper}
            id="outlined-basic"
            label="Email or Phone"
            variant="outlined"
            size="small"
            sx={{ '& > :not(style)': { width: '59.5ch', fontSize: '0.77rem' }, }}
          />
          <TextField
            onChange={handleChangePassword}
            error={regexObj.passwordBorder}
            helperText={regexObj.passwordHelper}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            size="small"
            sx={{ '& > :not(style)': { width: '59.5ch', fontSize: '0.77rem' }, }}
          />
        </div>
        <div className="signin-sec">
          <a href='#'>Forgot email</a>
          <p>Not Your computer? Use Guest mode to sign in privately</p>
        </div>
        <div className="signin-3rd">
          <a onClick={onCreateAcount} href="#">Create Account</a>
          <Button onClick={onClickButton} variant="contained" size="small" style={{ textTransform: 'capitalize' }}>Next</Button>
        </div>
      </div>
    </header>
  );
}

export default SignIn;
