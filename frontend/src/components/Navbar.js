import "./Navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as YourSvg } from './ua-logo.svg';
import ModalValidate from "./Modal/ModalValidate";
import { useState } from "react";

function Navbar(props) {

    const navigate = useNavigate();
    const location = useLocation();
    const ids = window.profsIdsAndNames;
    const [showModal, setShowModal] = useState(false);
    const [warnings, setWarnings] = useState(null);

    function loadNavComponents(){
        let result=[];

        if(location.pathname=="/change-acronym"){
            result.push(<li className="on-page">Alterar siglas</li>);
        }
        else
            result.push(<li className="nav-item" onClick={changeAcronym}>Alterar siglas</li>);

        return(<>{result}</>)
    }

    function handleClick(){
        props.onReload();
    }

    function changeModal(){
        setShowModal(!showModal);
    }

    function changeAcronym(){
        navigate('/change-acronym', { state: {profs: ids} });
    }

    function goHome(){
        navigate('/');
    }

    function validateDSD(){
        var max_hours=8;
        fetch(`http://localhost:8000/v1/validate_dsd/?max_hours=${max_hours}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setWarnings(data);
            setShowModal(!showModal);
        })
    }

    function exportDSD(){
        fetch(`http://localhost:8000/v1/export_dsd/?file_type=json`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
    }

    return (
        <>
            {showModal && <ModalValidate changeModal={changeModal} warnings={warnings}/>}
            <div className="navbar">
                <div className="ua-logo" onClick={goHome}>
                    <YourSvg className="ua-logo-img" />
                    <span className="logo-legend">dsd</span>
                </div>
                <ul className="navbar-items">
                    {loadNavComponents()}
                    <li className="nav-item" onClick={validateDSD}>Validar</li>
                    <li className="nav-item" onClick={exportDSD}>Exportar</li>
                    <i style={{fontSize: '18px'}} className="fa" onClick={handleClick}>&#xf021;</i>
                </ul>
            </div>
        </>
    )
}

export default Navbar;