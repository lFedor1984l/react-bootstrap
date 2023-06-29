import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Contacts from './Pages/Contacts';
import Courses from './Pages/Courses';
import Lessons from './Pages/Lessons';
import Homes from './Pages/Homes';




function App() {
	return (
		<>
			<NavBar />
			<Router>
				<Routes>
					<Route path='/home' element={<Homes/>} />
					<Route path='/contacts' element={<Contacts/>} />
					<Route path='/courses' element={<Courses/>} />
					<Route path='/lessons' element={<Lessons/>} />
				</Routes>
			</Router>

		</>
	);
}

export default App;
