import React from 'react';

const Cards = () => {
	return (
		<div className="w-full h-screen bg-[#cec8c0] flex gap-7 items-center px-20">
			<div className="w-1/2 h-[50vh]">
				<div className="relative w-full rounded-xl h-full bg-[#356552]">
					<button className="absolute px-5 py-3 left-10 bottom-10 border-2 rounded-full border-[#cec8c0]">
						Since 1995
					</button>
				</div>
			</div>
			<div className="w-1/2 h-[50vh] flex gap-7">
				<div className="w-1/2 rounded-xl h-full relative bg-zinc-800">
					<button className="absolute px-5 py-3 left-10 bottom-10 border-2 rounded-full border-[#cec8c0]">
						Since 1995
					</button>
				</div>
				<div className="w-1/2 rounded-xl h-full bg-zinc-800">
					<div className="w-1/2 rounded-xl h-full relative bg-zinc-800">
						<button className="absolute px-5 py-3 left-10 bottom-10 border-2 rounded-full border-[#cec8c0]">
							Since 1995
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
