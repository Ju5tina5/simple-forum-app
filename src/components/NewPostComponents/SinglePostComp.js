import React from 'react';
import './style.css';
import PostMessagePartComp from "./PostMessagePartComp";

const SinglePostComp = ({item, comments, setComments, setReload}) => {

    return (
        <div className='d-flex flex-column flex-md-row fl p-1 cardWrapper'>
            <div className={'d-flex flex-column align-items-center justify-content-center flex-1 userInfo m-1'}>
                <h5>{item.creator.user_name.charAt(0).toUpperCase() + item.creator.user_name.slice(1)}</h5>
                <img className='d-md-block d-none' src={item.creator.user_avatar} alt=""/>
                <p> User from: {new Date(item.creator.register_date).toLocaleDateString('lt-LT')}</p>
            </div>
            <PostMessagePartComp userItems={comments} setUserItems={setComments} item={item.post} setReload={setReload}/>
        </div>
    );
};

export default SinglePostComp;