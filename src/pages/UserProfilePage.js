import React from 'react';
import ProfileComp from "../components/ProfileComponents/ProfileComp";
import DisplayUserItems from "../components/ProfileComponents/DisplayUserItems";

const UserProfilePage = () => {
    return (
        <div>
            <h2>Profile</h2>
            <div className='d-flex flex-column flex-lg-row flex-wrap'>
                <ProfileComp />
                <DisplayUserItems />
            </div>

        </div>
    );
};

export default UserProfilePage;