import React from 'react';
import data from '../assets/discussions.json';
import TopicComp from "../components/TopicComponents/TopicComp";
import {useSelector} from "react-redux";
import CreateTopicButton from "../components/NewTopicComponents/CreateTopicButton";

const IndexPage = () => {

    const user = useSelector(state => state.user.value)

    return (
        <div className={'d-flex flex-column main-bg mt-3'}>
            <div className={'d-flex align-items-center justify-content-between'}>
                <h2>Topics</h2>
                {user && <CreateTopicButton />}
            </div>
            {data.map((x, i) =>
                <TopicComp key={i} item={x}/>
            )}
        </div>
    );
};

export default IndexPage;