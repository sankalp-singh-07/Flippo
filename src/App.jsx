import React from 'react';
import Navbar from './components/Navbar/Navbar.component';
import Landing from './components/Landing/Landing.component';
import Marquee from './components/Marquee/Marquee.component';

const App = () => {
	return (
		<div className="w-screen min-h-screen bg-zinc-900 text-slate-50">
			<Navbar />
			<Landing />
			<Marquee />
		</div>
	);
};

export default App;
