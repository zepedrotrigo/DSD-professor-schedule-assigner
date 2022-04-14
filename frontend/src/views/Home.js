import '../App.css';
import React from "react";
import { useState, useEffect } from 'react';
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
            dat: null
        }
    }
    //data.assigned_classes[0].uc_acronym
    componentDidMount() {
        fetch('http://172.18.0.3:8000/v1/assigned_classes/')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ apiResponded: true, dat: data })
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
                            this.state.dat.assigned_classes.map((i) => (
                                <MainCell f1={i.uc_acronym} f2={i.uc_name} f3={i.director_acronym} f4={i.students_estimate} />
                            ))
                            : <h3>Fetching...</h3>}
                        <h3>{this.state.counter}</h3>
                    </MainPanel>
                    <MainPanel>
                        {this.state.apiResponded == true ?
                            this.state.dat.assigned_classes.map((i) => (
                                <MainCell f1={i.prof_acronym} f2={i.prof_name}/>
                            ))
                            : <h3>Fetching...</h3>}
                        <h3>{this.state.counter}</h3>
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

/*
function Home() {
    const [assignedCells, setCount] = useState(null);

    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        getWeather()
            .then(data => {
                setWeatherData(data);
            })
            .catch(error => setError(error.message));
    }, []);

    useEffect(() => {
        fetch('http://172.18.0.3:8000/v1/assigned_classes/')
            .then(response => response.json())
            .then(data =>
                setCount(data)
            );
    }, []);

    setCount(1, () => console.log(this.state));

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

                </MainPanel>
                <MainPanel>
                </MainPanel>
                <SidePanel>
                    <TeacherHeader />
                    <TeacherContent />
                </SidePanel>
            </div>
        </div>
    )
}
*/
function getWeather() {
    return fetch('http://172.18.0.3:8000/v1/assigned_classes/')
        .then((response) => response.json())
        .then((responseData) => {
            //console.log(responseData);
            return responseData;
        })
        .catch(error => console.warn(error));
}

export default Home;