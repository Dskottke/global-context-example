import React, {FormEvent} from 'react';
import {useGlobalContext} from "../context/Context";

function NameForm() {
    const {setName}: any = useGlobalContext();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        setName(data.get('name'))
    }
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor={'name'}></label>
            <input id={'name'} name={'name'} type={'text'}/>
            <button type={'submit'}>change name</button>
        </form>
    );
}

export default NameForm;