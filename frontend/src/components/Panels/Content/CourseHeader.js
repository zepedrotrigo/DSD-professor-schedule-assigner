import "./CourseHeader.css";
import icon from '../img/maximize.png';

function CourseHeader(props) {

    return (
        <>
            <div className="maximize-icon">
                <a href="http://localhost:3000/sidepanel" target="_blank"><img src={icon} alt='maximize icon'/></a>
            </div>
            <div className='header-wrapper'>
                <div className='image'>
                    <span>{ props.acronym }</span>
                </div>
                <div className='header-name'>
                    <span className='name'>{ props.name }</span>
                </div>
            </div>
        </>
    )
}

export default CourseHeader;