import '../App.css';
import UniversalBar from '../components/UniversalBar'
import Navbar from '../components/Navbar';
import SidePanel from '../components/SidePanel';
import MainPanel from '../components/MainPanel';

function Home() {

    return (
        <div className="content">
            <UniversalBar></UniversalBar>
            <Navbar></Navbar>
            <div className='panel-wrapper'>
                <SidePanel></SidePanel>
                <MainPanel>
                    <p>ola</p>
                    <p>ola</p>
                    <p>ola</p>
                    <p>ola</p>
                    <p>ola</p>
                    <p>ola</p>
                    <p>ola</p>
                    <p>ola</p>
                    <p>ola</p>
                    <p>ola</p>
                    <p>ola</p>
                    <p>ola</p>
                </MainPanel>
                <MainPanel>
                    <p>ola</p>
                    <p>ola</p>
                    <p>ola</p>
                    <p>ola</p>
                    <p>ola</p>
                </MainPanel>
                <SidePanel></SidePanel>
            </div>
        </div>
    )
}

export default Home;