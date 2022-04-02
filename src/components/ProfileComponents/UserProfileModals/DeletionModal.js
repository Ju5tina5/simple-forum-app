import React, {useRef} from 'react';
import InputComp from "../../AuthorizationComponents/InputComp";
import http from "../../../plugins/http";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {resetUser} from "../../../features/userSlice";

const DeletionModal = ({setError}) => {

    const confirmPassword = useRef();
    const nav = useNavigate();
    const dispatch = useDispatch();

    const handleAccountDeletion = () => {

        if (confirmPassword.current.value.length < 5) return setError("Bad credentials")
        if (confirmPassword.current.value.length > 100) return setError("Bad credentials")

        http.post({password: confirmPassword.current.value}, 'requestUserDeletion').then( res => {
            if(res.success){
                document.body.style.overflowY = "scroll";
                dispatch(resetUser())
                nav('/')
            }
            if(!res.success){
                document.body.style.overflowY = "scroll";
                dispatch(resetUser())
                nav('/login')
            }
        })
    }

    return (
        <div className={'d-flex flex-column p-2'}>
            <h2>Delete Account</h2>
            <InputComp type={'password'} text='Password' ref={confirmPassword}/>
            <p className='pt-2'>Enter password to confirm account deletion</p>
            <button onClick={handleAccountDeletion} className={'button mt-2'}>Delete</button>
        </div>
    );
};

export default DeletionModal;