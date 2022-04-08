import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {resetUser, setSeenActivities} from "../../../features/userSlice";
import '../style.css';
import http from "../../../plugins/http";
import {useNavigate} from "react-router-dom";

const ActivityModal = ({setShowModal}) => {

    const user = useSelector(state => state.user.value)
    const dispatch = useDispatch();
    const nav = useNavigate();

    useEffect( () => {
        // deletes activity array in database
        http.get('deleteUserActivity').then( res => {
            console.log(res)
            if(res.success){
                dispatch(setSeenActivities())
            }
            if(!res.success){
                document.body.style.overflowY = "scroll";
                dispatch(resetUser())
                nav('/simple-forum-app/login')
            }
        })
    }, [])

    const handlePegaNavigation = (x) => {
        document.body.style.overflowY = "scroll";
        setShowModal({ show: false, type: "" })
        nav(`/simple-forum-app/SingleDiscussion/${x.discussion_token}`);
    }

    return (
        <div className='d-flex flex-column align-items-center activityWrapper'>
            <h3 className='align-self-start'>New Comments</h3>
            {user.newActivity.map( (x, i) =>
                <div key={i} className='singleActivity p-2 m-3 text-center singleDiscussionWrapper' onClick={() =>  handlePegaNavigation(x)}>New comment in <span>{x.posted_on}</span> discussion from <span>{x.post_author}</span></div>)}
        </div>
    );
};

export default ActivityModal;