import React, {useEffect, useRef, useState} from 'react';
import InputComp from "../AuthorizationComponents/InputComp";
import discussions from '../../assets/discussions.json';
import TextAreaComp from "../AuthorizationComponents/TextAreaComp";
import http from "../../plugins/http";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {resetItem} from "../../features/updatingItemSlice";



const CreateDiscussionComp = ({type}) => {

    const {token} = useParams();
    const item = useSelector(state => state.item.value);
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const nav = useNavigate();

    const refs = {
        topic: useRef(),
        subject: useRef(),
        description: useRef(),
    }

    const handleNewDiscussionSubmit = (e) => {

        let url = type === 'Create' ? 'uploadNewDiscussion' : `updateDiscussion/${token}`;

        e.preventDefault();

        const discussionObj = {
            topic_name: refs.topic.current.value,
            title: refs.subject.current.value,
            description: refs.description.current.value,
        }

        const format = /[!@#$%^&*()+\-=\[\]{};':"\\|<>\/]+/;


        if (format.test(discussionObj.title)) {
            return setError("Subject can't contain special symbols");
        }

        if( discussionObj.title.length < 5 || discussionObj.title.length > 100){
            return setError('Subject should be from 5 to 100 symbols long')
        }
        if (discussionObj.description.length < 50 || discussionObj.description.length > 500) {
            return setError('Description should be from 50 to 500 symbols long')
        }



        http.post(discussionObj, url).then( res => {
            if(res.success){
                nav('/profile')
            }
            if(!res.success){
                setError(res.message)
            }
            if(res.message === 'Not logged in'){
                nav('/login')
            }
        })
    }

    useEffect(() => {
        setTimeout( () => {
            if(error){
                setError(null)
            }
        }, 1500)
        return () => {
            dispatch(resetItem())
        }
    }, [error])

    return (
        <div className='wrapperDiv'>
            <form onSubmit={handleNewDiscussionSubmit} className={'d-flex flex-column'}>
                <div className={'d-flex flex-column inputWrapper'}>
                    <p>Select appropriate topic for your discussion</p>
                    <label htmlFor="Topic">Topic <span>*</span></label>
                    <select id="Topic" defaultValue={item ? item.topic_name : 'Other'} ref={refs.topic}>
                        {discussions.map((x, i) => <option key={i} value={x.name}>{x.name}</option>)}
                    </select>
                </div>
                <div className={'d-flex flex-column inputWrapper'}>
                    <p>Discussion title should be from 5 to 100 symbols long</p>
                    <InputComp type='text' ref={refs.subject} text='Subject' defaultValue={item && item.title}/>
                </div>
                <div className={'d-flex flex-column inputWrapper'}>
                    <p>Discussion description should be from 50 to 1000 symbols long</p>
                    <TextAreaComp ref={refs.description} text='Description' defaultValue={item && item.description}/>
                </div>
                =
                <div className={'d-flex justify-content-between inputWrapper'}>
                    <p>Fields marked with <span>*</span> are required</p>
                    {error && <span>{error}</span>}
                </div>
                <button className={'button'} type='submit'>{type}</button>
            </form>
        </div>
    );
};

export default CreateDiscussionComp;