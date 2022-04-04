import React from 'react';
import './style.css';
import PostMessagePartComp from "./PostMessagePartComp";

const SinglePostComp = ({item, comments, setComments, setReload}) => {

    return (
        <div className='d-flex p-1 cardWrapper'>
            <div className={'d-flex flex-column align-items-center flex-1 userInfo'}>
                <h5>{item.creator.user_name.charAt(0).toUpperCase() + item.creator.user_name.slice(1)}</h5>
                <img src={item.creator.user_avatar} alt=""/>
                <p> User from: {new Date(item.creator.register_date).toLocaleDateString('lt-LT')}</p>
            </div>
            <PostMessagePartComp userItems={comments} setUserItems={setComments} item={item.post} setReload={setReload}/>
        </div>
    );
};

export default SinglePostComp;