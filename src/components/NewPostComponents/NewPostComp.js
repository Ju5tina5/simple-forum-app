import React, {useEffect, useRef, useState} from 'react';
import TextAreaComp from "../AuthorizationComponents/TextAreaComp";
import http from "../../plugins/http";
import {useNavigate, useParams} from "react-router-dom";

const NewPostComp = ({setDiscussion, setReload, setCurrentPage, setLoading}) => {

    const {token} = useParams();
    const [error, setError] = useState(null);
    const textRef = useRef();
    const nav = useNavigate();

    const handleNewPostSubmit = (e) => {
        e.preventDefault();
        if (textRef.current.value.length < 50 || textRef.current.value.length > 1000) {
            return setError('Description should be from 50 to 500 symbols long')
        }

        const postData = {
            description: textRef.current.value,
            discussion_token: token
        }

        http.post(postData, 'createPost').then( res => {
            setLoading(true)
            if(!res.success && res.message === 'Not logged in'){
                nav('/login')
            }
            if(res.success){
                setDiscussion(res.updatedDiscussion)
                setCurrentPage(1)
                setReload(true)
                textRef.current.value = '';
            }else {
                setError(res.message)
            }
        })
    }

    useEffect(() => {
        setTimeout( () => {
            if(error){
                setError(null)
            }
        }, 1500)
    }, [error])

    return (
        <div className='wrapperDiv w-100 mt-2'>
            <div className={'d-flex flex-column inputWrapper p-1'}>
                <p>Write your comment (should be from 50 to 1000 symbols long)</p>
                <TextAreaComp text='What do you think?' ref={textRef}/>
                {error && <span>{error}</span>}
                <button onClick={handleNewPostSubmit} className={'button mt-2'}>Submit</button>
            </div>
        </div>
    );
};

export default NewPostComp;