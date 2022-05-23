import "./Navbar.css";

function Navbar(props) {

    function handleClick(){
        props.onReload();
    }

    return (
        <div className="navbar">
            <ul className="navbar-items">
                <li>Validar</li>
                <li>Exportar</li>
                <i style={{fontSize: '18px'}} className="fa" onClick={handleClick}>&#xf021;</i>
            </ul>
        </div>
    )
}

export default Navbar;