import React, {useEffect, useState} from 'react';
import {useRef} from "react";
import InputComp from "./InputComp";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import http from "../../plugins/http";
import {setUser} from "../../features/userSlice";
import './style.css';

const LoginComp = () => {

    const [error, setError] = useState(null);
    const nav = useNavigate();
    const dispatch = useDispatch();

    const refs = {
        user_name: useRef(),
        password: useRef(),
    }

    const handleLoginSubmit = (e) => {
      e.preventDefault();
        const obj = {
            user_name: refs.user_name.current.value,
            password: refs.password.current.value,
        }
        if( obj.user_name.length < 5 || obj.user_name.length > 15){
            return setError('User name should be from 5 to 15 symbols long')
        }
        if (obj.password.length < 5 || obj.password.length > 100) {
            return setError('Password should be from 5 to 100 symbols long')
        }

        http.post(obj, 'login').then( res => {
            if(res.success){
                //setting user data
                dispatch(setUser(res.user))
                nav(`/profile`)
            }else{
                setError(res.message)
            }
        })
    }

    useEffect(() => {
        setTimeout( () => {
            if(error){
                setError(null)
            }
        }, 1500)
    }, [error])

    return (
        <div className='wrapperDiv'>
            <form onSubmit={handleLoginSubmit} className={'d-flex flex-column'}>
                <div className={'d-flex flex-column inputWrapper'}>
                    <p>User name will be display on all your posts (length from 5 to 15 symbols long)</p>
                    <InputComp type='text' ref={refs.user_name} text='User name'/>
                </div>
                <div className={'d-flex flex-column inputWrapper'}>
                    <p>Password should be from 5 to 100 symbols long/ Passwords should match</p>
                    <InputComp type='password' ref={refs.password} text='Password'/>
                </div>
                <div className={'d-flex justify-content-between inputWrapper'}>
                    <p>Fields marked with <span>*</span> are required</p>
                    {error && <span>{error}</span>}
                </div>
                <button className={'button'} type='submit'>Login</button>
            </form>
        </div>
    );
};

export default LoginComp;