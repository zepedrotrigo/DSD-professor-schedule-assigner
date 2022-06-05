import './Button.css';

const Button = (props) => {
    return <button className={props.class} onClick={props.onClick}>{props.text}</button>
}   

export default Button;