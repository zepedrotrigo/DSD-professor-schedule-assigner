import './MainCell.css';
import './TeacherCell.css';

function TeacherCell(props) {

    function handleClick(e){
        props.onChildClick(props.f1, "teacher");
    }

    //props.f3.replace('H', '')

    return (
            <div className={`main-teacher-cell ${parseInt(props.f3.replace('H', '')) >= 12 ? "warning" : ""}`}>
                {console.log(parseInt(props.f3.replace('H', '')))}
                <div className='main-cell-wrapper' onClick={handleClick}>
                        <span id='span_acr'>{props.f1}</span>
                    <span className='delimiter'>|</span>
                        <span className='teacher-name'>{props.f2}</span>
                    <span className='delimiter'>|</span>
                    <span className='teacher-hours'>{props.f3}</span>
                </div>
            </div>
    )
}

TeacherCell.defaultProps = {    
    class: "main-teacher-cell"
}

export default TeacherCell;