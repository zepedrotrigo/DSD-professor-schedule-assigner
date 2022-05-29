import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar(props) {

    const navigate = useNavigate();
    const ids = window.profsIdsAndNames;

    function handleClick(){
        props.onReload();
    }

    function changeAcronym(){
        navigate('/change-acronym', { state: {profs: ids} });
    }

    return (
        <div className="navbar">
            <ul className="navbar-items">
                <li onClick={changeAcronym}>Alterar siglas</li>
                <li>Validar</li>
                <li>Exportar</li>
                <i style={{fontSize: '18px'}} className="fa" onClick={handleClick}>&#xf021;</i>
            </ul>
        </div>
    )
}

export default Navbar;