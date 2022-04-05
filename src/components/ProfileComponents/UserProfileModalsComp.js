import React, {useEffect, useState} from 'react';
import './style.css';
import {VscChromeClose} from 'react-icons/vsc'
import DeletionModal from "./UserProfileModals/DeletionModal";
import PhotoUpdateModal from "./UserProfileModals/PhotoUpdateModal";
import PasswordUpdateModal from "./UserProfileModals/PasswordUpdateModal";
import ActivityModal from "./UserProfileModals/ActivityModal";

const UserProfileModalsComp = ({type, setShowModal}) => {

    const [error, setError] = useState(null);

    const handleModalClose = () => {
        document.body.style.overflowY = "scroll";
        setShowModal({ show: false, type: "" });
    };

    useEffect(() => {
        setTimeout( () => {
            if(error){
                setError(null)
            }
        }, 1500)
    }, [error])


    return (
        <div className={'modalContent'} onClick={(e) => e.stopPropagation()} >
            <div onClick={handleModalClose} className={'position-absolute bookmark'}><VscChromeClose /></div>
            {type === 'password' && <PasswordUpdateModal setError={setError} setShowModal={setShowModal}/>}
            {type === 'picture' && <PhotoUpdateModal setError={setError} setShowModal={setShowModal}/>}
            {type === 'deletion' && <DeletionModal setError={setError}/>}
            {type === 'notifications' && <ActivityModal setError={setError} setShowModal={setShowModal}/>}
            {error && <span>{error}</span>}
        </div>
    );
};

export default UserProfileModalsComp;