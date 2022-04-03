import React from 'react';
import {useSelector} from "react-redux";
import FavoritesComp from "../components/DisscussionsDisplayComponents/FavoritesComp";
import CreateTopicButton from "../components/NewDiscussionComponents/CreateTopicButton";

const FavoritesPage = () => {

    const user = useSelector(state => state.user.value)

    return (
        <div className={'d-flex flex-column main-bg mt-3 p-1'}>
            <div className={'d-flex align-items-center justify-content-between'}>
                <h2>Favorites</h2>
                {user && <CreateTopicButton />}
            </div>
            <FavoritesComp />
        </div>
    );
};

export default FavoritesPage;