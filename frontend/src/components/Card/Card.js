import "./Card.css";
import img from './tos.jpg';

function Card(props) {

    return (
        <div className="card-wrapper">
            <div className="card-wrapper-image">
                <img src={img} alt=""></img>
            </div>
            <div className="card-content">
                <span className="fullname">{props.name}</span>
                <span className="acronym">{props.acronym}</span>
            </div>
            <div className="card-buttons">
                <button type="button" onClick={props.onClick}>Change Acronym</button>
            </div>
        </div>
    )
}

export default Card;