import "./UniversalBar.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faInstagram,
  } from "@fortawesome/free-brands-svg-icons";

function UniversalBar() {

    return (
        <div className="universal-bar">
            <div className="social-links">
                <span>Notícias</span>
                <span>Agenda</span>
                <span><FontAwesomeIcon className="social-icon"  icon={faTwitter} /> </span>
                <span><FontAwesomeIcon className="social-icon" icon={faInstagram} /> </span>
            </div>
            <div className="universal-bar-items">
                <a href="https://www.ua.pt/en/public-prospective-students" target="_blank">Futuros estudantes</a>
                <a href="https://www.ua.pt/en/public-students" target="_blank">Estudantes UA</a>
                <a href="https://www.ua.pt/pt/publico-estudantes-internacionais" target="_blank">Estudantes internacionais</a>
                <a href="https://www.ua.pt/pt/publico-alumni" target="_blank">Alumni</a>
                <a href="https://www.ua.pt/pt/publico-pessoas" target="_blank">Pessoas UA</a>
                <a href="https://www.ua.pt/pt/publico-sociedade" target="_blank">Sociedade</a>
            </div>
            <div className="login">
                <a href="">login <FontAwesomeIcon className="icon-user" icon={faUser}/></a>
            </div>
        </div>
    )
}

export default UniversalBar;