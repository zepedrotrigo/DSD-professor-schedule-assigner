import "./UniversalBar.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faInstagram,
  } from "@fortawesome/free-brands-svg-icons";

  function wso2Login() {
    // WSO2 APPLICATION, CALLs AND ENDPOINT DETAILS
    const authorizeEndpoint = "https://wso2-gw.ua.pt/authorize"; // become authorized
    const tokenEndpoint = "https://wso2-gw.ua.pt/token";         // get token
    const redirectURI = "http://localhost"; // create URL

    const consumerKey = "agh44RajMJcYvCIq3lSMrutfPJ0a";
    // Base64 encoded string: <Consumer Key>:<Consumer Secret>
    const authorizationBase64Credentials = "YWdoNDRSYWpNSmNZdkNJcTNsU01ydXRmUEowYTpUR2piaVp2eXlRa0ZsaER3dEJ5WGx5TUExam9h";

    location = `${authorizeEndpoint}?response_type=code&state=1234567890&scope=openid&client_id=${consumerKey}&redirect_uri=${redirectURI}`

    // should wait for response

    let searchParams = new URL(location).searchParams;

    if (searchParams.has("code")) {

    let code = searchParams.get("code");

    alert(code)

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded")
    myHeaders.append("Authorization", `Basic ${authorizationBase64Credentials}`);

    fetch(`${tokenEndpoint}?code=${code}&redirect_uri=${redirectURI}&grant_type=authorization_code`, {
        method: "POST",
        headers: myHeaders
    }).then(response => response.json())
        .then(res => {
        console.log(jwt_decode(res))
        })
        .catch(err => {
            console.log(`Received an error: ${err}`);
        });
    }

    return
}

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
                <a onClick={wso2Login}>login <FontAwesomeIcon className="icon-user" icon={faUser}/></a>
            </div>
        </div>
    )
}

export default UniversalBar;