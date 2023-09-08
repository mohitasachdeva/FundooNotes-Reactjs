import React from 'react'
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import SignIn from '../../component/SignIn_Page/Signin';
import SignUp from '../../component/SignUp_page/SignUp';
import DashBoard from '../DashBoard/Dashboard';

function RouterFun() {
  return (
    <div>
   <Router>
    <Routes>
        <Route exact path='/' element={<SignIn/>}/>
        <Route  path='/' element={<SignIn/>}/>
        <Route  path='/SignUp' element={<SignUp/>}/>
        <Route  path='/dashboard' element={<DashBoard/>}/>
    </Routes>
   </Router>
   </div>
  )
}
export default RouterFun;