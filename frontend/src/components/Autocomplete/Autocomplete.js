import './Autocomplete.css';

const Autocomplete = props => {
    return (
        <>
            {props.value && // only if value exists show autocomplete box
                <div className='autocomplete'>
                    <div className='square'></div>
                    <ul>
                        {console.log(window.profsIds)}
                        <li className='autocomplete-item'>{props.value}</li>
                        <li className='autocomplete-item'>{props.value}</li>
                    </ul>
                </div>
            }
        </>
    )
}

export default Autocomplete;