import '../App.css';
import UniversalBar from '../components/UniversalBar'
import Navbar from '../components/Navbar';
import SidePanel from '../components/SidePanel';
import MainPanel from '../components/MainPanel';
import Cell from '../components/Cell';

function Home() {

    return (
        <div className="content">
            <UniversalBar></UniversalBar>
            <Navbar></Navbar>
            <div className='panel-wrapper'>
                <SidePanel></SidePanel>
                <MainPanel>
                    <Cell></Cell>
                    <Cell extClass="cell t"></Cell>
                    <Cell extClass="cell tp"></Cell>
                    <Cell extClass="cell lab"></Cell>
                    <Cell extClass="cell outside-activity"></Cell>
                </MainPanel>
                <MainPanel>
                    <Cell></Cell>
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