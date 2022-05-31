import Card from "../components/Card/Card";
import Filters from "../components/Filters/Filters";
import Navbar from '../components/Navbar';
import SearchAndFilters from "../components/SearchAndFilters/SearchAndFilters";
import SearchBar from "../components/SearchBar/SearchBar";
import UniversalBar from '../components/UniversalBar';
import "./ChangeAcronym.css";

function ChangeAcronym() {


    return (
        <div className='content'>
            <UniversalBar></UniversalBar>
            <Navbar></Navbar>
            <SearchAndFilters class="minor-width-wrapper" classContent="minor-width-content">
                <Filters />
                <SearchBar />
            </SearchAndFilters>
            <div className="change-acronym">  
                <Card name="Tomás Oliveira e Silva" acronym="TOS" onClick={null} />
                <Card name="Tomás Oliveira e Silva" acronym="TOS" onClick={null} />
                <Card name="Tomás Oliveira e Silva" acronym="TOS" onClick={null} />
                <Card name="Tomás Oliveira e Silva" acronym="TOS" onClick={null} />
                <Card name="Tomás Oliveira e Silva" acronym="TOS" onClick={null} />
            </div>
        </div>
    )
}

export default ChangeAcronym;