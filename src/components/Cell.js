import './Cell.css';

function Cell(props) {

    return (
        <div className={props.extClass}>
            
        </div>
    )
}

Cell.defaultProps = {    
    extClass: "cell sm p"
  }

export default Cell;