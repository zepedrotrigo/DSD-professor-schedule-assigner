import './MainCell.css';
import './TeacherCell.css';

function TeacherCell(props) {

    const acr = props.f1

    function handleClick(e){
        props.onChildClick(acr);
    }

    return (
            <div className={props.class}>
                <div className='main-cell-wrapper' onClick={handleClick}>
                        <span id='span_acr'>{props.f1}</span>
                    <span className='delimiter'>|</span>
                        <span className='teacher-name'>{props.f2}</span>
                    <span className='delimiter'>|</span>
                    <span>{props.f3}</span>
                </div>
            </div>
    )
}

TeacherCell.defaultProps = {    
    class: "main-cell"
}

export default TeacherCell;