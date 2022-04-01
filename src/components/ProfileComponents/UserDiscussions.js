import React, {useEffect, useState} from 'react';
import http from "../../plugins/http";
import MiniDisscusionDisplay from "../TopicComponents/MiniDisscusionDisplay";
import SmallUserDiscussionComp from "./SmallUserDiscussionComp";
import SmallUserPostComp from "./SmallUserPostComp";

const UserDiscussions = ({type}) => {

    const [displayNumber, setDisplayNumber] = useState(5)
    const [userItems, setUserItems] = useState(null);

    useEffect(() => {
        http.get(`getUserCreatedItems/${displayNumber}/${type}`).then(res => {
            if(res.success){
                setUserItems(res.userItems)
            }
        })
    }, [displayNumber])

    return (
        <div className={'d-flex flex-column align-items-center'}>
            {userItems && userItems.map( (x, i) =>
                x.hasOwnProperty('post_count')
                    ? <SmallUserDiscussionComp key={i} item={x}/>
                    : <SmallUserPostComp key={i} item={x}/>
            )}
        </div>
    );
};

export default UserDiscussions;