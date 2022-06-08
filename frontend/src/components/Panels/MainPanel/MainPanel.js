import "./MainPanel.css";
import React, { useState, useEffect} from "react";
import Filters from "../../Filters/Filters";
import SearchAndFilters from "../../SearchAndFilters/SearchAndFilters";
import SearchBar from "../../SearchBar/SearchBar";

function MainPanel(props) {

    const [data, setData] = useState(props.children);

    useEffect( () => {
        setData(props.children);
        //console.log(data);
    }, [props.children]);

    function searchBarOnChange(event){
        var str = event.target.value;
        var res = str.toUpperCase();
        props.searchOnChange(res);
    }

    function selectChange(value){
        props.onSelectChange(value, "total_hours asc");
    }

    /*
    const [data, setData] = useState(props.data);

    useEffect( () => {
        setData(props.data);
        console.log(data);
    }, [props.data]);*/

    return (
        <div className="main-panel">
            <SearchAndFilters>
                            <Filters onChange={selectChange}/>
                            <SearchBar onChange={searchBarOnChange}/>
            </SearchAndFilters>
            {data}
        </div>
    )
}

export default MainPanel;