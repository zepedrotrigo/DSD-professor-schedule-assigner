import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home';

function App() {
	// You can put javascript code here or declare constants!
	// use {} inside html to access variables

	return (
		<Router>
			<div className='body'>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;