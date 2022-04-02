import React, {useState} from 'react';
import {useSelector} from "react-redux";
import './style.css';
import UserDiscussions from "./UserDiscussions";
import CreateTopicButton from "../NewDiscussionComponents/CreateTopicButton";

const DisplayUserItems = () => {

    const userCountData = useSelector(state => state.user.counts)
    const [currentlyActive, setCurrentlyActive] = useState(0);

    return (
        <div className={'d-flex flex-column profileWrapper mt-2'}>
            <div className='d-flex text-center w-100'>
                <div
                    onClick={() => setCurrentlyActive(0)}
                    className={`${currentlyActive === 0 ? 'active' : ''} button flex-grow-1`}>
                    Discussions <span>{userCountData.topicsCount}</span>
                </div>
                |
                <div
                    onClick={() => setCurrentlyActive(1)}
                    className={`${currentlyActive === 1 ? 'active' : ''} button flex-grow-1`}>
                    Posts <span>{userCountData.postsCount}</span>
                </div>
            </div>
            <div>
                {currentlyActive === 0 && userCountData.topicsCount > 0 &&
                    <>
                        <CreateTopicButton />
                        <UserDiscussions type={'discussions'}/>
                    </>}
                {currentlyActive === 0 && userCountData.topicsCount === 0 &&
                    <>
                        <CreateTopicButton />
                        <h4 className='p-5'>No discussion yet</h4>
                    </>}
                {currentlyActive === 1 && userCountData.postsCount > 0 && <UserDiscussions type={'posts'}/>}
                {currentlyActive === 1 && userCountData.postsCount === 0 && <h4 className='p-5'>No posts yet</h4>}
            </div>
        </div>
    );
};

export default DisplayUserItems;