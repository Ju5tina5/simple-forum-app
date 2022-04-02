import React, {useState} from 'react';
import './style.css';

const InputComp = React.forwardRef(({type, text, defaultValue}, ref) => {

    const [allowed, setAllowed] = useState(false)

    const validateInput = (event) => {
        if (type === 'text') {
            if (event.target.value.length < 5 || event.target.value.length > 15) {
                setAllowed(false)
            } else {
                setAllowed(true)
            }
        }
        if(text === 'Url' && type === 'text'){
            if(!/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(event.target.value)){
                setAllowed(false)
            } else{
                setAllowed(true)
            }
        }
        if(text === 'Subject' && type === 'text'){
            if (event.target.value.length < 5 || event.target.value.length > 100) {
                setAllowed(false)
            } else {
                setAllowed(true)
            }
        }
        if (type === 'email') {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)) {
                setAllowed(true)
            } else {
                setAllowed(false)
            }
        }
        if(type === 'password'){
            if (event.target.value.length < 5 || event.target.value.length > 100) {
                setAllowed(false)
            } else {
                setAllowed(true)
            }
        }
    }

    return (
        <>
            <label htmlFor={text}>{text} <span>*</span></label>
            <input onChange={(e) => validateInput(e)} className={allowed ? 'clear' : 'danger'} ref={ref} type={type}
                   placeholder={text} defaultValue={defaultValue ? defaultValue : ''}/>
        </>
    );
});

export default InputComp;