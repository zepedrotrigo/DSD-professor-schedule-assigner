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

function Home() {
    fetch('http://172.18.0.3:8000')
  .then(response => response.json())
  .then(data => console.log(data));

    const data = {
        content: {
            body: [
                {
                    name: "Introdução Humano-Computador",
                    acronym: "IHC",
                },
                {
                    name: "Testes e Qualidade de Software",
                    acronym: "TQS",
                },
                {
                    name: "Algoritmos e Estruturas de Dados",
                    acronym: "AED",
                },
                {
                    name: "Aspetos Profissionais e Sociais de Engenharia Informática",
                    acronym: "APSEI",
                },
                {
                    name: "Segurança ",
                    acronym: "SIO",
                },
            ]
        }
    };

    return (
        <div className="content">
            <UniversalBar></UniversalBar>
            <Navbar></Navbar>
            <div className='panel-wrapper'>
                <SidePanel>
                    <CourseHeader/>
                    <CourseContent />
                </SidePanel>
                <MainPanel>
                    {data.content.body.map((map) => (
                        <MainCell acr={map.acronym}/>
                    ))}
                    <div className='align-cell'>
                        <MainCell acr={data.content.body[0].acronym}/>
                        <Cell extClass="cell sm p"></Cell>
                        <Cell extClass="cell sm tp"/>
                        <Cell extClass="cell sm p"></Cell>
                        <Cell extClass="cell sm p"></Cell>
                    </div>
                </MainPanel>
                <MainPanel>
                    <MainCell />
                    <MainCell />
                    <MainCell />
                    <MainCell />
                    <MainCell />
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