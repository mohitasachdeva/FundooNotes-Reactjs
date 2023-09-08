import './App.css';
import SignUp from './component/SignUp_page/SignUp'
import SignIn from './component/SignIn_Page/Signin'
import DashBoard from './Component2/DashBoard/Dashboard';
import ColorPopper from './component/colorpoper/ColorPopper';
import { Provider  } from 'react-redux';
import store from './Component2/redux/store';
import RouterFun from './Component2/router/router';


// import DrawerFun from './component/Drawer/Drawer';
// import MuiHeader from './component/Header/muiHeader';


function App() {
  return (
    <div>
      {/* <ColorPopper/> */}
      <Provider store={store}>
        <RouterFun/>
      </Provider>
      {/* <MuiHeader/> */}
      
    {/* <DrawerFun/> */}
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      {/* <TakeNote1/> */}
      {/* <TakeNote2/> */}
      {/* <TakeNote3/> */}
      {/* <Header/> */}
       {/* <TakeNote1/> */}
      {/* <TakeN
      ote2/> */}


    </div>
  );
}

export default App;
