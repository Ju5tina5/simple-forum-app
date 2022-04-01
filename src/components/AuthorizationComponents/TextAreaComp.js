import React, {useState} from 'react';
import './style.css';

const TextAreaComp = React.forwardRef(({text}, ref) => {

    const [allowed, setAllowed] = useState(false)

    const validateTextArea = (event) => {
        if (event.target.value.length < 50 || event.target.value.length > 500) {
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
                 ref={ref}
                 placeholder={text} />
        </>
    );
})

export default TextAreaComp;