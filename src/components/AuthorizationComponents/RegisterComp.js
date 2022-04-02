import React, {useRef, useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUser} from "../../features/userSlice";
import './style.css';
import InputComp from "./InputComp";
import http from "../../plugins/http";

const RegisterComp = () => {

    const [error, setError] = useState(null);
    const nav = useNavigate();

    const refs = {
        user_name: useRef(),
        email: useRef(),
        password: useRef(),
        passwordTwo: useRef()
    }

    const handleRegisterFormSubmit = (e) => {
        e.preventDefault();
        const obj = {
            user_name: refs.user_name.current.value,
            email: refs.email.current.value,
            password: refs.password.current.value,
            passwordTwo: refs.passwordTwo.current.value
        }
        if( obj.user_name.length < 5 || obj.user_name.length > 15){
            return setError('User name should be from 5 to 15 symbols long')
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(obj.email)) {
            return setError('Email not provided')
        }
        if (obj.password.length < 5 || obj.password.length > 100) {
            return setError('Password should be from 5 to 100 symbols long')
        }
        if (obj.password  !== obj.passwordTwo ) {
            return setError('Passwords should match')
        }
        http.post(obj, 'register').then( async (res) => {
            if(res.success){
                nav(`/login`)
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
            <form onSubmit={handleRegisterFormSubmit} className='d-flex flex-column'>
                <div className={'d-flex flex-column inputWrapper'}>
                    <p>User name will be display on all your posts (length from 5 to 15 symbols long)</p>
                    <InputComp type='text' ref={refs.user_name} text='User name'/>
                </div>
                <div className={'d-flex flex-column inputWrapper'}>
                    <p>Email is required for password recovery</p>
                    <InputComp type='email' ref={refs.email} text='Email'/>
                </div>
                <div className={'d-flex flex-column inputWrapper'}>
                    <p>Password should be from 5 to 100 symbols long/ Passwords should match</p>
                    <InputComp type='password' ref={refs.password} text='Password'/>
                </div>
                <div className={'d-flex flex-column inputWrapper'}>
                    <InputComp type='password' ref={refs.passwordTwo} text='Password repeat'/>
                </div>
                <div className={'d-flex justify-content-between inputWrapper'}>
                    <p>Fields marked with <span>*</span> are required</p>
                    {error && <span>{error}</span>}
                </div>
                <button className={'button'} type='submit'>Register</button>
            </form>
        </div>

    );
};

export default RegisterComp;