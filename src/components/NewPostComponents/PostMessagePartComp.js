import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {RiDeleteBack2Fill, RiEdit2Fill} from "react-icons/ri";
import http from "../../plugins/http";
import {useNavigate} from 'react-router-dom';
import {decreasePostsCount, resetUser} from "../../features/userSlice";

const PostMessagePartComp = ({item, userItems, setUserItems, setReload}) => {

    const user = useSelector(state => state.user.value);
    const nav = useNavigate();
    const dispatch = useDispatch();


    const handleSinglePostDeletionRequest = () => {
        http.get(`requestPostDeletion/${item._id}`).then( res => {
            console.log(res)
            if(res.message === "Not logged in"){
                dispatch(resetUser())
                nav('/login')
            }
            if(res.success){
                let tempArr = userItems.filter( x => x._id !== item._id)
                dispatch(decreasePostsCount())
                setUserItems([...tempArr])
                if(setReload){
                    setReload(true)
                }
            }
        })
    }

    return (
        <div className={'smallItem d-flex flex-column flex-3 messageInfo p-1 m-2'}>
            {item.title && <h5 >Comment from: <span onClick={() => nav(`/SingleDiscussion/${item.discussion_token}`)} className={'clickable'}>{item.title}</span> discussion</h5>}
            <p className='w-100 text-end'>{new Date(item.timestamp).toLocaleString('lt-LT')}</p>
            <div style={{whiteSpace: "pre-wrap"}} className='flex-2 m-1' dangerouslySetInnerHTML={{__html: item.description}}/>
            {user && user.user_name.toLowerCase() === item.creator_username &&
            <div className={'d-flex justify-content-end discussionManipulationButtons'}>
                <div onClick={handleSinglePostDeletionRequest}><h6>Delete <RiDeleteBack2Fill/></h6></div>
            </div>}
            }

        </div>
    );
};

export default PostMessagePartComp;