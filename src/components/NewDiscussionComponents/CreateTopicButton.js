import React from 'react';
import './style.css';
import {useNavigate} from "react-router-dom";

const CreateTopicButton = () => {

    const nav = useNavigate();

    return (
        <div onClick={() => nav('/newDiscussion')} className='createBtn p-2'>
            Create Topic
        </div>
    );
};

export default CreateTopicButton;