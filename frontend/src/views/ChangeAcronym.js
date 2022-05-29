import '../App.css';
import React, { useState } from 'react';
import Card from "../components/Card/Card";
import "./ChangeAcronym.css";
import { useLocation } from "react-router-dom";
import Modal from '../components/Modal/Modal';

function ChangeAcronym(props) {

    const {state} = useLocation();
    const { profs } = state;

    console.log(profs);

    function loadProfs(){
        let result=[];
        profs.forEach((val, key) => {
            result.push(<Card name={val[1]} acronym={key} onClick={console.log("click")}/>);
        });

        return (<>{result}</>)
    }

    return (
        <div className="change-acronym">  
            <Modal />
            {loadProfs()}
        </div>
    )
}

export default ChangeAcronym;