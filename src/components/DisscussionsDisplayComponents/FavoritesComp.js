import React, {useEffect, useState} from 'react';
import http from "../../plugins/http";
import SmallUserDiscussionComp from "../ProfileComponents/SmallUserDiscussionComp";
import {useDispatch} from "react-redux";
import {setFavoritesCount} from "../../features/userSlice";
import LoadingComponent from "../Layout/Loading/LoadingComponent";

const FavoritesComp = () => {

    const dispatch = useDispatch();
    const [favoriteItems, setFavoriteItems] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        let localFavorites = JSON.parse(localStorage.getItem('favorites'));
        if(localFavorites.length > 0){
            http.post({localFavorites}, `getFavoriteItems`).then( res => {
                if(res.success){
                    // length doesnt match set new favorites to local storage
                    if(localFavorites.length !== res.returnData.length){
                        let newFavorites = [];
                        res.returnData.map( x => newFavorites.push(x.unique_token))
                        localStorage.setItem('favorites', JSON.stringify(newFavorites))
                        dispatch(setFavoritesCount(newFavorites.length))
                    }
                    setFavoriteItems(res.returnData)
                    setLoading(false)
                }
            })
        }else{
            setLoading(false)
        }
    }, [localStorage.favorites])

    return (
        <div className={'d-flex flex-column justify-content-center align-items-center'}>
            {loading && <LoadingComponent />}
            {favoriteItems.length > 0 && !loading ?
                favoriteItems.map((x, i) => <SmallUserDiscussionComp key={i} item={x} userItems={favoriteItems} setUserItems={setFavoriteItems}/>)
                :
                <h2 className='w-100 text-center p-5'>No favorite discussions yet</h2>
            }
        </div>
    );
};

export default FavoritesComp;