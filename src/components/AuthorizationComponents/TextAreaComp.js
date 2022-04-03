import React, {useState} from 'react';
import './style.css';

const TextAreaComp = React.forwardRef(({text, defaultValue}, ref) => {

    const [allowed, setAllowed] = useState(false)

    const validateTextArea = (event) => {
        if (event.target.value.length < 50 || event.target.value.length > 1000) {
            setAllowed(false)
        } else {
            setAllowed(true)
        }
    }

    return (
        <>
            <label htmlFor={text}>{text} <span>*</span></label>
            <textarea onChange={(e) => validateTextArea(e)} style={{whiteSpace: 'pre-wrap'}}
                 className={allowed ? 'clear' : 'danger'}
                 id={text}
                      rows={5}
                 ref={ref}
                 placeholder={text} defaultValue={defaultValue ? defaultValue : ''}/>
        </>
    );
})

export default TextAreaComp;