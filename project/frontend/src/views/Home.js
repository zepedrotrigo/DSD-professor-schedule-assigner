import "../App.css";
import React from "react";
import UniversalBar from "../components/UniversalBar";
import Navbar from "../components/Navbar";
import Cell from "../components/Cells/Cell";
import SidePanel from "../components/Panels/SidePanel/SidePanel";
import MainPanel from "../components/Panels/MainPanel/MainPanel";
import TeacherContent from "../components/Panels/Content/TeacherContent";
import TeacherHeader from "../components/Panels/Content/TeacherHeader";
import CourseContent from "../components/Panels/Content/CourseContent";
import CourseHeader from "../components/Panels/Content/CourseHeader";
import MainCell from "../components/Cells/MainCell";
import TeacherCell from "../components/Cells/TeacherCell";
import "./Home.css";
import HelpButton from "../components/HelpButton/HelpButton";
import HelpPanel from "../components/HelpPanel/HelpPanel";
import HelpPanelItem from "../components/HelpPanel/HelpPanelItem";
import HelpPanelImageItem from "../components/HelpPanel/HelpPanelImageItem";

class Home extends React.Component {
  constructor(props) {
    super(props);
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
      profWishlist: null,
      ucsState:null,
      profsState: null,
      ucsFilter: null,
      profsFilter: null,
      helpPanel: false
    };
  }

  sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  componentDidMount = () => {
    this.setState({ucsFilter: "unassigned_classes desc", profsFilter: "total_hours asc"}, () => {
      this.ucsPanelsFetch(this.state.ucsFilter, this.state.profsFilter, true);
    })
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

  ucsPanelsFetch(ucFilter, profFilter, load) {
    fetch(process.env.REACT_APP_API_URL + "/classes_main_panel_info/?params=" + ucFilter)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ ucsList: data }, () => {
          this.loadUCsCells("");
          if (load)
            this.teachersPanelsFetch(profFilter);
        });
      });
  }

  teachersPanelsFetch(profFilter) {
    fetch(process.env.REACT_APP_API_URL + "/professors_main_panel_info/?params=" + profFilter)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ profsList: data }, () => {
          this.loadProfsCells("");
        });
      });
  }

  fetchTeacher(acronym) {
    fetch(process.env.REACT_APP_API_URL + `/professors?acronym="${acronym}"`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ teacherInfo: data });

        let id = null;
        window.profsIds.forEach((val, key) => {
          if (key == acronym) {
            id = val;
          }
        });

        fetch(process.env.REACT_APP_API_URL + `/wishlists/?prof_id=${id}`)
          .then((response) => response.json())
          .then((data) => {
            this.setState({ profWishlist: data });
          });
      });
  }

  fetchUc(acronym) {
    fetch(process.env.REACT_APP_API_URL + `/ucs?acronym="${acronym}"`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ ucInfo: data });

        let id = null;
        Array.from(this.state.ucInfo.ucs.entries()).map((entry) => {
          const [k, v] = entry;
          id = v.uc_id;
        });

        fetch(process.env.REACT_APP_API_URL + `/wishlists/?class_id=${id}`)
          .then((response) => response.json())
          .then((data) => {
            this.setState({ UCWishlist: data });
          });
      });
  }

  displayTeacherInSidePanel() {
    let result = [];
    let wishLikes = [];
    let wishDislikes = [];

    Array.from(this.state.teacherInfo.professors.entries()).map((entry) => {
      const [k, v] = entry;
      if (this.state.profCellClicked == v.acronym) {
        result.push(<TeacherHeader acronym={v.acronym} name={v.prof_name}/>);
        Array.from(this.state.profWishlist.wishlists.entries()).map((entry) => {
          const [k, v] = entry;
          window.ucsIds.forEach((val, key) => {
            if (val == v.uc_id) {
              if (v.preference == "likes") wishLikes.push(key);
              else if (v.preference == "dislikes") wishDislikes.push(key);
            }
          });
        });
        result.push(
          <TeacherContent
            email={v.email}
            phone={v.phone}
            rank={v.prof_rank} 
            situation={v.situation}
            wishLikes={wishLikes}
            wishDislikes={wishDislikes}
          />
        );
      }
    });

    return <div>{result}</div>;
  }

  displayUcInSidePanel() {
    let result = [];
    let wishlist = [];
    var direct = "";

    Array.from(this.state.ucInfo.ucs.entries()).map((entry) => {
      const [k, v] = entry;
      if (this.state.ucCellClicked == v.acronym) {
        result.push(<CourseHeader acronym={v.acronym} name={v.uc_name} />);
        Array.from(this.state.UCWishlist.wishlists.entries()).map((entry) => {
          const [k, v] = entry;
          if (v.preference == "likes") {
            window.profsIds.forEach((val, key) => {
              if (val == v.professor) {
                wishlist.push(key);
              }
            });
          }
        });
        window.profsIds.forEach((val, key) => {
          if (val == v.director) {
            direct = key;
          }
        });
        result.push(
          <CourseContent
            studentsEstimate={v.students_estimate}
            director={direct}
            wishlist={wishlist}
            filter={this.loadProfsCells}
          />
        );
      }
    });

    return <div>{result}</div>;
  }

  loadUCsCells = (searchInput) => {
    let last_uc = "";
    let cellRows = []; // Contains all UCs wrapped in: <div className='align-cell'>{classes}</div>
    let classes = []; // Contains one UC, gets cleared after pushing to cellRows
    let ucsArray = [];
    let ucsIds = new Map();
    let profsPerUc = new Map();

    Array.from(this.state.ucsList.data.entries()).map((entry) => {
      const [k, v] = entry;

      if (!profsPerUc.has(v.class_id)) {
        if (v.prof_acronym != null) profsPerUc.set(v.class_id, v.prof_acronym);
      }

      if (!ucsIds.has(v.uc_acronym)) {
        ucsIds.set(v.uc_acronym, v.uc_id);
      }
      
      if (searchInput===""){
        ucsArray.push(v);
      }
      else if ((v.uc_acronym.toUpperCase().startsWith(searchInput)) || (v.uc_name.toUpperCase().startsWith(searchInput))){
        ucsArray.push(v);
      }
    });
    var v = null;
    for (let index in ucsArray) {
      v = ucsArray[index];
      if (last_uc !== v.uc_acronym) {
        classes = [];
        cellRows.push(<div className="align-cell">{classes}</div>); // if new uc, put all classes inside div and clear classes array
        classes.push(
          <MainCell
            f1={v.uc_acronym}
            f2={this.shortenUcName(v.uc_name, 15)}
            f3={v.director_acronym}
            f4={v.students_estimate}
            onChildClick={this.handleChildClick}
          />
        );
        classes.push(
          <Cell
            id={v.class_id}
            extClass={"cell sm " + v.component.toLowerCase()}
            inputClass={"input " + v.component.toLowerCase()}
            text={v.prof_acronym}
            hours={v.class_hours}
            percentage={v.availability_percent}
            onChildSubmit={this.handleSubmit}
            onChildChange={this.handleChildChange}
          ></Cell>
        );

        last_uc = v.uc_acronym;
      } else {
        classes.push(
          <Cell
            id={v.class_id}
            extClass={"cell sm " + v.component.toLowerCase()}
            inputClass={"input " + v.component.toLowerCase()}
            text={v.prof_acronym}
            hours={v.class_hours}
            percentage={v.availability_percent}
            onChildSubmit={this.handleSubmit}
            onChildChange={this.handleChildChange}
          ></Cell>
        );
      }
    }

    window.ucsIds = ucsIds;
    window.profsPerUc = profsPerUc;

    this.setState({ ucsState: null }, () => {
      this.setState({ucsState: cellRows});
    });

    //return <div>{cellRows}</div>;
  };

  loadProfsCells = (searchInput) => {
    let last_prof = "";
    let cellRows = []; // Contains all Profs wrapped in: <div className='align-cell'>{classes}</div>
    let classes = []; // Contains one Prof, gets cleared after pushing to cellRows
    let profsArray = [];
    let profsIds = new Map();
    let profsIdsAndNames = new Map();

    Array.from(this.state.profsList.data.entries()).map((entry) => {
      const [k, v] = entry;

      if (!profsIds.has(v.prof_acronym)) {
        profsIds.set(v.prof_acronym, v.prof_id);
        profsIdsAndNames.set(v.prof_acronym, [v.prof_id, v.prof_name]);
      }

      if (searchInput===""){
        profsArray.push(v);
      }
      else if(searchInput.includes(v.prof_acronym)){
        profsArray.push(v);
      }
      else if ((v.prof_acronym.toUpperCase().startsWith(searchInput)) || (v.prof_name.toUpperCase().startsWith(searchInput))){
        profsArray.push(v);
      }
    });

    for (let index in profsArray) {
      var v = profsArray[index];
      if (last_prof !== v.prof_acronym) {
        classes = [];
        cellRows.push(<div className="align-cell">{classes}</div>); // if new uc, put all classes inside div and clear classes array
        classes.push(
          <TeacherCell
            class={v.total_hours > 8 ? "main-teacher-cell-warning" : "main-teacher-cell"}
            f1={v.prof_acronym}
            f2={this.shortenTeacherName(v.prof_name)}
            f3={v.total_hours + "H"}
            onChildClick={this.handleChildClick}
          />
        );
        if (v.class_id !== null)
          classes.push(
            <Cell
              extClass={"cell sm " + v.component.toLowerCase()}
              inputClass={"input " + v.component.toLowerCase()}
              text={v.uc_acronym}
              hours={v.class_hours}
              percentage={v.availability_percent}
            ></Cell>
          );
        last_prof = v.prof_acronym;
      } else {
        if (v.class_id !== null)
          classes.push(
            <Cell
              extClass={"cell sm " + v.component.toLowerCase()}
              inputClass={"input " + v.component.toLowerCase()}
              text={v.uc_acronym}
              hours={v.class_hours}
              percentage={v.availability_percent}
            ></Cell>
          );
      }
    }

    window.profsIds = profsIds;
    window.profsIdsAndNames = profsIdsAndNames;

    this.setState({ profsState: null }, () => {
      this.setState({profsState: cellRows});
    });
  }

  handleChildClick = (acronym, type) => {
    if (type == "teacher") {
      if (acronym != this.state.profCellClicked)
        this.setState({ profCellClicked: acronym });

      this.fetchTeacher(acronym);
    } else {
      if (acronym != this.state.ucCellClicked)
        this.setState({ ucCellClicked: acronym });

      this.fetchUc(acronym);
    }
  };

  handleChildChange(prof_acronym, class_id) {
    if (window.profsIds.has(prof_acronym) || prof_acronym === "") {
      let prof_id1 = -1;

      if (prof_acronym !== "") prof_id1 = window.profsIds.get(prof_acronym);

      const info = { class_id: class_id, prof_id: prof_id1 };
      fetch(
        process.env.REACT_APP_API_URL + "/classes/?class_id=" +
          class_id +
          "&prof_id=" +
          prof_id1,
        {
          method: "PUT",
        }
      )
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
      if (window.profsPerUc.has(class_id)) {
        window.profsPerUc.delete(class_id);
        window.profsPerUc.set(class_id, window.profsIds.get(prof_acronym));
      } else window.profsPerUc.set(class_id, window.profsIds.get(prof_acronym));
    }
  }

  handleReload = () => {
    this.setState({ ucsList: null });
    this.setState({ profsList: null });
    this.ucsPanelsFetch(this.state.ucsFilter, this.state.profsFilter, true);
    //this.sleep(1000);
    //this.loadUCsCells();
  };

  handleSelectChange = (value) => {
    if (value.includes("uc") || value.includes("classes")){
      this.setState({ucsList: null}, () => {
        this.setState({ucsFilter: value}, () => {
          this.ucsPanelsFetch(this.state.ucsFilter, this.state.profsFilter, false); 
        });
      });
    }
    else{
      this.setState({profsList: null}, () => {
        this.setState({profsFilter: value}, () => {
          this.teachersPanelsFetch(this.state.profsFilter);
        });
      });
    }
  }

  showHelpPanel = () => {
    if (this.state.helpPanel === false) {
      this.setState({ helpPanel: true });
    } else {
      this.setState({ helpPanel: false });
    }
  }

  render() {
    return (
      <div className="content">
        <UniversalBar></UniversalBar>
        <Navbar onReload={this.handleReload}></Navbar>
        <div className="panel-wrapper">
          <SidePanel>
            {this.state.ucInfo !== null && this.state.UCWishlist !== null ? (
              this.displayUcInSidePanel()
            ) : (
              <p className="empty-message">
                Clica numa Unidade Curricular para mais informação...
              </p>
            )}
          </SidePanel>
          <MainPanel searchOnChange={this.loadUCsCells} onSelectChange={this.handleSelectChange} filtersValues={["unassigned_classes desc", "Turmas não atribuídas por ordem decrescente", "unassigned_classes asc", "Turmas não atribuídas por ordem crescente", "uc_acronym desc", "Ordem alfabética decrescente", "uc_acronym asc", "Ordem alfabética crescente"]}>
            {this.state.ucsState !== null ? <div>{this.state.ucsState}</div> : <h3>Fetching...</h3>}
          </MainPanel>
          <MainPanel searchOnChange={this.loadProfsCells} onSelectChange={this.handleSelectChange} filtersValues={["total_hours asc", "Professores ordenados pelo número de turmas crescente", "total_hours desc", "Professores ordenados pelo número de turmas decrescente", "prof_acronym desc", "Ordem alfabética decrescente", "prof_acronym asc", "Ordem alfabética crescente"]}>
          {this.state.profsState !== null ? <div>{this.state.profsState}</div> : <h3>Fetching...</h3>}
          </MainPanel>
          <SidePanel>
            {this.state.teacherInfo !== null &&
            this.state.profWishlist !== null ? (
              this.displayTeacherInSidePanel()
            ) : (
              <p className="empty-message">
                Clica num docente para mais informação...
              </p>
            )}
          </SidePanel>
          <HelpButton onClick={this.showHelpPanel} />
          {this.state.helpPanel && (
            <HelpPanel>
              <HelpPanelItem class="p" text="Aula Prática" />
              <HelpPanelItem class="t" text="Aula Teórica" />
              <HelpPanelItem class="tp" text="Aula Teórico Prática" />
              <HelpPanelItem class="lab" text="Aula Laboratorial" />
              <HelpPanelItem
                marginBottom="with-margin-bottom"
                class="outside-activity"
                text="Saída de Campo"
              />
              <HelpPanelImageItem
                image="imgs/cell.png"
                text="Célula"
                optionalText="% - participação total do professor na turma"
                optionalTextDesc= "H - duração da aula (em horas)"
              />
              <HelpPanelImageItem
                imageClass="bigger"
                image="imgs/uc-cell.png"
                text="Célula Unidade Curricular"
              />
              <HelpPanelImageItem
                imageClass="big"
                image="imgs/teacher-cell.png"
                text="Célula Professor"
              />
            </HelpPanel>
          )}
        </div>
      </div>
    );
  }
}

export default Home;