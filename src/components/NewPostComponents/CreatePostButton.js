import React from 'react';
import {useNavigate} from "react-router-dom";

const CreatePostButton = ({setPostModal}) => {
    const nav = useNavigate();

    return (
        <div onClick={() => setPostModal(true)} className='createBtn p-2 text-center'>
            Comment
        </div>
    );
};

export default CreatePostButton;