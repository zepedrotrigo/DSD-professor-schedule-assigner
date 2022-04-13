import './TeacherHeader.css';
import icon from '../img/maximize.png';

function TeacherHeader() {
    return(
        <>
            <div className="maximize-icon">
                <a href="http://localhost:3000/sidepanel" target="popup"><img src={icon} alt='maximize icon'/></a>
            </div>
            <div className='header-teacher-wrapper'>
                <div className='teacher-image'>
                    <img src='https://pi-group-03.netlify.app/img/tos.jpg' alt="Teacher's"></img>
                </div>
                <div className='teacher-header-name'>
                    <span className='acronym'>TOS</span>
                    <span className='name'>Tomás António Mendes Oliveira e Silva</span>
                </div>
            </div>
        </>
    )
}

export default TeacherHeader;