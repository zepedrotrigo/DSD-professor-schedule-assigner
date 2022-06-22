import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Home from './views/Home';
import ChangeAcronym from './views/ChangeAcronym';
import SidePanel from './components/Panels/SidePanel/SidePanel';
import TeacherHeader from './components/Panels/Content/TeacherHeader';
import TeacherContent from './components/Panels/Content/TeacherContent';

function App() {
	// You can put javascript code here or declare constants!
	// use {} inside html to access variables

	return (
		<Router>
			<div className='body'>
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/change-acronym" element={<ChangeAcronym data={window.ids}/>}/>
					<Route path="/sidepanel" element={<SidePanel><TeacherHeader /><TeacherContent /></SidePanel>}/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;