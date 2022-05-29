import "./Card.css";

function Card(props) {

    return (
            <div className="card-wrapper">
                <div className="card-content">
                    <div className="card-content-items">
                        <span className="fullname">{props.name}</span>
                        <span className="acronym">{props.acronym}</span>
                    </div>
                    <button type="button" className="change-acronym-button" onClick={props.onClick}>Alterar Sigla</button>
                </div>
            </div>
    )
}

export default Card;