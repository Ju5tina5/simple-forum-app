import React from 'react';
import classes from './ModalWrapper.module.css'

const ModalWrapper = (props) => {
    return (
        <div className={classes.modal} onClick={props.onClick}>
            {props.children}
        </div>
    );
};

export default ModalWrapper;