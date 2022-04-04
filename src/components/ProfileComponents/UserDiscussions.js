import React, {useEffect, useState} from 'react';
import http from "../../plugins/http";
import SmallUserDiscussionComp from "./SmallUserDiscussionComp";
import LoadingComponent from "../Layout/Loading/LoadingComponent";
import PostMessagePartComp from "../NewPostComponents/PostMessagePartComp";
import {useSelector} from "react-redux";

const UserDiscussions = ({type}) => {


    const countData = useSelector(state => state.user.counts)
    const [displayNumber, setDisplayNumber] = useState(5)
    const [userItems, setUserItems] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        http.get(`getUserCreatedItems/${displayNumber}/${type}`).then(res => {
            if(res.success){
                if(res.userItems.titles){
                    let arr = [];
                    res.userItems.data.map( (x, i) => {
                        let newValue = x;
                        newValue['title'] = res.userItems.titles[i].title;
                       arr.push(newValue)
                    } )
                    setUserItems(arr)
                    setLoading(false)
                }else{
                    setUserItems(res.userItems)
                    setLoading(false)
                }
            }
        })
    }, [type, displayNumber])

    return (
        <div className={'d-flex flex-column align-items-center'}>
            {loading && <LoadingComponent />}
            {userItems && userItems.map( (x, i) =>
                x.hasOwnProperty('post_count')
                    ? <SmallUserDiscussionComp key={i} item={x} setUserItems={setUserItems} userItems={userItems}/>
                    : <PostMessagePartComp key={i} item={x} setUserItems={setUserItems} userItems={userItems}/>
            )}
            {type === 'discussions' && displayNumber < countData.topicsCount
            && <button
                onClick={() => {
                    setLoading(true)
                    setUserItems([])
                    setDisplayNumber(displayNumber + 5)
                }}
                className='button w-100'>Load more</button> }
            {type === 'posts' && displayNumber < countData.postsCount
            && <button
                onClick={() => {
                    setLoading(true)
                    setUserItems([])
                    setDisplayNumber(displayNumber + 5)
                }}
                className='button w-100'>Load more</button> }
        </div>
    );
};

export default UserDiscussions;