import React from 'react';
import {useGlobalContext} from "../context/Context";

function Name() {
    const {name}: any = useGlobalContext()
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
}

export default Name;