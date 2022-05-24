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
import TeacherCell from '../components/Cells/TeacherCell';

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            ucsList: null,
            profsList: null,
            profsHours: null,
            profCellClicked: null,
            ucCellClicked: null,
            teacherInfo: null,
            ucInfo: null
        }
    }

    sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    componentDidMount() {
        this.mainPanelsFetch();
    }

    shortenUcName(name, desiredLength) {
        let abbreviation = "";
        let words = name.trim().split(" ");

        for (let i = 0; i < words.length; i++) {
            if (words[i].length < 4) {
                words.splice(i, 1);
            }
        }

        let shortWordBy = Math.round(desiredLength / words.length);

        words.forEach((word) => {
            abbreviation += word.substring(0, shortWordBy) + " ";
        });

        return abbreviation;
    }

    shortenTeacherName(name) {
        var names = name.trim().split(" ");
        return names[0] + " " + names[names.length - 1];
    }

    mainPanelsFetch() {
        fetch('http://172.18.0.3:8000/v1/dsd_main_info?filter_by="ucs"')
            .then((response) => response.json())
            .then((data) => {
                this.setState({ ucsList: data })

                fetch('http://172.18.0.3:8000/v1/dsd_main_info?filter_by="profs"')
                    .then((response) => response.json())
                    .then((data) => {
                        this.setState({ profsList: data })
                    })
            })
    }

    fetchTeacher(acronym) {
        fetch(`http://172.18.0.3:8000/v1/professors?acronym="${acronym}"`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ teacherInfo: data })
            })
    }

    fetchUc(acronym) {
        fetch(`http://172.18.0.3:8000/v1/ucs?acronym="${acronym}"`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ ucInfo: data })
            })
    }

    displayTeacherInSidePanel() {
        let result = [];

        Array.from(this.state.teacherInfo.professors.entries()).map((entry) => {
            const [k, v] = entry
            if (this.state.profCellClicked == v.acronym) {
                result.push(<TeacherHeader acronym={v.acronym} name={v.prof_name} />)
                result.push(<TeacherContent email={v.email} phone={v.phone} />)
            }
        })

        return (
            <div>
                {result}
            </div>
        )
    }

    displayUcInSidePanel() {
        let result = [];

        Array.from(this.state.ucInfo.ucs.entries()).map((entry) => {
            const [k, v] = entry
            if (this.state.ucCellClicked == v.acronym) {
                result.push(<CourseHeader acronym={v.acronym} name={v.uc_name} />)
                result.push(<CourseContent studentsEstimate={v.students_estimate} director={v.director} />)
            }
        })

        return (
            <div>
                {result}
            </div>
        )
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
                classes.push(<MainCell f1={v.uc_acronym} f2={this.shortenUcName(v.uc_name, 15)} f3={v.director_acronym} f4={v.students_estimate} onChildClick={this.handleChildClick} />)
                classes.push(<Cell id={v.class_id} extClass={"cell sm " + v.component.toLowerCase()} inputClass={"input " + v.component.toLowerCase()} text={v.prof_acronym} hours={v.class_hours} percentage={v.availability_percent} onChildSubmit={this.handleSubmit}></Cell>)

                last_uc = v.uc_acronym;
            }
            else {
                classes.push(<Cell id={v.class_id} extClass={"cell sm " + v.component.toLowerCase()} inputClass={"input " + v.component.toLowerCase()} text={v.prof_acronym} hours={v.class_hours} percentage={v.availability_percent} onChildSubmit={this.handleSubmit}></Cell>)
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
        let profsIds = new Map;

        Array.from(this.state.profsList.data.entries()).map((entry) => {
            const [k, v] = entry
            if (v.prof_acronym !== null) {
                if (!(profsIds.has(v.prof_acronym))){
                    profsIds.set(v.prof_acronym, v.prof_id);
                }
                if (last_prof !== v.prof_acronym) {
                    cellRows.push(<div className='align-cell'>{classes}</div>) // if new uc, put all classes inside div and clear classes array
                    classes = [];   
                    classes.push(<TeacherCell className="main-teacher-cell" f1={v.prof_acronym} f2={this.shortenTeacherName(v.prof_name)} f3={v.total_hours + "H"} onChildClick={this.handleChildClick} />)
                    classes.push(<Cell extClass={"cell sm " + v.component.toLowerCase()} inputClass={"input " + v.component.toLowerCase()} text={v.uc_acronym} hours={v.class_hours} percentage={v.availability_percent}></Cell>)
                    last_prof = v.prof_acronym;
                }
                else {
                    classes.push(<Cell extClass={"cell sm " + v.component.toLowerCase()} inputClass={"input " + v.component.toLowerCase()} text={v.uc_acronym} hours={v.class_hours} percentage={v.availability_percent}></Cell>)
                }
            }
        })

        window.profsIds = profsIds;

        return (
            <div>
                {cellRows}
            </div>
        )
    }

    handleChildClick = (acronym, type) => {
        if (type == "teacher") {
            if (acronym != this.state.profCellClicked)
                this.setState({ profCellClicked: acronym });

            this.fetchTeacher(acronym)
        } else {
            if (acronym != this.state.ucCellClicked)
                this.setState({ ucCellClicked: acronym });

            this.fetchUc(acronym)
        }
    }

    handleSubmit(class_id, prof_acronym) {
        var id, item = null;
        if(window.profsIds.has(prof_acronym)){
            id = window.profsIds.get(prof_acronym);
            item = class_id;
            const info = {class_id: item, prof_id: id};
            fetch('http://172.18.0.3:8000/v1/classes/?class_id=' + item + '&prof_id=' + id, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(info),
             })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
        }
        else{
            console.log("WRONG ACRONYM");
        }
            
    }

    render() {
        return (
            <div className="content">
                <UniversalBar></UniversalBar>
                <Navbar></Navbar>
                <div className='panel-wrapper'>
                    <SidePanel>
                        {this.state.ucInfo !== null ? this.displayUcInSidePanel() : <span>Click on an UC to show more info...</span>}
                    </SidePanel>
                    <MainPanel>
                        {this.state.ucsList !== null ? this.loadUCsCells() : <h3>Fetching...</h3>}
                    </MainPanel>
                    <MainPanel>
                        {this.state.profsList !== null ? this.loadProfsCells() : <h3>Fetching...</h3>}
                    </MainPanel>
                    <SidePanel>
                        {this.state.teacherInfo !== null ? this.displayTeacherInSidePanel() : <span>Click on a teacher to show more info...</span>}
                    </SidePanel>
                </div>
            </div>
        )
    }
}

export default Home;