import './Button.css';

const Button = (props) => {
    return <button className={props.class} value={props.value} onClick={props.onClick}>{props.text}</button>
}   

export default Button;