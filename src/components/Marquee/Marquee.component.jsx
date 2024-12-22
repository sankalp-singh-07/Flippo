import React from 'react';

const Marquee = () => {
	return (
		<div className="w-full py-12 bg-[#cec8c0] rounded-tl-3xl rounded-tr-3xl">
			<div className="flex whitespace-nowrap overflow-hidden gap-6 text-zinc-900">
				<h1 className="text-[12vw] -my-[3vw] text-center font-manrope font-semibold">
					WE ARE FLIPPO.
				</h1>
				<h1 className="text-[12vw] -my-[3vw] text-center font-manrope font-semibold">
					WE ARE FLIPPO.
				</h1>
				<h1 className="text-[12vw] -my-[3vw] text-center font-manrope font-semibold">
					WE ARE FLIPPO.
				</h1>
			</div>
		</div>
	);
};

export default Marquee;
