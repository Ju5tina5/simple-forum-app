import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import http from "../../plugins/http";
import SmallUserDiscussionComp from "../ProfileComponents/SmallUserDiscussionComp";
import PaginationComp from "./PaginationComp";
import LoadingComponent from "../Layout/Loading/LoadingComponent";

const DiscussionsComp = () => {

    const {topic} = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [items, setItems] = useState([]);
    const [allItemsCount, setAllItemsCount] = useState(0);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        http.get(`getDiscussions/${topic}/${currentPage}`).then(res => {
            if(res.success){
                // set total items count/ set current 10 items
                setAllItemsCount(res.discussionsCount)
                setItems(res.foundDiscussions)
                setLoading(false)
            }
        })
    }, [currentPage])

    return (
        <div className={'d-flex flex-column justify-content-center align-items-center'}>
            {loading && <LoadingComponent />}
            {allItemsCount > 10 && <PaginationComp setLoading={setLoading} itemCount={allItemsCount} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
            {items.length > 0 && !loading ?
                items.map((x, i) => <SmallUserDiscussionComp key={i} item={x} userItems={items} setUserItems={setItems}/>)
                :
                <h2 className='w-100 text-center p-5'>No discussios in this topic yet</h2>
            }
            {allItemsCount > 10 && <PaginationComp setLoading={setLoading} itemCount={allItemsCount} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
        </div>
    );
};

export default DiscussionsComp;