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

    loadUCsCells() {
        let last_uc = "";
        let cellRows = []; // Contains all UCs wrapped in: <div className='align-cell'>{classes}</div>
        let classes = []; // Constains one UC, gets cleared after pushing to cellRows

        Array.from(this.state.json.assigned_classes.entries()).map((entry) => {
            const [k, v] = entry

            if (last_uc !== v.uc_acronym) {
                cellRows.push(<div className='align-cell'>{classes}</div>) // if new uc, put all classes inside div and clear classes array
                classes = [];
                classes.push(<MainCell f1={v.uc_acronym} f2={v.uc_name} f3={v.director_acronym} f4={v.students_estimate} />)
                classes.push(<Cell extClass={"cell sm "+v.component.toLowerCase()} text={v.prof_acronym} hours={v.class_hours} percentage={v.availability_percent}></Cell>)

                last_uc = v.uc_acronym;
            }
            else {
                classes.push(<Cell extClass={"cell sm "+v.component.toLowerCase()} text={v.prof_acronym} hours={v.class_hours} percentage={v.availability_percent}></Cell>)
            }
        })

        return (
            <div>
                {cellRows}
            </div>
        )
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
                        {this.state.apiResponded === true ? this.loadUCsCells() : <h3>Fetching...</h3>}
                    </MainPanel>
                    <MainPanel>
                        {this.state.apiResponded === true ?
                            this.state.json.assigned_classes.map((i) => (
                                <MainCell f1={i.prof_acronym} f2={i.prof_name} />
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