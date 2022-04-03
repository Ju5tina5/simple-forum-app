import React from 'react';
import './style.css';

const SinglePostComp = ({item}) => {

    return (
        <div className='d-flex p-1 cardWrapper'>
            <div className={'d-flex flex-column align-items-center flex-1 userInfo'}>
                <h5>{item.creator.user_name.charAt(0).toUpperCase() + item.creator.user_name.slice(1)}</h5>
                <img src={item.creator.user_avatar} alt=""/>
                <p> User from: {new Date(item.creator.register_date).toLocaleDateString('lt-LT')}</p>

            </div>
            <div className={'d-flex flex-column flex-3 messageInfo p-1'}>
                <p className='w-100 text-end'>{new Date(item.post.timestamp).toLocaleString('lt-LT')}</p>
                <div style={{whiteSpace: "pre-wrap"}} className='flex-2 m-1' dangerouslySetInnerHTML={{__html: item.post.description}}/>
            </div>
        </div>
    );
};

export default SinglePostComp;