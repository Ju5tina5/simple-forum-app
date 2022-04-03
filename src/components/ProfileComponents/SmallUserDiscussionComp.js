import React, {useState} from 'react';
import {FaBookmark, FaRegBookmark} from 'react-icons/fa';
import {RiEdit2Fill, RiDeleteBack2Fill} from 'react-icons/ri'
import {useDispatch, useSelector} from "react-redux";
import {setItem} from "../../features/updatingItemSlice";
import {resetUser, setFavoritesCount, decreaseTopicCount} from "../../features/userSlice";
import './style.css'
import http from "../../plugins/http";
import {useNavigate, useLocation} from "react-router-dom";

const SmallUserDiscussionComp = ({item, setUserItems, userItems}) => {

    const user = useSelector(state => state.user.value);
    const [favorite, setFavorite] = useState(JSON.parse(localStorage.favorites).find((x) => x === item.unique_token));
    const dispatch = useDispatch();
    const nav = useNavigate();
    const location = useLocation();

    const handleFavoritesChange = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites'));
        setFavorite(!favorite)
        if (!favorite) {
            favorites.push(item.unique_token);
        } else {
            if(location.pathname === "/saved"){
                let arr = []
                for (let i = 0; i < userItems.length; i++) {
                    if(userItems[i].unique_token !== item.unique_token) arr.push(userItems[i])
                }
                setUserItems([...arr])
            }
            favorites = favorites.filter((x) => x !== item.unique_token);
        }
        localStorage.setItem("favorites", JSON.stringify(favorites));
        dispatch(setFavoritesCount(favorites.length))
    }

    const handleDiscussionDeletion = () => {
        if (favorite) {
            let favorites = JSON.parse(localStorage.getItem('favorites'));
            favorites = favorites.filter((x) => x !== item.unique_token);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            dispatch(setFavoritesCount(favorites.length))
        }
        http.get(`requestDiscussionDeletion/${item.unique_token}`).then(res => {
            if (!res.success && res.message === 'Not logged in') {
                dispatch(resetUser())
                nav('/login')
            }
            if (res.success) {
                dispatch(decreaseTopicCount())
                setUserItems(userItems.filter(x => x._id !== item._id))
            }
        })
    }

    const handleDiscussionEdit = () => {
        dispatch(setItem(item));
        nav(`/updateDiscussion/${item.unique_token}`);
    }

    return (
        <div
            className='d-flex flex-sm-column flex-md-row flex-wrap justify-content-between m-1 p-3 smallItem position-relative'>
            <div onClick={handleFavoritesChange} className={'position-absolute bookmark'}>{favorite ? <FaBookmark/> :
                <FaRegBookmark/>}</div>
            <div className='d-flex flex-column flex-2 p-1'>
                <h5 className='clickable'>{item.title.charAt(0).toUpperCase() + item.title.slice(1)}</h5>
                <p style={{whiteSpace: "pre-wrap"}} dangerouslySetInnerHTML={{__html: item.description}}/>
            </div>
            <div className='d-flex flex-column flex-1 p-1'>
                <p>Current post count: <span>{item.post_count}</span></p>
                <p>Last updated: <span>{new Date(item.lastModified).toLocaleString('lt-LT')}</span></p>
                {user && user.user_name.toLowerCase() === item.creator_username
                &&
                <div className='d-flex justify-content-evenly discussionManipulationButtons'>
                    <div onClick={handleDiscussionEdit}><h6>Edit <RiEdit2Fill/></h6></div>
                    <div onClick={handleDiscussionDeletion}><h6>Delete <RiDeleteBack2Fill/></h6></div>
                </div>
                }

            </div>
        </div>
    );
};

export default SmallUserDiscussionComp;