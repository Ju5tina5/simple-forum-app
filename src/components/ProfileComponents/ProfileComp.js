import React, {useState,  useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {resetUser, setCounts} from "../../features/userSlice";
import './style.css'
import {AiFillDelete, AiFillPicture} from 'react-icons/ai';
import {RiLockPasswordFill} from 'react-icons/ri';
import http from "../../plugins/http";
import {useNavigate} from "react-router-dom";
import ModalWrapper from "../Layout/Modal/ModalWrapper";
import UserProfileModalsComp from "./UserProfileModalsComp";

const ProfileComp = () => {

    const nav = useNavigate();
    const user = useSelector(state => state.user.value)
    const dispatch = useDispatch();
    const userCountData = useSelector(state => state.user.counts)
    const [showModal, setShowModal] = useState({show: false, type: ""})


    useEffect( () => {
        http.get('getUserData').then( res => {
            if(res.success){
                dispatch(setCounts(res.countData));
            }
            if(!res.success){
                dispatch(resetUser())
                nav('/login');
            }
        })
        if(!user){
            nav('/login');
        }
    }, [])

    const handleModalClose = () => {
        document.body.style.overflowY = "scroll";
        setShowModal({ show: false, type: "" });
    };

    const handleModalOpen = (type) => {
            document.body.style.overflow = "hidden";
            setShowModal({ show: true, type: type });
    }


    return (
        <>
            {user &&
            <div className='d-flex flex-wrap justify-content-center profileWrapper'>
                {showModal.type && <ModalWrapper onClick={handleModalClose}><UserProfileModalsComp type={showModal.type} setShowModal={setShowModal}/></ModalWrapper>}
                <img className={'m-2'} src={user.avatar} alt=""/>
                <div className='d-flex flex-column m-2'>
                    <h4>Email: {user.email}</h4>
                    <h4>User name: {user.user_name}</h4>
                    <h4>Registered: {new Date(user.register_date).toLocaleDateString('lt-LT')}</h4>
                    <h4>Created Discussions: {userCountData.topicsCount}</h4>
                    <h4>Written posts: {userCountData.postsCount}</h4>
                </div>
                <div className={'iconsWrapper d-flex flex-column m-2'}>
                    <div className={'d-flex p-1'} onClick={() => handleModalOpen('password')}><h4>Update password</h4><RiLockPasswordFill /></div>
                    <div className={'d-flex p-1'} onClick={() => handleModalOpen('picture')}><h4>Change profile picture</h4><AiFillPicture  /></div>
                    <div className={'d-flex p-1'} onClick={() => handleModalOpen('deletion')}><h4>Delete profile</h4> <AiFillDelete  /></div>
                </div>
            </div>}
        </>
    );
};

export default ProfileComp;