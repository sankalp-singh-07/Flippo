import { motion, useAnimation } from 'framer-motion';
import React from 'react';

const Featured = () => {
	const cards = [useAnimation(), useAnimation()];

	const onHoverStartHelp = (ind) => {
		cards[ind].start({ y: '0' });
	};

	const onHoverEndHelp = (ind) => {
		cards[ind].start({ y: '100%' });
	};

	return (
		<div className="w-full py-20 bg-[#356552]">
			<div className="w-full px-14 pb-16 border-b-[1px] border-[#afa9a2]">
				<h1 className="text-[#cec8c0] text-5xl font-manrope font-semibold tracking-tight">
					Featured products
				</h1>
			</div>
			<div className=" w-full px-16 mt-10 flex gap-12">
				<motion.div
					onHoverStart={() => onHoverStartHelp(0)}
					onHoverEnd={() => onHoverEndHelp(0)}
					className="relative w-1/2 h-[80vh] bg-red-400 rounded-xl"
				>
					<h1 className="text-5xl flex overflow-hidden  font-manrope font-semibold tracking-tight absolute left-full -translate-x-[50%] top-1/2 -translate-y-[50%] z-10">
						{'FYDE'.split('').map((letter, index) => (
							<motion.span
								initial={{ y: '100%' }}
								animate={cards[0]}
								transition={{
									ease: [0.22, 1, 0.36, 1],
									delay: index * 0.05,
								}}
								className="inline-block"
							>
								{letter}
							</motion.span>
						))}
					</h1>
					<div className="w-full h-full overflow-hidden rounded-xl">
						<img
							className="w-full h-full bg-cover"
							src="https://ochi.design/wp-content/uploads/2022/05/10-663x550.png"
						/>
					</div>
				</motion.div>
				<motion.div
					onHoverStart={() => onHoverStartHelp(1)}
					onHoverEnd={() => onHoverEndHelp(1)}
					className="relative w-1/2 h-[80vh]  bg-red-400 rounded-xl "
				>
					<h1 className="text-5xl flex overflow-hidden font-manrope font-semibold  absolute right-full translate-x-[50%] top-1/2 -translate-y-[50%] z-10 ">
						{'VISE'.split('').map((letter, index) => (
							<motion.span
								initial={{ y: '100%' }}
								animate={cards[1]}
								transition={{
									ease: [0.22, 1, 0.36, 1],
									delay: index * 0.05,
								}}
								className="inline-block"
							>
								{letter}
							</motion.span>
						))}
					</h1>
					<div className="w-full h-full overflow-hidden rounded-xl">
						<img
							className="w-full h-full bg-cover"
							src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x550.png"
						/>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Featured;
