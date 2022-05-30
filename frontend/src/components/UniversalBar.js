import "./UniversalBar.css";

function UniversalBar() {

    return (
        <div className="universal-bar">
            <div className="social-links">
                <span>News</span>
                <span>Events</span>
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
                <a href="">login</a>
            </div>
        </div>
    )
}

export default UniversalBar;