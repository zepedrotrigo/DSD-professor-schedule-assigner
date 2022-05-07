import './Cell.css';

function handleChange(event){
    this.setState({value: event.target.value});
}
function Cell(props) {

    return (
        <div className={props.extClass}>
            <div className='hours'>
                <span>{props.hours}</span>
            </div>
            <div className='input-cell-form'>
                <form>
                    <input maxlength="6" className={props.inputClass} type="text" value={props.text} onChange={handleChange}></input>
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