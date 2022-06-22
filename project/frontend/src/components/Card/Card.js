import "./Card.css";

function Card(props) {

    return (
            <div className="change-acronym-card-wrapper">
                <div className="card-content">
                    <div className="card-content-items">
                        <span className="teacher-fullname">{props.name}</span>
                        <span className="teacher-acronym">{props.acronym}</span>
                    </div>
                    <button type="button" className="change-acronym-button" onClick={props.onClick}>Alterar Sigla</button>
                </div>
            </div>
    )
}

export default Card;