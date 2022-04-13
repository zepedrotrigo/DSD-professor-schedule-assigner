import "./CourseHeader.css";

function CourseHeader({children}) {

    return (
        <div className='header-wrapper'>
            <div className='image'>
                <span>IHC</span>
            </div>
            <div className='header-name'>
                <span className='name'>Interação Humano Computador</span>
            </div>
        </div>
    )
}

export default CourseHeader;