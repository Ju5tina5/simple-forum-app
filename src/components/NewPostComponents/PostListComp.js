import React, {useEffect, useState} from 'react';
import http from "../../plugins/http";
import SinglePostComp from "./SinglePostComp";
import NewPostComp from "./NewPostComp";
import PaginationComp from "../DisscussionsDisplayComponents/PaginationComp";
import LoadingComponent from "../Layout/Loading/LoadingComponent";

const PostListComp = ({token, user, discussion, setDiscussion}) => {

    const [comments, setComments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [reload, setReload] = useState(false);
    const [loading, setLoading] = useState(true);


    useEffect( () => {
        http.get(`getPosts/${token}/${currentPage}`).then( res => {
            if(res.success){
                setComments(res.modifiedPosts)
                setReload(false)
                setLoading(false)
            }
        })
    }, [currentPage, reload])

    return (
        <div className='d-flex flex-column align-items-center'>
            {discussion.post_count > 10 && <PaginationComp setLoading={setLoading} itemCount={discussion.post_count} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
            {loading && <LoadingComponent />}
            {comments.length > 0 && !loading
                ? comments.map((x, i) => <SinglePostComp key={i} item={x}/>)
                : <h2 className='w-100 text-center p-5'>No Comments yet</h2>
            }
            {discussion.post_count > 10 && <PaginationComp setLoading={setLoading} itemCount={discussion.post_count} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
            {user ? <NewPostComp setReload={setReload} setDiscussion={setDiscussion} discussion={discussion}/> : <p><span>*</span>You must be logged in to write comments</p>}
        </div>
    );
};

export default PostListComp;