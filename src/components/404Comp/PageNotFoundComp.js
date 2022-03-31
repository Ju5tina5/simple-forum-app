import React from 'react';
import './style.css';

const PageNotFoundComp = () => {
    return (
        <div className={'d-flex flex-column align-items-center'}>
            <div className='cautionBackground d-flex justify-content-center'>
                <h1 className={'cautionText'}>Page Not Found</h1>
            </div>
        </div>
    );
};

export default PageNotFoundComp;