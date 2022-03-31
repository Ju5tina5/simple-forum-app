import React, {useState} from 'react';
import {useSelector} from "react-redux";
import './style.css'
import {AiFillDelete, AiFillPicture, AiFillSetting} from 'react-icons/ai';

const ProfileComp = () => {

    const user = useSelector(state => state.user.value)
    const [showModal, setShowModal] = useState({show: false, type: ''})

    return (
        <div className='d-flex flex-wrap justify-content-center justify-content-md-evenly justify-content-sm-center profileWrapper'>
            <img className={'m-2'} src={user.avatar} alt=""/>
            <div className='d-flex flex-column m-2'>
                <div>
                    <h4>{user.email}</h4>
                    <h4>{user.user_name}</h4>
                </div>
                <div className={'iconWrapper d-flex justify-content-evenly'}>
                    <AiFillSetting onClick={() => setShowModal({show: true, type: 'settings'})}/>
                    <AiFillPicture onClick={() => setShowModal({show: true, type: 'picture'})} />
                    <AiFillDelete onClick={() => setShowModal({show: true, type: 'deletion'})} />
                </div>
            </div>
        </div>
    );
};

export default ProfileComp;