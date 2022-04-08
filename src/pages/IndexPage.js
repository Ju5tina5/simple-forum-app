import React from 'react';
import data from '../assets/discussions.json';
import TopicComp from "../components/TopicComponents/TopicComp";
import {useSelector} from "react-redux";
import CreateTopicButton from "../components/NewDiscussionComponents/CreateTopicButton";
import {useNavigate} from "react-router-dom";
import {HiCursorClick} from "react-icons/hi";

const IndexPage = () => {

    const user = useSelector(state => state.user.value)
    const nav = useNavigate();

    return (
        <div className={'d-flex flex-column main-bg mt-3 p-1'}>
            <div className={'d-flex align-items-center justify-content-between'}>
                <h2 onClick={() => nav('/simple-forum-app/Discussions/All')} className='clickable'>Topics <HiCursorClick /></h2>
                {user && <CreateTopicButton />}
            </div>
            {data.map((x, i) =>
                <TopicComp key={i} item={x}/>
            )}
        </div>
    );
};

export default IndexPage;