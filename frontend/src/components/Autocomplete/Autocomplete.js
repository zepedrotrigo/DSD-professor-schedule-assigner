import './Autocomplete.css';

const Autocomplete = props => {

    function load(){
        let data = [];

        for(let i=0; i<props.value.length; i++){
            data.push(<li className='autocomplete-item'>{props.value[i]}</li>)
        }

        return (
            <ul>
                {data}
            </ul>
        )
    }

    return (
        <>
            {props.value && // only if value exists show autocomplete box
                <div className='autocomplete'>
                    <div className='square'></div>
                    {load()}
                </div>
            }
        </>
    )
}

export default Autocomplete;