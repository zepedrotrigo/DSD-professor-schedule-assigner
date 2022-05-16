import './Cell.css';
import React, { useState } from 'react';

function Cell(props) {

    const [value, setValue] = useState(null);


    function handleSubmit(event) {
        event.preventDefault();
        props.onChildSubmit(props.id, value);
    }

    function handleChange(event) {
        var str = event.target.value;
        var res = str.toUpperCase();
        event.target.value = res;
        setValue(res);
    }

    const handle = () => console.log('Enter pressed');

    return (
        <div className={props.extClass}>
            <div className='hours'>
                <span>{props.hours}</span>
            </div>
            <div className='input-cell-form'>
                <form onSubmit={handleSubmit}>
                    <input id={props.id} maxlength="6" className={props.inputClass} type="text" value={props.text} onChange={handleChange}></input>
                </form>
            </div>
            <div className='percentage'>
                <span>{props.percentage === 100 ? "" : props.percentage}</span>
            </div>
        </div>
    )
}

Cell.defaultProps = {
    extClass: "cell",
    inputClass: "input"
}

export default Cell;