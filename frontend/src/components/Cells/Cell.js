import './Cell.css';
import React, { useState } from 'react';

function Cell(props) {

    const [value, setValue] = useState(null);

    console.log("YHYHYHY", window.profsIds);


    function handleSubmit(event) {
        event.preventDefault();
        //props.onChildSubmit(props.id, value);
    }

    function handleChange(event) {
        var str = event.target.value;
        var res = str.toUpperCase();
        event.target.value = res;
        setValue(res);
        props.onChildChange(value, props.id);
        
    }

    const handle = () => console.log('Enter pressed');

    return (
        <div className={props.extClass}>
            <span className='hours'>{props.hours}</span>
            <form className='text' onSubmit={handleSubmit}>
                <input id={props.id} maxlength="6" className={props.inputClass} type="text" value={props.text} onChange={handleChange}></input>
            </form>
            <span className='percentage'>{props.percentage === 100 ? "" : props.percentage}</span>
        </div>
    )
}

Cell.defaultProps = {
    extClass: "cell",
    inputClass: "input"
}

export default Cell;