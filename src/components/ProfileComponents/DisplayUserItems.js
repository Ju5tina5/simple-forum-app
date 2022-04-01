import React, {useState} from 'react';
import {useSelector} from "react-redux";
import './style.css';
import SelectedItemsDisplay from "./SelectedItemsDisplay";

const DisplayUserItems = () => {

    const userCountData = useSelector(state => state.user.counts)
    const [currentlyActive, setCurrentlyActive] = useState(0);

    return (
        <div className={'d-flex profileWrapper mt-2'}>
            <div className='d-flex text-center w-100'>
                <div
                    onClick={() => setCurrentlyActive(0)}
                    className={`${currentlyActive === 0 ? 'active' : ''} button flex-grow-1`}>
                    Topics <span>{userCountData.topicsCount}</span>
                </div>
                |
                <div
                    onClick={() => setCurrentlyActive(1)}
                    className={`${currentlyActive === 1 ? 'active' : ''} button flex-grow-1`}>
                    Posts <span>{userCountData.postsCount}</span>
                </div>
                <SelectedItemsDisplay currentlyActive={currentlyActive}/>
            </div>
        </div>
    );
};

export default DisplayUserItems;