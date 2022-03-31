import React from 'react';
import './style..css';

const RegisterComp = () => {

    const handleRegisterFormSubmit = () => {

    }

    return (
        <div className='wrapperDiv'>
            <form onSubmit={handleRegisterFormSubmit} className='d-flex flex-column'>
                <div className={'d-flex flex-column inputWrapper'}>
                    <label htmlFor="UserName">
                        Username <span>*</span>
                    </label>
                    <input id='UserName' type="text" placeholder='User name'/>
                </div>
                <div className={'d-flex flex-column inputWrapper'}>
                    <label htmlFor="Email">
                        Email <span>*</span>
                    </label>
                    <input id='Email' type="email" placeholder='email'/>
                </div>
                <div className={'d-flex flex-column inputWrapper'}>
                    <label htmlFor="Password">
                        Password <span>*</span>
                    </label>
                    <input id='Password' type="text" placeholder='Password'/>
                </div>
                <div className={'d-flex flex-column inputWrapper'}>
                    <label htmlFor="PasswordTwo">
                        Password Repeat <span>*</span>
                    </label>
                    <input id='PasswordTwo' type="text" placeholder='Repeat password'/>
                </div>
                <p>Fields marked with <span>*</span> are required</p>
                <button type='submit'>Register</button>
            </form>
        </div>

    );
};

export default RegisterComp;