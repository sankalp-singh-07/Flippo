import { motion } from 'framer-motion';
import React from 'react';

const Marquee = () => {
	return (
		<div
			data-scroll
			data-scroll-section
			data-scroll-speed=".2"
			className="w-full py-12 bg-[#cec8c0] rounded-tl-3xl rounded-tr-3xl z-10"
		>
			<div className="flex whitespace-nowrap overflow-hidden text-zinc-900">
				<motion.h1
					initial={{ x: '0' }}
					animate={{ x: '-100%' }}
					transition={{
						repeat: Infinity,
						ease: 'linear',
						duration: 10,
					}}
					className="text-[12vw] -my-[3vw] text-center font-manrope font-semibold px-3"
				>
					WE ARE FLIPPO.
				</motion.h1>
				<motion.h1
					initial={{ x: '0' }}
					animate={{ x: '-100%' }}
					transition={{
						repeat: Infinity,
						ease: 'linear',
						duration: 10,
					}}
					className="text-[12vw] -my-[3vw] text-center font-manrope font-semibold px-3"
				>
					WE ARE FLIPPO.
				</motion.h1>
				<motion.h1
					initial={{ x: '0' }}
					animate={{ x: '-100%' }}
					transition={{
						repeat: Infinity,
						ease: 'linear',
						duration: 10,
					}}
					className="text-[12vw] -my-[3vw] text-center font-manrope font-semibold px-3"
				>
					WE ARE FLIPPO.
				</motion.h1>
			</div>
		</div>
	);
};

export default Marquee;
