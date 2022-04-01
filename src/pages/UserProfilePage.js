import React from 'react';
import ProfileComp from "../components/ProfileComponents/ProfileComp";
import DisplayUserItems from "../components/ProfileComponents/DisplayUserItems";

const UserProfilePage = () => {
    return (
        <div>
            <h2>Profile</h2>
            <ProfileComp />
            <DisplayUserItems />
        </div>
    );
};

export default UserProfilePage;