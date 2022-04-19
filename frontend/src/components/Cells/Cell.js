import './Cell.css';

function Cell(props) {

    return (
        <div className={props.extClass}>
            <div className='hours'>
                <span>{props.hours}</span>
            </div>
            <div className='text'>
                <span>{props.text}</span>
            </div>
            <div className='percentage'>
                <span>{props.percentage === 100 ? "" : props.percentage}</span>
            </div>
        </div>
    )
}

Cell.defaultProps = {    
    extClass: "cell"
  }

export default Cell;