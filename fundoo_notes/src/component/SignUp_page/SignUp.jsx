import './SignUp.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { UserSignUp } from '../../Services/userServices';
import { useNavigate } from 'react-router-dom';

const firstnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lastnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
// const ConfirmpasswordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function SignUp() {
    const navigate = useNavigate()
  

    const [signUpObj, setSignUpObj] = useState({
        firstName: "",
        lastName: "",
        service:"advance",
        email: "",
        password: "",
        // confirmPassword: ""
    })

    const [regexObj, setRegexObj] = useState(
        {
            firstnameBorder: false,
            firstnameHelper: "",
            lastnameBorder: false,
            lastnameHelper: "",
            emailBorder: false,
            emailHelper: "",
            passwordBorder: false,
            passwordHelper: "",
            // confirmpasswordBorder: false,
            // confirmpasswordHelper: ""
        });

    const handleChangeFirstname = (event) => {
        setSignUpObj(prevState => ({
            ...prevState,
            firstName: event.target.value
        }))
        console.log(event.target.value)
    }

    const handleChangeLastname = (event) => {
        setSignUpObj(prevState => ({
            ...prevState,
            lastName: event.target.value
        }))
        console.log(event.target.value)
    }

    const handleChangeEmail = (event) => {
        setSignUpObj(prevState => ({
            ...prevState,
            email: event.target.value
        }))
        console.log(event.target.value)
    }

    let handleChangePassword = (event) => {
        setSignUpObj(prevState => ({
            ...prevState,
            password: event.target.value,
        }))
        console.log(event.target.value)
    }

    // regex part  ---------------

    const onClickButton = () => {
        let fistnameTest = firstnameRegex.test(signUpObj.firstName)
        let lastnameTest = lastnameRegex.test(signUpObj.lastName)
        let emailTest = emailRegex.test(signUpObj.email)
        let passwordTest = passwordRegex.test(signUpObj.password)
        // let confirmPasswordTest = ConfirmpasswordRegex.test(signUp.confirmPassword)

        if (fistnameTest === false) {
            setRegexObj(prevState => ({
                ...prevState,
                firstnameBorder: true,
                firstnameHelper: "Enter valid Name"
            }))
        }
        else if (fistnameTest === true) {
            setRegexObj(prevState => ({
                ...prevState,
                firstnameBorder: false,
                firstnameHelper: ""
            }))
        }

        if (lastnameTest === false) {
            setRegexObj(prevState => ({
                ...prevState,
                firstnameBorder: true,
                firstnameHelper: "Enter valid LastName"
            }))
        }
        else if (lastnameTest === true) {
            setRegexObj(prevState => ({
                ...prevState,
                lastnameBorder: false,
                lastnameHelper: ""
            }))
        }

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
        
        console.log(signUpObj);

        if (fistnameTest === true && lastnameTest === true && emailTest === true && passwordTest === true) {
            UserSignUp(signUpObj).then((res) => {
                console.log(res);
            }).catch((error) => {
                console.log(error);
            })
            console.log("SignUp Success....");
            // alert("Login Success....");
        }
    }
    const onSignIn = () =>{
        navigate('./')
      }


    return (
        <header>
            <div className="container">
                <div className='Left'>
                    <div className='g-form'>
                        <img src={require('./images/download (1).png')} width="70" />
                        <h3>Create Your Google Account </h3>
                    </div>
                    <div className="first-c">
                        <TextField
                            onChange={handleChangeFirstname}
                            error={regexObj.firstnameBorder}
                            helperText={regexObj.firstnameHelper}
                            id="outlined-basic"
                            label="Firstname"
                            variant="outlined"
                            size="small"
                            sx={{ '& > :not(style)': { width: '29ch', fontSize: '0.75rem' }, }}
                        />
                        <TextField
                            onChange={handleChangeLastname} 
                            error={regexObj.lastnameBorder}
                            helperText={regexObj.lastnameHelper}
                            id="outlined-basic"
                            label="Lastname"
                            variant="outlined"
                            size="small"
                            sx={{ '& > :not(style)': { width: '29ch', fontSize: "0.75rem" }, }}
                        />
                    </div>
                    <div className="second-c">
                        <TextField
                            onChange={handleChangeEmail}
                            error={regexObj.emailBorder}
                            helperText={regexObj.emailHelper}
                            id="outlined-basic"
                            label="Username"
                            variant="outlined"
                            size="small"
                            sx={{ '& > :not(style)': { width: '59.5ch', fontSize: '0.75rem' }, }}
                        />

                        <div className='second-c-1'>
                            <p>You can use letters,numbers & perods </p>
                            <a href='#'>Use my current Email Addres instead</a>
                        </div>
                    </div>
                    <div className='third-c'>
                        <TextField
                            onChange={handleChangePassword}
                            error={regexObj.passwordBorder}
                            helperText={regexObj.passwordHelper}
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            size="small"
                            sx={{ '& > :not(style)': { width: '29ch', fontSize: '0.75rem' }, }}
                        />
                        <TextField
                            onChange={handleChangePassword}
                            error={regexObj.confirmpasswordBorder}
                            id="outlined-basic"
                            label="Confirm"
                            variant="outlined"
                            size="small"
                            sx={{ '& > :not(style)': { width: '29ch', fontSize: "0.75rem" }, }}
                        />
                    </div>
                    <div className='forth-c'>
                        <p>Use 8 or more characters with a mix of letters,numbers & symbols </p>
                    </div>
                    <div className='fifty-c'>
                        <a onClick={onSignIn} href='#'>Sign in instead</a>
                        <Button onClick={onClickButton} variant="contained" size="small" style={{ textTransform: 'capitalize' }}>Next</Button>

                    </div>
                </div>
                <div className='Right'>
                    <div className='right-imgbox'>
                        <img src={require('./images/download-2 (1).png')} />
                    </div>
                    <p>One Account. All of Google Working for you </p>
                </div>
            </div>
        </header>
    );
}

export default SignUp;
