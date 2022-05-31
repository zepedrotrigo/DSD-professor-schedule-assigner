import '../App.css';
import React, { useState } from 'react';
import Card from "../components/Card/Card";
import "./ChangeAcronym.css";
import { useLocation } from "react-router-dom";
import Modal from '../components/Modal/Modal';
import Navbar from '../components/Navbar';
import UniversalBar from '../components/UniversalBar';

function ChangeAcronym(props) {

    const [show, setShow] = useState(false);
    const [name, setName] = useState(null);
    const [acronym, setAcronym] = useState(null);
    const [id, setId] = useState(null);
    const {state} = useLocation();
    const { profs } = state;

    function sortObjectByKeys(o) {
        return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
    }

    function changeModalVisibility(name, acronym, id){
        setName(name);
        setAcronym(acronym);
        setId(id);
        setShow(!show);
    }

    function acronymChanged(acronym, oldAcronym){
        let vars = profs.get(oldAcronym);
        profs.delete(oldAcronym);
        profs.set(acronym, vars);
        var sorted = sortObjectByKeys(profs);
        setAcronym(acronym);
        setShow(!show);
    }

    function loadProfs(){
        let result=[];
        profs.forEach((val, key) => {
            result.push(<Card name={val[1]} acronym={key} onClick={ () => changeModalVisibility(val[1], key, val[0])}/>);
        });

        return (<>{result}</>)
    }

    return (
        <div className='content'>
            <UniversalBar></UniversalBar>
            <Navbar></Navbar>
            <div className="change-acronym">  
                {show && <Modal name={name} acronym={acronym} id={id} acronymChanged={acronymChanged} changeModal={changeModalVisibility}/>}
                {loadProfs()}
            </div>
        </div>
    )
}

export default ChangeAcronym;