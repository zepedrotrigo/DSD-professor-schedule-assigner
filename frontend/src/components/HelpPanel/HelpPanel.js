import './HelpPanel.css';

const HelpPanel = (props) => {
    return (
        <div className='help-panel'>
            <h2 className='help-panel-title'>Legenda</h2>
            {props.children}
        </div>
    )
}
export default HelpPanel;