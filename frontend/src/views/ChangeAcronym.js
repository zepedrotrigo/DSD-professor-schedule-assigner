import '../App.css';
import React, { useState } from 'react';
import Card from "../components/Card/Card";
import "./ChangeAcronym.css";
import { useLocation } from "react-router-dom";
import Modal from '../components/Modal/Modal';
import Navbar from '../components/Navbar';
import UniversalBar from '../components/UniversalBar';

function ChangeAcronym(props) {

    const [results, setResults] = useState(null);
    const [show, setShow] = useState(false);
    const [name, setName] = useState(null);
    const [acronym, setAcronym] = useState(null);
    const [id, setId] = useState(null);
    const [profs, setProfs] = useState(null);

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
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
        setAcronym(acronym);
        setShow(!show);
        sleep(150).then(r => {
            setResults(null);
        })
    }

    function loadProfs(){
        let result=[];
        let profMap = new Map;
        fetch(`http://localhost:8000/v1/professors`)
            .then((response) => response.json())
            .then((data) => {
                Array.from(data.professors.entries()).map((entry) => {
                    const [k,v] = entry;
                    if (!(profMap.has(v.prof_name))){
                        profMap.set(v.prof_name, [v.acronym, v.prof_id]);
                    }
                })
                const sortedAsc = new Map([...profMap].sort());
                sortedAsc.forEach((val, key) => {
                    result.push(<Card name={key} acronym={val[0]} onClick={ () => changeModalVisibility(key, val[0], val[1])}/>);
                });
                setProfs(sortedAsc);
                setResults(result);
            })
    }

    return (
        <div className='content'>
            <UniversalBar></UniversalBar>
            <Navbar></Navbar>
            <div className="change-acronym">  
                {show && <Modal name={name} acronym={acronym} id={id} acronymChanged={acronymChanged} changeModal={changeModalVisibility}/>}
                {results === null ? loadProfs() : results}
            </div>
        </div>
    )
}

export default ChangeAcronym;