import "./MainPanel.css";
import React, { useState, useEffect} from "react";

function MainPanel(props) {

    const [data, setData] = useState(props.children);

    useEffect( () => {
        setData(props.children);
        //console.log(data);
    }, [props.children]);

    /*
    const [data, setData] = useState(props.data);

    useEffect( () => {
        setData(props.data);
        console.log(data);
    }, [props.data]);*/

    return (
        <div className="main-panel">
            {data}
        </div>
    )
}

export default MainPanel;