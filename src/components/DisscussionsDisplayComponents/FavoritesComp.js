import React, {useEffect, useState} from 'react';
import http from "../../plugins/http";
import PaginationComp from "./PaginationComp";
import SmallUserDiscussionComp from "../ProfileComponents/SmallUserDiscussionComp";
import {useDispatch, useSelector} from "react-redux";
import {setFavoritesCount} from "../../features/userSlice";

const FavoritesComp = () => {

    const dispatch = useDispatch();
    const favoritesCount = useSelector( state => state.user.favorites)
    const [currentPage, setCurrentPage] = useState(1);
    const [favoriteItems, setFavoriteItems] = useState([]);

    console.log(favoriteItems)

    useEffect(() => {
        let localFavorites = JSON.parse(localStorage.getItem('favorites'));
        if(localFavorites.length > 0){
            http.post({localFavorites}, `getFavoriteItems/${currentPage}`).then( res => {
                if(res.success){
                    if(localFavorites.length !== res.returnData.length){
                        let newFavorites = [];
                        res.returnData.map( x => newFavorites.push(x.unique_token))
                        localStorage.setItem('favorites', JSON.stringify(newFavorites))
                        dispatch(setFavoritesCount(newFavorites.length))
                    }
                    setFavoriteItems(res.returnData)
                }
            })
        }
    }, [currentPage])

    return (
        <div className={'d-flex flex-column justify-content-center align-items-center'}>
            {favoritesCount > 10 && <PaginationComp itemCount={favoritesCount} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
            {favoriteItems.length > 0 ?
                favoriteItems.map((x, i) => <SmallUserDiscussionComp key={i} item={x} userItems={favoriteItems} setUserItems={setFavoriteItems}/>)
                :
                <h2 className='w-100 text-center p-5'>No favorite discussions yet</h2>
            }
            {favoritesCount > 10 && <PaginationComp itemCount={favoritesCount} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
        </div>
    );
};

export default FavoritesComp;