import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import {connect} from 'react-redux'
import './header.css'


function Header(props) {
    const openDrawer = ()=>{
        props.listernToHeader1()
    }
    console.log(props.lebel);
    return (
        <div>
            <header className="main-cointainer">
                <MenuIcon onClick={openDrawer} className="menuIcon" sx={{cursor: 'pointer'}} />
                <div className="header-logo">
                    <img src={require('./image/keep.png')} />
                    <h1>{props.label}</h1>
                    {/* <h1>Keep</h1> */}
                </div>
                <div className="header-searchbar">
                    <SearchIcon className="search-bar" sx={{cursor: 'pointer'}} />
                    <TextField   variant="standard"InputProps={{disableUnderline:true}} sx={{input:{fontSize:'1rem' ,letterSpacing:'0.1ch'}}} size="small"  placeholder="Search.."  />                    
                </div>
                <div className="right-side-icons">
                    <RefreshIcon sx={{cursor: 'pointer'}}/>
                    <ViewStreamOutlinedIcon sx={{cursor: 'pointer'}}/>
                    <SettingsOutlinedIcon sx={{cursor: 'pointer'}}/>
                    <AppsIcon className="App-icon" sx={{cursor: 'pointer'}}/>
                    <AccountCircleOutlinedIcon sx={{cursor: 'pointer'}}/>
                </div>
            </header>
        </div>
    );
}

const mapStateToProps=(state)=>{
    return{
        label:state.drawerReducer.label
    }

}

export default connect(mapStateToProps)(Header);
