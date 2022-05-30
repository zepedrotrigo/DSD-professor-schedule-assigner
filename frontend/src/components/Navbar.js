import "./Navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as YourSvg } from './ua-logo.svg';

function Navbar(props) {

    const navigate = useNavigate();
    const location = useLocation();
    const ids = window.profsIdsAndNames;

    function loadNavComponents(){
        let result=[];

        if(location.pathname=="/change-acronym"){
            result.push(<li>Alterar siglas</li>);
        }
        else
            result.push(<li onClick={changeAcronym}>Alterar siglas</li>);

        return(<>{result}</>)
    }

    function handleClick(){
        props.onReload();
    }

    function changeAcronym(){
        navigate('/change-acronym', { state: {profs: ids} });
    }

    return (
        <div className="navbar">
            <div className="ua-logo">
                <YourSvg className="ua-logo-img" />
                <span className="logo-legend">dsd</span>
            </div>
            <ul className="navbar-items">
                {loadNavComponents()}
                <li>Validar</li>
                <li>Exportar</li>
                <i style={{fontSize: '18px'}} className="fa" onClick={handleClick}>&#xf021;</i>
            </ul>
        </div>
    )
}

export default Navbar;