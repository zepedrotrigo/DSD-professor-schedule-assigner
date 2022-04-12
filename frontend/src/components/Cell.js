import './Cell.css';

function Cell(props) {

    return (
        <div className={props.extClass}>
            <div className='hours'>
                <span>2</span>
            </div>
            <div className='text'>
                <span>PJF</span>
            </div>
            <div className='percentage'>
                <span>100</span>
            </div>
        </div>
    )
}

Cell.defaultProps = {    
    extClass: "cell"
  }

export default Cell;