import './Cell.css';

function Cell(props) {

    return (
        <div className={props.extClass}>
            
        </div>
    )
}

Cell.defaultProps = {    
    extClass: "cell"
  }

export default Cell;