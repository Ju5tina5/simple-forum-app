import React, {useEffect, useState} from 'react';
import http from "../../plugins/http";
import SmallUserDiscussionComp from "./SmallUserDiscussionComp";
import SmallUserPostComp from "./SmallUserPostComp";
import {useSelector} from "react-redux";
import LoadingComponent from "../Layout/Loading/LoadingComponent";

const UserDiscussions = ({type}) => {


    const [displayNumber, setDisplayNumber] = useState(5)
    const [userItems, setUserItems] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        http.get(`getUserCreatedItems/${displayNumber}/${type}`).then(res => {
            if(res.success){
                setUserItems(res.userItems)
                setLoading(false)
            }
        })
    }, [type, displayNumber])

    return (
        <div className={'d-flex flex-column align-items-center'}>
            {loading && <LoadingComponent />}
            {userItems && userItems.map( (x, i) =>
                x.hasOwnProperty('post_count')
                    ? <SmallUserDiscussionComp key={i} item={x} setUserItems={setUserItems} userItems={userItems}/>
                    : <SmallUserPostComp key={i} item={x} setUserItems={setUserItems} userItems={userItems}/>
            )}
        </div>
    );
};

export default UserDiscussions;