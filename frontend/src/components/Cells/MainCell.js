import './MainCell.css';

function MainCell(props) {

    return (
            <div className={props.class}>
                <div className='main-cell-wrapper'>
                        <span>{props.f1}</span>
                    <span className='delimiter'>|</span>
                        <span className='uc-name'>{props.f2}</span>
                    <span className='delimiter'>|</span>
                    <span>{props.f3}</span>
                    <span className='delimiter'>|</span>
                    <span>{props.f4}</span>
                </div>
            </div>
    )
}

MainCell.defaultProps = {    
    class: "main-cell"
}

export default MainCell;