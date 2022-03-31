import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {RiLogoutBoxLine} from 'react-icons/ri';
import {useSelector, useDispatch} from "react-redux";
import {resetUser} from "../../../features/userSlice";
import "./style.css";
import http from "../../../plugins/http";

const ToolBarComp = () => {

    const userLoggedIn = useSelector(state => state.user.value)
    const dispatch = useDispatch();
    const nav = useNavigate();

    const handleUserLogOut = () => {
        http.get('logout').then( res => {
            if(res.success){
                nav('/')
                dispatch(resetUser())
            }
        })
    }

    if(userLoggedIn){
        return (
            <div className={'toolBar'}>
                <Link to={'/'}>Discussions</Link>
                <Link to={`/profile/${userLoggedIn.user_name}`}>{userLoggedIn.user_name} Profile</Link>
                <div className={`logoutDiv`} onClick={handleUserLogOut}><RiLogoutBoxLine />Logout</div>
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