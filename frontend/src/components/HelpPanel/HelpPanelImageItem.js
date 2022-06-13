import './HelpPanelImageItem.css';

const HelpPanelImageItem = (props) => {
    return(
        <div className='help-panel-image-item'>
            <div className='image-text'>{props.text}</div>
            <div className={`image-wrapper ${props.imageClass}`}>
                <img src={props.image}></img>
            </div>
            <div className='optional-desc' style={{marginBottom : '0px'}}>
                {props.optionalText}
            </div>
            <div className='optional-desc'>
                {props.optionalTextDesc}
            </div>
        </div>
    )
}

export default HelpPanelImageItem;