import './MainCell.css';

function MainCell(props) {

    return (
            <div className='main-cell'>
                <div className='main-cell-wrapper'>
                    <div className='course-acronym'>
                        <span>{props.acr}</span>
                    </div>
                    <span className='delimiter'>|</span>
                    <div className='course-name'>
                        <span>Fund. Prog.</span>
                    </div>
                    <span className='delimiter'>|</span>
                    <div className='course-regent'>
                        <span>JMR</span>
                    </div>
                    <span className='delimiter'>|</span>
                    <div className='course-students'>
                        <span>180</span>
                    </div>
                </div>
            </div>
    )
}

export default MainCell;