import React from 'react';
import './style.css';
import {useNavigate} from "react-router-dom";

const CreateTopicButton = () => {

    const nav = useNavigate();

    return (
        <div onClick={() => nav('/simple-forum-app/newDiscussion')} className='createBtn p-2'>
            Create Discussion
        </div>
    );
};

export default CreateTopicButton;