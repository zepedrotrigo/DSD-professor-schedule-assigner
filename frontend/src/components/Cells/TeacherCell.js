import './MainCell.css';

function TeacherCell(props) {

    return (
            <div className={props.class}>
                <div className='main-cell-wrapper'>
                        <span>{props.f1}</span>
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