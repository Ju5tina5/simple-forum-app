import React, {useEffect, useState} from 'react';
import http from "../../plugins/http";
import {useNavigate} from "react-router-dom";
import LoadingComponent from "../Layout/Loading/LoadingComponent";

const MiniDiscussionsDisplay = ({searchValue}) => {

    const [newestDiscussions, setNewestDiscussions] = useState([])
    const [loading, setLoading] = useState(true)
    const nav = useNavigate();

    useEffect(() => {
        http.get(`getLatestDiscussionsByTopic/${searchValue}`).then(res => {
            if (res.success) {
                setNewestDiscussions(res.latestData)
                setLoading(false)
            }
        })
    }, [searchValue])

    return (
        <div className='d-flex flex-column align-items-center'>
            {loading && <LoadingComponent />}
            {newestDiscussions.length > 0 &&
            newestDiscussions.map((x, i) =>
                <div onClick={() => nav(`/SingleDiscussion/${x.unique_token}`)} key={i} className='d-flex flex-column flex-md-row p-2 align-items-center justify-content-center singleDiscussionWrapper'>
                    <strong>{x.title.charAt(0).toUpperCase() + x.title.slice(1)}</strong>
                    <p>Total posts: <span>{x.post_count}</span></p>
                    <em className='text-center'>Created {new Date(x.timestamp).toLocaleString('lt-LT')} by <i style={{color: 'var(--text-color)'}}>{x.creator_username}</i> </em>
                </div>
            )}
            {newestDiscussions.length === 0 && <h3>No discussions yet</h3>}
        </div>
    );
};

export default MiniDiscussionsDisplay;