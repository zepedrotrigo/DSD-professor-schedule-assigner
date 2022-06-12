import './HelpButton.css';

const HelpButton = (props) => {

    const handleClick = () => {
        props.onClick();
    }

    return (
        <div className='help-button' onClick={handleClick}>
            <p className='help-button-item'>?</p>
        </div>
    )
}

export default HelpButton;