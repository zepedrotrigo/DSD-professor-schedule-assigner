import '../App.css';
import Card from "../components/Card/Card";
import "./ChangeAcronym.css";
import { useLocation } from "react-router-dom";

function ChangeAcronym(props) {

    const {state} = useLocation();
    const { profs } = state;

    console.log(profs);

    function loadProfs(){
        let result=[];
        profs.forEach((val, key) => {
            result.push(<Card name={val[1]} acronym={key}/>);
        });

        return (<>{result}</>)
    }

    return (
        <div className="change-acronym">  
            {loadProfs()}
        </div>
    )
}

export default ChangeAcronym;