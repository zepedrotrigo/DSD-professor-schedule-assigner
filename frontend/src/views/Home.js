import '../App.css';
import React from "react";
import UniversalBar from '../components/UniversalBar'
import Navbar from '../components/Navbar';
import Cell from '../components/Cells/Cell';
import SidePanel from '../components/Panels/SidePanel/SidePanel';
import MainPanel from '../components/Panels/MainPanel/MainPanel';
import TeacherContent from '../components/Panels/Content/TeacherContent';
import TeacherHeader from '../components/Panels/Content/TeacherHeader';
import CourseContent from '../components/Panels/Content/CourseContent';
import CourseHeader from '../components/Panels/Content/CourseHeader';
import MainCell from '../components/Cells/MainCell';

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            apiResponded: false,
            json: null
        }
    }

    componentDidMount() {
        fetch('http://172.18.0.3:8000/v1/assigned_classes/')
            .then((response) => response.json())
            .then((data) => {
                this.setState({ apiResponded: true, json: data })
            })
    }

    render() {
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
                        {this.state.apiResponded == true ?
                            this.state.json.assigned_classes.map((i) => (
                                <MainCell f1={i.uc_acronym} f2={i.uc_name} f3={i.director_acronym} f4={i.students_estimate} />
                            ))
                            : <h3>Fetching...</h3>}
                    </MainPanel>
                    <MainPanel>
                        {this.state.apiResponded == true ?
                            this.state.json.assigned_classes.map((i) => (
                                <MainCell f1={i.prof_acronym} f2={i.prof_name}/>
                            ))
                            : <h3>Fetching...</h3>}
                    </MainPanel>
                    <SidePanel>
                        <TeacherHeader />
                        <TeacherContent />
                    </SidePanel>
                </div>
            </div>
        )
    }
}

export default Home;