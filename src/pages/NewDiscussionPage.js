import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import CreateDiscussionComp from "../components/NewDiscussionComponents/CreateDiscussionComp";

const NewDiscussionPage = () => {

    const user = useSelector(state => state.user.value)
    const nav = useNavigate();
    useEffect( () => {
        if(!user){
            nav('/')
        }
    }, [])
    return (
        <div>
            <h2>New Discussion</h2>
            <CreateDiscussionComp />
        </div>
    );
};

export default NewDiscussionPage;