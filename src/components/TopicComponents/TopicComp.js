import React, {useState} from 'react';
import './style.css';
import {BiPlus, BiMinus} from 'react-icons/bi'
import MiniDiscussionsDisplay from "./MiniDisscusionDisplay";

const TopicComp = ({item}) => {

    const [loaded, setLoaded] = useState(false);

    return (
        <>
            <div className={'d-flex align-items-center m-2 topicWrapper'}>
                <h4>{item.name}</h4>
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