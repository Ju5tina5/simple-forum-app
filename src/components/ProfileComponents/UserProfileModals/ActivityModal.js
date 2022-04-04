import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {resetUser, setSeenActivities} from "../../../features/userSlice";
import '../style.css';
import http from "../../../plugins/http";
import {useNavigate} from "react-router-dom";

const ActivityModal = () => {

    const user = useSelector(state => state.user.value)
    const seenActivities = useSelector( state => state.user.seenActivities)
    const dispatch = useDispatch();
    const nav = useNavigate;

    useEffect( () => {
        http.get('deleteUserActivity').then( res => {
            if(res.success){
                dispatch(setSeenActivities())
            }
            if(!res.success){
                dispatch(resetUser())
                nav('/login')
            }
        })
    }, [])

    return (
        <div className='d-flex flex-column align-items-center activityWrapper'>
            <h3 className='align-self-start'>New Comments</h3>
            {user.newActivity.map( (x, i) =>
                <div key={i} className='singleActivity p-2 m-3 text-center'>New comment on <span>{x.posted_on}</span> discussion from <span>{x.post_author}</span></div>)}
        </div>
    );
};

export default ActivityModal;