import React from 'react';
import {Link} from 'react-router-dom';
import {RiLogoutBoxLine} from 'react-icons/ri';
import "./style.css";

const ToolBarComp = ({userLoggedIn}) => {
    if(userLoggedIn){
        return (
            <div className={'toolBar'}>
                <Link to={'/'}>Discussions</Link>
                <Link to={'/profile/:user_name'}>{userLoggedIn.user_name} Profile</Link>
                <div className={`logoutDiv`}><RiLogoutBoxLine /> Logout</div>
            </div>
        );
    }else{
        return (
            <div className={'toolBar'}>
                <Link to={'/'}>Discussions</Link>
                <Link to={'/login'}>Login</Link>
                <Link to={'/register'}>Register</Link>
            </div>
        );
    }
};

export default ToolBarComp;