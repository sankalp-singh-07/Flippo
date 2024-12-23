import React from 'react';
import Navbar from './components/Navbar/Navbar.component';
import Landing from './components/Landing/Landing.component';
import Marquee from './components/Marquee/Marquee.component';
import About from './components/About/About.component';
import Eyes from './components/Eyes/eyes.component';
import Featured from './components/Featured/Featured.component';
import Cards from './components/Cards/Cards.component';
import Footer from './components/Footer/Footer.component';
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
	const locomotiveScroll = new LocomotiveScroll();

	return (
		<div className="w-screen min-h-screen bg-zinc-900 text-slate-50">
			<Navbar />
			<Landing />
			<Marquee />
			<About />
			<Eyes />
			<Featured />
			<Cards />
			<Footer />
		</div>
	);
};

export default App;
