import '../App.css';
import UniversalBar from '../components/UniversalBar'
import Navbar from '../components/Navbar';
import Cell from '../components/Cell';
import SidePanel from '../components/Panels/SidePanel/SidePanel';
import MainPanel from '../components/Panels/MainPanel/MainPanel';
import TeacherContent from '../components/Panels/Content/TeacherContent';
import TeacherHeader from '../components/Panels/Content/TeacherHeader';
import CourseContent from '../components/Panels/Content/CourseContent';
import CourseHeader from '../components/Panels/Content/CourseHeader';

function Home() {
    fetch('http://172.18.0.3:8000')
  .then(response => response.json())
  .then(data => console.log(data));
    return (
        <div className="content">
            <UniversalBar></UniversalBar>
            <Navbar></Navbar>
            <div className='panel-wrapper'>
                <SidePanel>
                    <CourseHeader />
                    <CourseContent />
                </SidePanel>
                <MainPanel>
                    <Cell />
                    <Cell extClass="cell p"></Cell>
                    <Cell extClass="cell t"></Cell>
                    <Cell extClass="cell tp"></Cell>
                    <Cell extClass="cell lab"></Cell>
                    <Cell extClass="cell outside-activity"></Cell>
                    <div className='align-cell'>
                        <Cell />
                        <Cell extClass="cell sm p"></Cell>
                        <Cell extClass="cell sm tp"/>
                        <Cell extClass="cell sm p"></Cell>
                        <Cell extClass="cell sm p"></Cell>
                    </div>
                </MainPanel>
                <MainPanel>
                    <Cell extClass="cell p"></Cell>
                    <Cell extClass="cell t"></Cell>
                    <Cell extClass="cell tp"></Cell>
                    <Cell extClass="cell lab"></Cell>
                    <Cell extClass="cell outside-activity"></Cell>
                </MainPanel>
                <SidePanel>
                    <TeacherHeader />
                    <TeacherContent />
                </SidePanel>
            </div>
        </div>
    )
}

export default Home;