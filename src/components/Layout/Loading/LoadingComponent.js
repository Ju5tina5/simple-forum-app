import React from 'react';
import './style.css';

const LoadingComponent = () => {
    return (
        <div className='d-flex justify-content-center align-items-center loadingWrapper p-5'>
                <div className='loadAnim' />
        </div>
    );
};

export default LoadingComponent;