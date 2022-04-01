import React, {useEffect, useState} from 'react';
import http from "../../plugins/http";

const MiniDiscussionsDisplay = ({searchValue}) => {

    const [newestDiscussions, setNewestDiscussions] = useState([])

    useEffect(() => {
        http.get(`getLatestDiscussionsByTopic/${searchValue}`).then(res => {
            if (res.success) {
                setNewestDiscussions(res.latestData)
            }
        })
    }, [searchValue])

    return (
        <div className='d-flex flex-column align-items-center'>
            {newestDiscussions.length > 0 &&
            newestDiscussions.map((x, i) =>
                <div key={i} className='d-flex p-2 align-items-center singleDiscussionWrapper'>
                    <strong>{x.title.charAt(0).toUpperCase() + x.title.slice(1)}</strong>
                    <p>Total posts: <span>{x.post_count}</span></p>
                    <em>Created {new Date(x.timestamp).toLocaleString('lt-LT')} by <i style={{color: 'var(--text-color)'}}>{x.creator_username}</i> </em>
                </div>
            )}
            {newestDiscussions.length === 0 && <h3>No discussions yet</h3>}
        </div>
    );
};

export default MiniDiscussionsDisplay;