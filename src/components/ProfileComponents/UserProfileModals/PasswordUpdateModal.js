import React, {useRef} from 'react';
import {useNavigate} from "react-router-dom";
import InputComp from "../../AuthorizationComponents/InputComp";
import http from "../../../plugins/http";
import {resetUser} from "../../../features/userSlice";
import {useDispatch} from "react-redux";

const PasswordUpdateModal = ({setError, setShowModal}) => {

    const nav = useNavigate();
    const dispatch = useDispatch();

    const refs = {
        currentPassword: useRef(),
        newPassword: useRef(),
        newPasswordRepeat: useRef(),
    }

    const handleNewPasswordSetup = () => {

        const passwordObj = {
            password: refs.currentPassword.current.value,
            newPassword: refs.newPassword.current.value,
            newPasswordRepeat: refs.newPasswordRepeat.current.value
        }

        if (passwordObj.password.length < 5 || passwordObj.password.length > 100) return setError("Bad current password length")
        if (passwordObj.newPassword.length < 5 || passwordObj.newPassword.length > 100) return setError("Bad new password length")
        if (passwordObj.newPassword !== passwordObj.newPasswordRepeat) return setError("Passwords don't match")

        http.post(passwordObj, 'requestUserPasswordChange').then( res => {
            if(res.success){
                document.body.style.overflowY = "scroll";
                setShowModal({ show: false, type: "" });
            }else if(!res.success && res.message === 'Not logged in'){
                document.body.style.overflowY = "scroll";
                dispatch(resetUser())
                nav('/simple-forum-app/login')
            }else{
                setError(res.message)
            }
        })
    }

    return (
        <div className={'d-flex flex-column p-2'}>
            <h2>Change Password</h2>
            <p>Password should be from 5 to 100 symbols long/ Passwords should match</p>
            <InputComp type={'password'} text='Current Password' ref={refs.currentPassword}/>
            <p className='pt-2'>Enter current password</p>
            <InputComp type={'password'} text='New Password' ref={refs.newPassword}/>
            <p className='pt-2'>Enter New Password</p>
            <InputComp type={'password'} text='New Password Repeat' ref={refs.newPasswordRepeat}/>
            <p className='pt-2'>Repeat New Password</p>
            <button onClick={handleNewPasswordSetup} className={'button mt-2'}>Change Password</button>
        </div>
    );
};

export default PasswordUpdateModal;