import React, {useState,  useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {setCounts} from "../../features/userSlice";
import './style.css'
import {AiFillDelete, AiFillPicture, AiFillSetting} from 'react-icons/ai';
import http from "../../plugins/http";
import {useNavigate} from "react-router-dom";

const ProfileComp = () => {

    const nav = useNavigate();
    const user = useSelector(state => state.user.value)
    const dispatch = useDispatch();
    const userCountData = useSelector(state => state.user.counts)
    const [showModal, setShowModal] = useState({show: false, type: ''})


    useEffect( () => {
        if(!user){
            nav('/login')
        }
        http.get('getUserData').then( res => {
            if(res.success){
                dispatch(setCounts(res.countData))
            }
            if(!res.success){
                nav('/login')
            }
        })
    }, [])



    return (
        <>
            {user &&
            <div className='d-flex flex-wrap justify-content-center profileWrapper'>
                <img className={'m-2'} src={user.avatar} alt=""/>
                <div className='d-flex flex-column m-2'>
                    <h4>Email: {user.email}</h4>
                    <h4>User name: {user.user_name}</h4>
                    <h4>Registered: {new Date(user.register_date).toLocaleDateString('lt-LT')}</h4>
                    <h4>Created Discussions: {userCountData.topicsCount}</h4>
                    <h4>Written posts: {userCountData.postsCount}</h4>
                </div>
                <div className={'iconsWrapper d-flex flex-column m-2'}>
                    <div className={'d-flex'} onClick={() => setShowModal({show: true, type: 'settings'})}><h4>Change profile info</h4><AiFillSetting /></div>
                    <div className={'d-flex'} onClick={() => setShowModal({show: true, type: 'picture'})}><h4>Change profile picture</h4><AiFillPicture  /></div>
                    <div className={'d-flex'} onClick={() => setShowModal({show: true, type: 'deletion'})}><h4>Delete profile</h4> <AiFillDelete  /></div>
                </div>
            </div>}
        </>
    );
};

export default ProfileComp;