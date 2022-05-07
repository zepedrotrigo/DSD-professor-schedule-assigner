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
            ucsList: null,
            profsList: null
        }
    }

    abbrev_name(str1) {
        var split_names = str1.trim().split(" ");
        if (split_names.length < 3)
            return str1

        var v = "";
        for (let n in split_names){
            if (split_names[n].length < 3){
                v = v + split_names[n]
                v = v + " "
            }
            else{
                v = v + split_names[n].substring(0,4)
                v = v + " "
            }
        }
        return v
    };
    sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    componentDidMount() {
        fetch('http://172.18.0.3:8000/v1/dsd_main_info?filter_by="ucs"')
            .then((response) => response.json())
            .then((data) => {
                this.setState({ ucsList: data })
            })

        this.sleep(50).then(r => {
            fetch('http://172.18.0.3:8000/v1/dsd_main_info?filter_by="profs"')
                .then((response) => response.json())
                .then((data) => {
                    this.setState({ profsList: data })
                })
        })
    }

    loadUCsCells() {
        let last_uc = "";
        let cellRows = []; // Contains all UCs wrapped in: <div className='align-cell'>{classes}</div>
        let classes = []; // Contains one UC, gets cleared after pushing to cellRows

        Array.from(this.state.ucsList.data.entries()).map((entry) => {
            const [k, v] = entry

            if (last_uc !== v.uc_acronym) {
                cellRows.push(<div className='align-cell'>{classes}</div>) // if new uc, put all classes inside div and clear classes array
                classes = [];
                classes.push(<MainCell f1={v.uc_acronym} f2={this.abbrev_name(v.uc_name)} f3={v.director_acronym} f4={v.students_estimate} />)
                classes.push(<Cell extClass={"cell sm "+v.component.toLowerCase()} inputClass={"input "+v.component.toLowerCase()} text={v.prof_acronym} hours={v.class_hours} percentage={v.availability_percent}></Cell>)

                last_uc = v.uc_acronym;
            }
            else {
                classes.push(<Cell extClass={"cell sm "+v.component.toLowerCase()} inputClass={"input "+v.component.toLowerCase()} text={v.prof_acronym} hours={v.class_hours} percentage={v.availability_percent}></Cell>)
            }
        })

        return (
            <div>
                {cellRows}
            </div>
        )
    }

    loadProfsCells() {
        let last_prof = "";
        let cellRows = []; // Contains all Profs wrapped in: <div className='align-cell'>{classes}</div>
        let classes = []; // Contains one Prof, gets cleared after pushing to cellRows

        Array.from(this.state.profsList.data.entries()).map((entry) => {
            const [k, v] = entry
            if (v.prof_acronym !== null) {
                if (last_prof !== v.prof_acronym) {
                    cellRows.push(<div className='align-cell'>{classes}</div>) // if new uc, put all classes inside div and clear classes array
                    classes = [];
                    classes.push(<MainCell f1={v.prof_acronym} f2={v.prof_name} />)
                    classes.push(<Cell extClass={"cell sm " + v.component.toLowerCase()} text={v.uc_acronym} hours={v.class_hours} percentage={v.availability_percent}></Cell>)

                    last_prof = v.prof_acronym;
                }
                else {
                    classes.push(<Cell extClass={"cell sm " + v.component.toLowerCase()} text={v.uc_acronym} hours={v.class_hours} percentage={v.availability_percent}></Cell>)
                }
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
                        {this.state.ucsList !== null ? this.loadUCsCells() : <h3>Fetching...</h3>}
                    </MainPanel>
                    <MainPanel>
                        {this.state.profsList !== null ? this.loadProfsCells() : <h3>Fetching...</h3>}
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