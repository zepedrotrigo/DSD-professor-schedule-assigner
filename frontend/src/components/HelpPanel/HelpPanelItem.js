import './HelpPanelItem.css';

const HelpPanelItem = (props) => {
    return (
        <div className='help-panel-item'>
                <div className={`help-panel-item-color ${props.class}`}></div>
                <div className='help-panel-item-color-legend'>{props.text}</div>
        </div>
    )
}

export default HelpPanelItem;