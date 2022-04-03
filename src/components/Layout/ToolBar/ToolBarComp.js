import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {RiLogoutBoxLine, RiBookmarkFill} from 'react-icons/ri';
import {useSelector, useDispatch} from "react-redux";
import {resetUser} from "../../../features/userSlice";
import "./style.css";
import http from "../../../plugins/http";

const ToolBarComp = () => {

    const userLoggedIn = useSelector(state => state.user.value)
    const favoritesCount = useSelector(state => state.user.favorites)
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
                <Link to={'/'}>Main</Link>
                <Link to={`/profile`}>{userLoggedIn.user_name} Profile</Link>
                <div className={`logoutDiv`} onClick={handleUserLogOut}><RiLogoutBoxLine />Logout</div>
                <Link to={'/saved'}>Favorites <RiBookmarkFill /> {favoritesCount > 0 && favoritesCount}</Link>
            </div>
        );
    }else{
        return (
            <div className={'toolBar'}>
                <Link to={'/'}>Main</Link>
                <Link to={'/login'}>Login</Link>
                <Link to={'/register'}>Register</Link>
                <Link to={'/saved'}>Favorites <RiBookmarkFill /> {favoritesCount > 0 && favoritesCount}</Link>
            </div>
        );
    }
};

export default ToolBarComp;