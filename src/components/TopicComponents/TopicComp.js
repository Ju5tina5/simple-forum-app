import React, {useEffect, useState} from 'react';
import './style.css';
import {BiPlus, BiMinus} from 'react-icons/bi'
import MiniDiscussionsDisplay from "./MiniDisscusionDisplay";
import {useNavigate} from "react-router-dom";
import {HiCursorClick} from "react-icons/hi";

const TopicComp = ({item}) => {

    const [loaded, setLoaded] = useState(false);
    const nav = useNavigate();

    useEffect( () => {
        if(item.name === 'Technical'){
            setLoaded(true)
        }
    }, [])

    return (
        <>
            <div className={'d-flex flex-column flex-md-row align-items-md-center align-items-start m-2 topicWrapper'}>
                <h4 onClick={() => nav(`/simple-forum-app/Discussions/${item.name}`)} className='clickable'>{item.name} <HiCursorClick /></h4>
                <p>{item.description}</p>
                <div onClick={() => setLoaded(!loaded)} className={'justify-end'}>
                    {loaded ? <BiMinus /> : <BiPlus />}
                </div>
            </div>
            {loaded && <MiniDiscussionsDisplay searchValue={item.name}/>}
        </>

    );
};

export default TopicComp;