import "../App.css";
import React, { useState } from "react";
import Card from "../components/Card/Card";
import Navbar from '../components/Navbar';
import SearchAndFilters from "../components/SearchAndFilters/SearchAndFilters";
import SearchBar from "../components/SearchBar/SearchBar";
import UniversalBar from '../components/UniversalBar';
import Modal from "../components/Modal/Modal";
import ChangeAcronymContent from "../components/Modal/components/ChangeAcronymContent";
import "./ChangeAcronym.css";

function ChangeAcronym(props) {
  const [results, setResults] = useState(null);
  const [show, setShow] = useState(false);
  const [name, setName] = useState(null);
  const [acronym, setAcronym] = useState(null);
  const [id, setId] = useState(null);
  const [profs, setProfs] = useState(null);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  function changeModalVisibility(name, acronym, id) {
    setName(name);
    setAcronym(acronym);
    setId(id);
    setShow(!show);
  }

  function acronymChanged(acronym, oldAcronym) {
    let vars = profs.get(oldAcronym);
    profs.delete(oldAcronym);
    profs.set(acronym, vars);
    setAcronym(acronym);
    setShow(!show);
    sleep(150).then((r) => {
      setResults(null);
    });
  }

  function searchBarOnChange(event){
    let arr = [];
    var str = event.target.value;
    var res = str.toUpperCase();
    if (res.length===0)
      loadProfs();
    else{
      profs.forEach((val, key) => {
          if ((key.toUpperCase().startsWith(res) && res.length!==0) || (val[0].startsWith(res) && res.length!==0)){
              arr.push(<Card
                name={key}
                acronym={val[0]}
                onClick={() => changeModalVisibility(key, val[0], val[1])}
              />);
          }
      });
      if(arr.length===0)
          arr.push(<h2>No results...</h2>);
      setResults(arr);
    }
  }

  function loadProfs() {
    let result = [];
    let profMap = new Map();
    fetch(`http://localhost:8000/v1/professors`)
      .then((response) => response.json())
      .then((data) => {
        Array.from(data.professors.entries()).map((entry) => {
          const [k, v] = entry;
          if (!profMap.has(v.prof_name)) {
            profMap.set(v.prof_name, [v.acronym, v.prof_id]);
          }
        });
        const sortedAsc = new Map([...profMap].sort());
        sortedAsc.forEach((val, key) => {
          result.push(
            <Card
              name={key}
              acronym={val[0]}
              onClick={() => changeModalVisibility(key, val[0], val[1])}
            />
          );
        });
        setProfs(sortedAsc);
        setResults(result);
      });
  }

  return (
    <div className="content">
      <UniversalBar></UniversalBar>
      <Navbar></Navbar>
      <SearchAndFilters class="minor-width-wrapper" classContent="minor-width-content">
                    <SearchBar class="big" onChange={searchBarOnChange}/>
            </SearchAndFilters>
      <div className="change-acronym">
        {show && (
          <Modal changeModal={changeModalVisibility}>
            <ChangeAcronymContent
              class="no-overflow"
              name={name}
              acronym={acronym}
              id={id}
              acronymChanged={acronymChanged}
              changeModal={changeModalVisibility}
            />
          </Modal>
        )}
        {results === null ? loadProfs() : results}
      </div>
    </div>
  );
}

export default ChangeAcronym;
