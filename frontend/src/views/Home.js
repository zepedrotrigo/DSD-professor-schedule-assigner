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
import './Home.css';

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
            ucInfo: null,
            UCPanelState: null,
            UCWishlist: null,
            profWishlist: null
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
        fetch('http://localhost:8000/v1/classes_main_panel_info')
            .then((response) => response.json())
            .then((data) => {
                this.setState({ ucsList: data })

                fetch('http://localhost:8000/v1/professors_main_panel_info')
                    .then((response) => response.json())
                    .then((data) => {
                        this.setState({ profsList: data })
                    })
            })
    }

    fetchTeacher(acronym) {
        fetch(`http://localhost:8000/v1/professors?acronym="${acronym}"`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ teacherInfo: data })

                let id = null;
                window.profsIds.forEach((val, key) => {
                    if (key == acronym) {
                        id = val;
                    }
                });

                fetch(`http://localhost:8000/v1/wishlists/?prof_id=${id}`)
                    .then((response) => response.json())
                    .then((data) => {
                        this.setState({ profWishlist: data })
                    })
            })
    }

    fetchUc(acronym) {
        fetch(`http://localhost:8000/v1/ucs?acronym="${acronym}"`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ ucInfo: data });

                let id = null;
                Array.from(this.state.ucInfo.ucs.entries()).map((entry) => {
                    const [k, v] = entry
                    id = v.uc_id;
                })

                fetch(`http://localhost:8000/v1/wishlists/?class_id=${id}`)
                    .then((response) => response.json())
                    .then((data) => {
                        this.setState({ UCWishlist: data })
                    })

            })
    }

    displayTeacherInSidePanel() {
        let result = [];
        let wishLikes = [];
        let wishDislikes = [];

        Array.from(this.state.teacherInfo.professors.entries()).map((entry) => {
            const [k, v] = entry;

            if (this.state.profCellClicked == v.acronym) {
                result.push(<TeacherHeader acronym={v.acronym} name={v.prof_name} />)
                Array.from(this.state.profWishlist.wishlists.entries()).map((entry) => {
                    const [k, v] = entry
                    window.ucsIds.forEach((val, key) => {
                        if (val == v.uc_id) {
                            if (v.preference == "likes")
                                wishLikes.push(key);
                            else if (v.preference == "dislikes")
                                wishDislikes.push(key);
                        }
                    });
                })
                result.push(<TeacherContent email={v.email} phone={v.phone} wishLikes={wishLikes} wishDislikes={wishDislikes} />)
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
        let wishlist = [];

        Array.from(this.state.ucInfo.ucs.entries()).map((entry) => {
            const [k, v] = entry
            if (this.state.ucCellClicked == v.acronym) {
                result.push(<CourseHeader acronym={v.acronym} name={v.uc_name} />);
                Array.from(this.state.UCWishlist.wishlists.entries()).map((entry) => {
                    const [k, v] = entry
                    if (v.preference == "likes") {
                        window.profsIds.forEach((val, key) => {
                            if (val == v.professor) {
                                wishlist.push(key);
                            }
                        });
                    }
                })
                result.push(<CourseContent studentsEstimate={v.students_estimate} director={v.director} wishlist={wishlist} />);
            }
        })

        return (
            <div>
                {result}
            </div>
        )
    }

    loadUCsCells = () => {
        let last_uc = "";
        let cellRows = []; // Contains all UCs wrapped in: <div className='align-cell'>{classes}</div>
        let classes = []; // Contains one UC, gets cleared after pushing to cellRows
        let ucsIds = new Map;
        let profsPerUc = new Map;

        Array.from(this.state.ucsList.data.entries()).map((entry) => {
            const [k, v] = entry

            if (!(profsPerUc.has(v.class_id))) {
                if (v.prof_acronym != null)
                    profsPerUc.set(v.class_id, v.prof_acronym);
            }

            if (!(ucsIds.has(v.uc_acronym))) {
                ucsIds.set(v.uc_acronym, v.uc_id);
            }

            if (last_uc !== v.uc_acronym) {
                cellRows.push(<div className='align-cell'>{classes}</div>) // if new uc, put all classes inside div and clear classes array
                classes = [];
                classes.push(<MainCell f1={v.uc_acronym} f2={this.shortenUcName(v.uc_name, 15)} f3={v.director_acronym} f4={v.students_estimate} onChildClick={this.handleChildClick} />)
                classes.push(<Cell id={v.class_id} extClass={"cell sm " + v.component.toLowerCase()} inputClass={"input " + v.component.toLowerCase()} text={v.prof_acronym} hours={v.class_hours} percentage={v.availability_percent} onChildSubmit={this.handleSubmit} onChildChange={this.handleChildChange}></Cell>)

                last_uc = v.uc_acronym;
            }
            else {
                classes.push(<Cell id={v.class_id} extClass={"cell sm " + v.component.toLowerCase()} inputClass={"input " + v.component.toLowerCase()} text={v.prof_acronym} hours={v.class_hours} percentage={v.availability_percent} onChildSubmit={this.handleSubmit} onChildChange={this.handleChildChange}></Cell>)
            }
        })

        window.ucsIds = ucsIds;
        window.profsPerUc = profsPerUc;

        //this.setState({ UCPanelState: cellRows });

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
        let profsIdsAndNames = new Map;

        Array.from(this.state.profsList.data.entries()).map((entry) => {
            const [k, v] = entry

            if (!(profsIds.has(v.prof_acronym))) {
                profsIds.set(v.prof_acronym, v.prof_id);
                profsIdsAndNames.set(v.prof_acronym, [v.prof_id, v.prof_name]);
            }
            if (last_prof !== v.prof_acronym) {
                cellRows.push(<div className='align-cell'>{classes}</div>) // if new uc, put all classes inside div and clear classes array
                classes = [];
                classes.push(<TeacherCell className="main-teacher-cell" f1={v.prof_acronym} f2={this.shortenTeacherName(v.prof_name)} f3={v.total_hours + "H"} onChildClick={this.handleChildClick} />)
                if (v.class_id !== null)
                    classes.push(<Cell extClass={"cell sm " + v.component.toLowerCase()} inputClass={"input " + v.component.toLowerCase()} text={v.uc_acronym} hours={v.class_hours} percentage={v.availability_percent}></Cell>)
                last_prof = v.prof_acronym;
            }
            else {
                if (v.class_id !== null)
                    classes.push(<Cell extClass={"cell sm " + v.component.toLowerCase()} inputClass={"input " + v.component.toLowerCase()} text={v.uc_acronym} hours={v.class_hours} percentage={v.availability_percent}></Cell>)
            }
        })

        window.profsIds = profsIds;
        window.profsIdsAndNames = profsIdsAndNames;

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

    handleChildChange(prof_acronym, class_id) {
        if ((window.profsIds.has(prof_acronym)) || (prof_acronym === "")) {
            let prof_id1 = -1;

            if (prof_acronym !== "")
                prof_id1 = window.profsIds.get(prof_acronym);

            const info = { class_id: class_id, prof_id: prof_id1 };
            fetch('http://localhost:8000/v1/classes/?class_id=' + class_id + '&prof_id=' + prof_id1, {
                method: 'PUT',
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(err => console.log(err));
            if (window.profsPerUc.has(class_id)) {
                window.profsPerUc.delete(class_id);
                window.profsPerUc.set(class_id, window.profsIds.get(prof_acronym));
            }
            else
                window.profsPerUc.set(class_id, window.profsIds.get(prof_acronym));
        }
    }

    handleReload = () => {
        this.setState({ ucsList: null });
        this.setState({ profsList: null });
        this.mainPanelsFetch();
        //this.sleep(1000);
        //this.loadUCsCells();
    }

    render() {
        return (
            <div className="content">
                <UniversalBar></UniversalBar>
                <Navbar onReload={this.handleReload}></Navbar>
                <div className='panel-wrapper'>
                    <SidePanel>
                        {(this.state.ucInfo !== null && this.state.UCWishlist !== null) ? this.displayUcInSidePanel() : <p className='empty-message'>Clica numa Unidade Curricular para mais informação...</p>}
                    </SidePanel>
                    <MainPanel>
                        {this.state.ucsList !== null ? this.loadUCsCells() : <h3>Fetching...</h3>}
                    </MainPanel>
                    <MainPanel>
                        {this.state.profsList !== null ? this.loadProfsCells() : <h3>Fetching...</h3>}
                    </MainPanel>
                    <SidePanel>
                        {(this.state.teacherInfo !== null && this.state.profWishlist !== null) ? this.displayTeacherInSidePanel() : <p className='empty-message'>Clica num docente para mais informação...</p>}
                    </SidePanel>
                </div>
            </div>
        )
    }
}

export default Home;