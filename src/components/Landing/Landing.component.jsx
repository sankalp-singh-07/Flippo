import React from 'react';

const Landing = () => {
	return (
		<div className="w-full h-screen bg-zinc-900 pt-1">
			<div className="textBox mt-48 ml-20">
				{['We create', 'Eye-opening', 'presentations'].map(
					(item, ind) => {
						return (
							<div key={ind} className="masker">
								<h1 className="uppercase text-8xl leading-[6vw] tracking-tight font-manrope font-bold">
									{item}
								</h1>
							</div>
						);
					}
				)}
			</div>
			<div className="border-t-2 border-zinc-800 mt-20 flex justify-between items-center px-9 py-10">
				{[
					'For public and private companies',
					'From the first pitch to IPO',
				].map((item, ind) => (
					<div key={ind} className="text-sm font-medium">
						{item}
					</div>
				))}
				<div className="start">
					<div className="uppercase px-5 py-2 border-2 border-zinc-700 rounded-full">
						Start The Project
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
