import React, {useRef, useState} from 'react';
import InputComp from "../AuthorizationComponents/InputComp";
import discussions from '../../assets/discussions.json';
import TextAreaComp from "../AuthorizationComponents/TextAreaComp";

const CreateDiscussionComp = () => {

    const [error, setError] = useState(null);

    const refs = {
        topic: useRef(),
        title: useRef(),
        description: useRef(),
    }

    const handleNewDiscussionSubmit = (e) => {

        e.preventDefault();

        const discussionObj = {
            topic_name: refs.topic.current.value,
            title: refs.title.current.value,
            description: refs.description.current.value,
        }

        console.log(discussionObj)
    }

    return (
        <div className='wrapperDiv'>
            <form onSubmit={handleNewDiscussionSubmit} className={'d-flex flex-column'}>
                <div className={'d-flex flex-column inputWrapper'}>
                    <p>Select appropriate topic for your discussion</p>
                    <label htmlFor="Topic">Topic <span>*</span></label>
                    <select id="Topic" defaultValue='Other' ref={refs.topic}>
                        {discussions.map((x, i) => <option key={i} value={x.name}>{x.name}</option>)}
                    </select>
                </div>
                <div className={'d-flex flex-column inputWrapper'}>
                    <p>Discussion title should be from 5 to 100 symbols long</p>
                    <InputComp type='text' ref={refs.title} text='Title'/>
                </div>
                <div className={'d-flex flex-column inputWrapper'}>
                    <p>Discussion description should be from 50 to 500 symbols long</p>
                    <TextAreaComp ref={refs.description} text='Description'/>
                </div>
                <div className={'d-flex justify-content-between inputWrapper'}>
                    <p>Fields marked with <span>*</span> are required</p>
                    {error && <span>{error}</span>}
                </div>
                <button className={'button'} type='submit'>Create</button>
            </form>
        </div>
    );
};

export default CreateDiscussionComp;