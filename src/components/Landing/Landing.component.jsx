import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const Landing = () => {
	return (
		<div
			data-scroll
			data-scroll-speed="-.4"
			className="w-full h-screen bg-zinc-900 pt-1"
		>
			<div className="textBox mt-48 ml-20">
				{['We create', 'Eye-opening', 'presentations'].map(
					(item, ind) => {
						return (
							<div key={ind} className="masker">
								<div className="w-fit flex items-center">
									{ind === 1 && (
										<motion.div
											initial={{ width: 0 }}
											animate={{ width: '9vw' }}
											transition={{
												ease: [0.76, 0, 0.24, 1],
												duration: 1,
											}}
											className="h-[4.7vw] w-[9vw] relative top-[2.2px] rounded-md mr-[1vw]"
										>
											<img
												className="w-full h-full object-cover rounded-md"
												src="https://www.wallpaperflare.com/static/615/952/64/landscape-photoshop-mountains-green-wallpaper.jpg"
											/>
										</motion.div>
									)}
									<h1
										className={`uppercase text-[6.4vw] leading-[6vw] tracking-tight font-manrope font-bold ${
											ind === 1
												? 'text-[#356552]'
												: 'text-slate-50'
										}`}
									>
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
