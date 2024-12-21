import React from 'react';

const Marquee = () => {
	return (
		<div className="w-full py-12 bg-[#d4a373] rounded-tl-3xl rounded-tr-3xl ">
			<div className="border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden gap-6">
				<h1 className="text-[12vw] -my-10 text-center font-manrope font-semibold">
					WE ARE FLIPPO.
				</h1>
				<h1 className="text-[12vw] -my-10 text-center font-manrope font-semibold">
					WE ARE FLIPPO.
				</h1>
				<h1 className="text-[12vw] -my-10 text-center font-manrope font-semibold">
					WE ARE FLIPPO.
				</h1>
			</div>
		</div>
	);
};

export default Marquee;
