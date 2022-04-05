import React from 'react';
import './style.css';

const PaginationComp = ({itemCount, currentPage, setCurrentPage, setLoading}) => {

    let pageArray = [];
    // determine how many number there will be
    for (let i = 1; i <= Math.ceil(itemCount / 10); i++) {
        pageArray.push(i)
    }

    return (
        <div className='d-flex mt-2 w-100 justify-content-center'>
            {currentPage * 10 - 10 < itemCount && currentPage * 10 - 10 >= 10 &&
            <p onClick={() =>
            {
                setLoading(true)
                setCurrentPage(currentPage - 1)
            }} className={'notActive'}>Prev</p>}
            {pageArray.map((x, i) =>
                currentPage > x &&
                <p key={i} onClick={() => {
                    setLoading(true)
                    setCurrentPage(x)}} className={'notActive'}>{x}</p>)}
            <p className='activePageNumber'>{currentPage}</p>
            {pageArray.map((x, i) =>
                x > currentPage &&
                <p key={i} onClick={() => {
                    setLoading(true)
                    setCurrentPage(x)}} className={'notActive'}>{x}</p>)}
            {itemCount > currentPage * 10 &&
            <p onClick={() => {
                setLoading(true)
                setCurrentPage(currentPage + 1)}
            } className={'notActive'}>Next</p>}
        </div>
    );
};

export default PaginationComp;