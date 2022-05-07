import './InputCell.css';

function handleChange(event){
    this.setState({value: event.target.value});
}

function InputCell(props) {

    return (
        <div className={props.extClass}>
            <div className='input-cell-form'>
                <form>
                    <input className="input" type="text" onChange={handleChange}></input>
                </form>
            </div>
        </div>
    )
}

InputCell.defaultProps = {    
    extClass: "inpt cell"
  }

export default InputCell;