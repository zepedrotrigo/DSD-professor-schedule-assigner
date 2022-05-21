import "./Navbar.css";

function Navbar(props) {

    return (
        <div className="navbar">
            <ul className="navbar-items">
                <li>Validar</li>
                <li>Exportar</li>
                <i style={{fontSize: '18px'}} className="fa" onReload={props.onReload}>&#xf021;</i>
            </ul>
        </div>
    )
}

export default Navbar;