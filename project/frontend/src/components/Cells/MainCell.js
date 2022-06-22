import './MainCell.css';

function MainCell(props) {

    function handleClick(e){
        props.onChildClick(props.f1, "uc");
    }

    return (
            <div className={props.class}>
                <div className='main-cell-wrapper' onClick={handleClick}>
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