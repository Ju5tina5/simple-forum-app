import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import http from "../../plugins/http";
import LargeDiscussionComp from "./LargeDiscussionComp";
import SinglePostComp from "../NewPostComponents/SinglePostComp";
import PostListComp from "../NewPostComponents/PostListComp";
import NewPostComp from "../NewPostComponents/NewPostComp";


const SingleDiscussionComp = () => {

    const {token} = useParams();
    const user = useSelector(state => state.user.value);
    const [discussion, setDiscussion] = useState(null);

    useEffect(() => {
        http.get(`getSingleDiscussion/${token}`).then(res => {
            if (res.success) {
                setDiscussion(res.foundDiscussion)
            }
        })
    }, [])

    return (
        <div className=' p-2'>
            {!user && <p><span>*</span>You must be logged in to write comments</p>}
            {discussion &&
                <>
                    <LargeDiscussionComp item={discussion}/>
                    <PostListComp token={token} user={user} discussion={discussion} setDiscussion={setDiscussion}/>
                </>}
        </div>
    );
};

export default SingleDiscussionComp;