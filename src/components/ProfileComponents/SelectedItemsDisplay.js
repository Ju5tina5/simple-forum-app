import React, {useState} from 'react';

const SelectedItemsDisplay = ({currentlyActive}) => {

    const [data, setData] = useState([]);

    if(currentlyActive === 0){
        return (
            <div>

            </div>
        );
    }
    if(currentlyActive === 1){
        return (
            <div>

            </div>
        );
    }

};

export default SelectedItemsDisplay;