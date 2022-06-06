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
                <span>News</span>
                <span>Events</span>
                <span><FontAwesomeIcon className="social-icon"  icon={faTwitter} /> </span>
                <span><FontAwesomeIcon className="social-icon" icon={faInstagram} /> </span>
            </div>
            <div className="universal-bar-items">
                <a href="">Prospective Students</a>
                <a href="">UA Students</a>
                <a href="">International Students</a>
                <a href="">Alumni</a>
                <a href="">UA People</a>
                <a href="">Society</a>
            </div>
            <div className="login">
                <a href="">login <FontAwesomeIcon className="icon-user" icon={faUser}/></a>
            </div>
        </div>
    )
}

export default UniversalBar;