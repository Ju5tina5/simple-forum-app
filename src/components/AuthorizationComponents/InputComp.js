import React, {useState} from 'react';

const InputComp = React.forwardRef(({type, text}, ref) => {

    const [allowed, setAllowed] = useState(false)

    const validateInput = (event) => {
        if (type === 'text') {
            if (event.target.value.length < 5 || event.target.value.length > 15) {
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
            <label htmlFor="UserName">{text} <span>*</span></label>
            <input onChange={(e) => validateInput(e)} className={allowed ? 'clear' : 'danger'} ref={ref} type={type}
                   placeholder={text}/>
        </>
    );
});

export default InputComp;