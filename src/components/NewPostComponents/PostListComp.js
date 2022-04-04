import React, {useEffect, useRef, useState} from 'react';
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
    const topRef = useRef(null);
    const bottomRef = useRef(null)

    const executeScroll = (ref) => ref.current.scrollIntoView();

    useEffect( () => {
        http.get(`getPosts/${token}/${currentPage}`).then( res => {
            if(res.success){
                setComments(res.modifiedPosts);
                setReload(false);
                setLoading(false);
                executeScroll(topRef);
            }
        })
    }, [currentPage, reload])

    return (
        <div className='d-flex flex-column align-items-center' ref={topRef}>
            {user &&
                <div onClick={() => executeScroll(bottomRef)} className='createBtn p-2 mt-2 text-center align-self-start'>
                    Comment
                </div>
            }
            {discussion.post_count > 10 && <PaginationComp setLoading={setLoading} itemCount={discussion.post_count} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
            {loading && <LoadingComponent />}
            {comments.length > 0 && !loading
                ? comments.map((x, i) => <SinglePostComp key={i} item={x} comments={comments} setComments={setComments} setReload={setReload}/>)
                : <h2 className='w-100 text-center p-5'>No Comments yet</h2>
            }
            {discussion.post_count > 10 && <PaginationComp setLoading={setLoading} itemCount={discussion.post_count} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
            {user ? <div ref={bottomRef} className={'w-100'}><NewPostComp  setCurrentPage={setCurrentPage} setReload={setReload} setDiscussion={setDiscussion} /></div> : <p><span>*</span>You must be logged in to write comments</p>}
        </div>
    );
};

export default PostListComp;