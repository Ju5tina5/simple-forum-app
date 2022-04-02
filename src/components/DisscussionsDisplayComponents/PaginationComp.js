import React from 'react';
import './style.css';

const PaginationComp = ({itemCount, currentPage, setCurrentPage}) => {

    console.log(itemCount)

    return (
        <div className='d-flex'>
            {currentPage * 10 - 10 > itemCount && <p onClick={() => setCurrentPage(currentPage - 1)} className={'notActive'}>Previous</p>}
            {currentPage * 10 - 10 > itemCount && <p onClick={() => setCurrentPage(currentPage + 1)} className={'notActive'}>{currentPage - 1}</p>}
            <p className='activePageNumber'>{currentPage}</p>
            {itemCount > currentPage * 10 && <p onClick={() => setCurrentPage(currentPage + 1)} className={'notActive'}>{currentPage + 1}</p>}
            {itemCount > currentPage * 10 && <p onClick={() => setCurrentPage(currentPage + 1)} className={'notActive'}>Next</p>}
        </div>
    );
};

export default PaginationComp;