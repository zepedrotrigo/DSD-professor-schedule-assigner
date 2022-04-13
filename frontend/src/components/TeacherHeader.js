import './TeacherHeader.css';

function TeacherHeader() {
    return(
        <div className='header-teacher-wrapper'>
            <div className='teacher-image'>
                <span>IHC</span>
            </div>
            <div className='teacher-header-name'>
                <span className='acronym'>TOS</span>
                <span className='name'>Tomás António Mendes Oliveira e Silva</span>
            </div>
        </div>
    )
}

export default TeacherHeader;