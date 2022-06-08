import "./Filters.css";

function Filters(props) {

    function handleChange(event){
        props.onChange(event.target.value);
    }

    function loadOptions(){
        let result = [];
        var n = 1;
        var hold = "";
        {props.filter.map(tuple => {
            if (n){
                hold = tuple;
                n=0;
            }
            else{
                result.push(<option value={hold}>{tuple}</option>);
                n=1;
            }
        })}
        
        return(<>{result}</>);
    }

    return (
        <select className={`filters ${props.class}`} onChange={handleChange}>
            {loadOptions()}
        </select>
    )
}

export default Filters;