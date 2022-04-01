import React from 'react';

const SmallUserDiscussionComp = ({item}) => {

    return (
        <div className='d-flex justify-content-between m-1 p-3 smallItem'>
            <div className='d-flex flex-column'>
                <h5>{item.title.charAt(0).toUpperCase() + item.title.slice(1)}</h5>
                <p style={{whiteSpace: "pre-wrap"}} dangerouslySetInnerHTML={{__html: item.description}}/>

            </div>
            <div className='d-flex flex-column'>
                <p>Current post count: <span>{item.post_count}</span></p>
                <p>Last modified tototoodddddddddddddddtotototooto</p>
            </div>
        </div>
    );
};

export default SmallUserDiscussionComp;