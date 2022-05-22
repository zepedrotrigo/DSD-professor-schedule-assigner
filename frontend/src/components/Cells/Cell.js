import './Cell.css';
import React, { useState } from 'react';
import Autocomplete from '../Autocomplete/Autocomplete';

function Cell(props) {

    const [value, setValue] = useState(null);


    function handleSubmit(event) {
        event.preventDefault();
        props.onChildSubmit(props.id, value);
    }

    function handleChange(event) {
        var str = event.target.value;
        var res = str.toUpperCase();
        console.log(str);
        event.target.value = res;
        setValue(res);
    }

    const handle = () => console.log('Enter pressed');

    return (
        <>
            <div className={props.extClass}>
                <span className='hours'>{props.hours}</span>
                <form className='text' onSubmit={handleSubmit}>
                <input id={props.id} maxlength="6" className={props.inputClass} type="text" value={props.text} onChange={handleChange}></input>
                </form>
                <span className='percentage'>{props.percentage === 100 ? "" : props.percentage}</span>
                <Autocomplete value={value} />
            </div>
        </>
    )
}

Cell.defaultProps = {
    extClass: "cell",
    inputClass: "input"
}

export default Cell;