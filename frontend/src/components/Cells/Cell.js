import './Cell.css';
import React, { useState, useRef } from 'react';
import Autocomplete from '../Autocomplete/Autocomplete';

function Cell(props) {

    const [value, setValue] = useState(null);
    const [autoValue, setAutoValue] = useState(null);

    const [focused, setFocused] = useState(false);
    const onFocus = () => {
            setFocused(true);
    }
    const onBlur = () => {
        sleep(100).then(r => {
            setValue("");
            setFocused(false);
        })
    }

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.onChildSubmit(props.id, value)
    }

    function handleChange(event) {
        let arr = [];
        var str = event.target.value;
        var res = str.toUpperCase();
        window.profsIds.forEach((value, key) => {
            if (key.startsWith(res) && res.length!==0){
                arr.push(key);
            }
        });
        if(arr.length===0)
            arr.push("No results");
        setAutoValue(arr);
        event.target.value = res;
        setValue(res);
        if (res.length===0)
            setFocused(false);
        else
            setFocused(true);
    }

    function onAutoClick(val){
        console.log(val);
        setValue(val);
    }

    const handle = () => console.log('Enter pressed');

    return (
        <>
            <div className={props.extClass}>
                <span className='hours'>{props.hours}</span>
                <form className='text' onSubmit={handleSubmit} autocomplete="off">
                <input id={props.id} maxlength="6" className={props.inputClass} type="text" value={props.text} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} ></input>
                </form>
                <span className='percentage'>{props.percentage === 100 ? "" : props.percentage}</span>
                {focused && 
                <Autocomplete value={autoValue} onAutoClick={onAutoClick}/>
                }
            </div>
        </>
    )
}

Cell.defaultProps = {
    extClass: "cell",
    inputClass: "input"
}

export default Cell;