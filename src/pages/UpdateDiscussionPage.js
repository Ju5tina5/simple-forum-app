import React, {useEffect} from 'react';
import CreateDiscussionComp from "../components/NewDiscussionComponents/CreateDiscussionComp";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const UpdateDiscussionPage = () => {

    const user = useSelector(state => state.user.value)
    const nav = useNavigate();
    useEffect( () => {
        if(!user){
            nav('/simple-forum-app/')
        }
    }, [])

    return (
        <div>
            <h2>Update Discussion</h2>
            <CreateDiscussionComp type='Update'/>
        </div>
    );
};

export default UpdateDiscussionPage;