import "./MainPanel.css";

function MainPanel({children}) {

    return (
        <div className="main-panel">
            {children}
        </div>
    )
}

export default MainPanel;