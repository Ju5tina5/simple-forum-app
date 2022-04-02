import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import http from "../../plugins/http";
import SmallUserDiscussionComp from "../ProfileComponents/SmallUserDiscussionComp";
import PaginationComp from "./PaginationComp";

const DiscussionsComp = () => {

    const {topic} = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [items, setItems] = useState([]);
    const [allItemsCount, setAllItemsCount] = useState(0);

    useEffect(() => {
        http.get(`getDiscussions/${topic}/${currentPage}`).then(res => {
            console.log(res)
            if(res.success){
                setAllItemsCount(res.discussionsCount)
                setItems(res.foundDiscussions)
            }
        })
    }, [currentPage])

    return (
        <div className={'d-flex flex-column justify-content-center align-items-center'}>
            {items.length > 0 ?
                items.map((x, i) => <SmallUserDiscussionComp key={i} item={x} userItems={items} setUserItems={setItems}/>)
                :
                <h2 className='w-100 text-center p-5'>No discussios in this topic yet</h2>
            }
            {allItemsCount > 10 && <PaginationComp itemCount={allItemsCount} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}

        </div>
    );
};

export default DiscussionsComp;