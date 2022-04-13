import "./CourseHeader.css";
import icon from '../img/maximize.png';

function CourseHeader({children}) {

    return (
        <>
            <div className="maximize-icon">
                <img src={icon} alt='maximize icon'/>
            </div>
            <div className='header-wrapper'>
                <div className='image'>
                    <span>IHC</span>
                </div>
                <div className='header-name'>
                    <span className='name'>Interação Humano Computador</span>
                </div>
            </div>
        </>
    )
}

export default CourseHeader;