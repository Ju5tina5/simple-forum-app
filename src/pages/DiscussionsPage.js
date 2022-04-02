import React from 'react';
import DiscussionsComp from "../components/DisscussionsDisplayComponents/DiscussionsComp";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import CreateTopicButton from "../components/NewDiscussionComponents/CreateTopicButton";

const DiscussionsPage = () => {

    const user = useSelector(state => state.user.value)
    const {topic} = useParams();

    return (
        <div className={'d-flex flex-column main-bg mt-3 p-1'}>
            <div className={'d-flex align-items-center justify-content-between'}>
                <h2>{topic} discussions</h2>
                {user && <CreateTopicButton />}
            </div>
            <DiscussionsComp />
        </div>
    );
};

export default DiscussionsPage;