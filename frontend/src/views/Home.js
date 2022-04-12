import '../App.css';
import UniversalBar from '../components/UniversalBar'
import Navbar from '../components/Navbar';
import SidePanel from '../components/SidePanel';
import MainPanel from '../components/MainPanel';
import Cell from '../components/Cell';

function Home() {
    fetch('http://127.0.0.1:8000')
  .then(response => response.json())
  .then(data => console.log(data));
    return (
        <div className="content">
            <UniversalBar></UniversalBar>
            <Navbar></Navbar>
            <div className='panel-wrapper'>
                <SidePanel></SidePanel>
                <MainPanel>
                    <Cell extClass="cell p"></Cell>
                    <Cell extClass="cell t"></Cell>
                    <Cell extClass="cell tp"></Cell>
                    <Cell extClass="cell lab"></Cell>
                    <Cell extClass="cell outside-activity"></Cell>
                </MainPanel>
                <MainPanel>
                    <Cell extClass="cell p"></Cell>
                    <Cell extClass="cell t"></Cell>
                    <Cell extClass="cell tp"></Cell>
                    <Cell extClass="cell lab"></Cell>
                    <Cell extClass="cell outside-activity"></Cell>
                </MainPanel>
                <SidePanel></SidePanel>
            </div>
        </div>
    )
}

export default Home;