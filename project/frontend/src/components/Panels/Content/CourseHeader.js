import "./CourseHeader.css";
import icon from '../img/maximize.png';

function CourseHeader(props) {

    return (
        <>
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