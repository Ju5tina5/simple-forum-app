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
                <div key={i}>
                    {x.title}
                </div>
            )}
            {newestDiscussions.length === 0 && <h3>No discussions yet</h3>}
        </div>
    );
};

export default MiniDiscussionsDisplay;