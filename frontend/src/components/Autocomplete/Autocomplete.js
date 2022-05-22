import './Autocomplete.css';

const Autocomplete = props => {
    return (
        <>
            {props.value && // only if value exists show autocomplete box
                <div className='autocomplete'>
                    <ul>
                        {console.log(props.value)}
                        <li>{props.value}</li>
                    </ul>
                </div>
            }
        </>
    )
}

export default Autocomplete;