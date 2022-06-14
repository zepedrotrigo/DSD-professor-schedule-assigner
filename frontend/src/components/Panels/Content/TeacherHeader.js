import './TeacherHeader.css';
import icon from '../img/maximize.png';

function TeacherHeader(props) {
    return(
        <>
            <div className='header-teacher-wrapper'>
                <div className='teacher-image'>
                    <img src='https://pi-group-03.netlify.app/img/tos.jpg' alt="Teacher's"></img>
                </div>
                <div className='teacher-header-name'>
                    <span className='acronym'>{props.acronym}</span>
                    <span className='name'>{props.name}</span>
                </div>
            </div>
        </>
    )
}

export default TeacherHeader;