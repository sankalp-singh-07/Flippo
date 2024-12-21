import React from 'react';
import Navbar from './components/Navbar/Navbar.component';
import Landing from './components/Landing/Landing.component';

const App = () => {
	return (
		<div className="w-screen h-screen text-slate-50">
			<Navbar />
			<Landing />
		</div>
	);
};

export default App;
