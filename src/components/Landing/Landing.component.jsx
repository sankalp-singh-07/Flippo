import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const Landing = () => {
	return (
		<div className="w-full h-screen bg-zinc-900 pt-1">
			<div className="textBox mt-48 ml-20">
				{['We create', 'Eye-opening', 'presentations'].map(
					(item, ind) => {
						return (
							<div key={ind} className="masker">
								<div className="w-fit flex items-center">
									{ind === 1 && (
										<div className="h-[4.7vw] w-[9vw] bg-red-600 relative top-[2.2px] rounded-md mr-[1vw]"></div>
									)}
									<h1 className="uppercase text-[6.4vw] leading-[6vw] tracking-tight font-manrope font-bold">
										{item}
									</h1>
								</div>
							</div>
						);
					}
				)}
			</div>
			<div className="border-t-2 border-zinc-800 mt-20 flex justify-between items-center px-20 py-10">
				{[
					'For public and private companies',
					'From the first pitch to IPO',
				].map((item, ind) => (
					<div key={ind} className="text-sm font-medium">
						{item}
					</div>
				))}
				<div className="start flex">
					<div className="uppercase px-5 py-2 border-2 border-zinc-500 rounded-full">
						Start The Project
					</div>
					<div className="w-10 h-10 px-3 py-3 border-2 border-zinc-500 rounded-full flex justify-center items-center ml-2">
						<span className="rotate-[45deg]">
							<FaArrowUp />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
