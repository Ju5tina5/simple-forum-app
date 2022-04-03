import React, {useState} from 'react';
import CreatePostButton from "../NewPostComponents/CreatePostButton";
import {useSelector} from "react-redux";
import NewPostComp from "../NewPostComponents/NewPostComp";

const LargeDiscussionComp = ({item}) => {

    const user = useSelector(state => state.user.value);
    const [commentModal, setCommentModal] = useState(false);

    console.log(item)

    return (
        <div className={'d-flex flex-column topicWrapper p-2'}>
            {user && <CreatePostButton />}
            <h3 className={'text-center'}>{item.title.charAt(0).toUpperCase() + item.title.slice(1)}</h3>
            <div className='d-flex align-items-center justify-content-center text-center mt-2 pt-1 infoWrapper'>
                <p style={{whiteSpace: "pre-wrap"}} className='flex-2 m-1' dangerouslySetInnerHTML={{__html: item.description}}/>
                <div className='d-flex flex-column text-start flex-1 m-1'>
                    <p>Topic: {item.topic_name}</p>
                    <p>Created by: <span>{item.creator_username}</span></p>
                    <p>Total posts: <span>{item.post_count}</span></p>
                    <p>Last activity: {new Date(item.lastModified).toLocaleString('lt-LT')}</p>
                </div>
            </div>

        </div>
    );
};

export default LargeDiscussionComp;