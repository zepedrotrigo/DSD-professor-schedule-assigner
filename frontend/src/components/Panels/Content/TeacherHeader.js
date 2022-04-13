import './TeacherHeader.css';

function TeacherHeader() {
    return(
        <div className='header-teacher-wrapper'>
            <div className='teacher-image'>
                <img src='https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg' alt="Teacher's photo"></img>
            </div>
            <div className='teacher-header-name'>
                <span className='acronym'>TOS</span>
                <span className='name'>Tomás António Mendes Oliveira e Silva</span>
            </div>
        </div>
    )
}

export default TeacherHeader;