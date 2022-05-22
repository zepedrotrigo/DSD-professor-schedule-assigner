import './Cell.css';
import React, { useState } from 'react';

function Cell(props) {

    const [value, setValue] = useState(props.text);

    function handleSubmit(event) {
        event.preventDefault();
        //props.onChildSubmit(props.id, value);
    }

    function handleChange(event) {
        var str = event.target.value;
        var res = str.toUpperCase();
        setValue(res);
        props.onChildChange(res, props.id);
    }

    const handle = () => console.log('Enter pressed');

    return (
        <div className={props.extClass}>
            <span className='hours'>{props.hours}</span>
            <form className='text'>
                <input id={props.id} maxlength="6" className={props.inputClass} type="text" value={value} onChange={handleChange}></input>
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