import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import InputComp from "../../AuthorizationComponents/InputComp";
import http from "../../../plugins/http";
import {resetUser, updateUserAvatar} from "../../../features/userSlice";
import {useNavigate} from "react-router-dom";

const PhotoUpdateModal = ({setError, setShowModal}) => {


    const dispatch = useDispatch();
    const nav = useNavigate();
    let userAvatar = useSelector(state => state.user.value.avatar)

    const [canUpdate, setCanUpdate] = useState(false);
    const [currentAvatar, setCurrentAvatar] = useState(userAvatar)


    const linkRef = useRef();

    const handleImageChange = async () => {
        if (/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(linkRef.current.value)) {
            setCurrentAvatar(linkRef.current.value)
            setCanUpdate(true)
        } else {
            setError('Not an image link')
            setCanUpdate(false)
        }
    }

    const handleConfirmChange = () => {
        http.post({avatar: linkRef.current.value}, 'avatarChangeRequest').then( res => {
            if(res.success){
                document.body.style.overflowY = "scroll";
                dispatch(updateUserAvatar(res.avatar))
                setShowModal({ show: false, type: "" });
            }else if(!res.success && res.message === 'Not logged in'){
                document.body.style.overflowY = "scroll";
                dispatch(resetUser())
                nav('/login')
            }else{
                setError(res.message)
            }
        })
    }

    return (
        <div className='d-flex flex-column p-5'>
            <h2>Update user avatar</h2>
            <div className='d-flex flex-wrap'>
                <div onChange={handleImageChange} className='d-flex flex-column justify-content-center flex-2'>
                    <p>Provide link containing image</p>
                    <InputComp type='text' text='Url' ref={linkRef}/>
                    {canUpdate && <button onClick={handleConfirmChange} className='button mt-2'>Update Photo</button>}
                </div>
                <div className='flex-1 d-flex justify-content-center align-items-center p-3'>
                    <img className='w-100 h-100' src={currentAvatar} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default PhotoUpdateModal;