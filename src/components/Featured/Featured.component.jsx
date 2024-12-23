import React from 'react';

const Featured = () => {
	return (
		<div className="w-full py-20 bg-[#356552]">
			<div className="w-full px-14 pb-16 border-b-[1px] border-[#afa9a2]">
				<h1 className="text-[#cec8c0] text-5xl font-manrope font-semibold tracking-tight">
					Featured products
				</h1>
			</div>
			<div className=" w-full px-16 mt-10 flex gap-12">
				<div className="relative w-1/2 h-[80vh] bg-red-400 rounded-xl">
					<h1 className="text-5xl font-manrope font-semibold tracking-tight absolute left-full -translate-x-[50%] top-1/2 -translate-y-[50%] z-10">
						{'FYDE'.split().map((letter, index) => (
							<span>{letter}</span>
						))}
					</h1>
					<div className="w-full h-full overflow-hidden rounded-xl">
						<img
							className="w-full h-full bg-cover"
							src="https://ochi.design/wp-content/uploads/2022/05/10-663x550.png"
						/>
					</div>
				</div>
				<div className="relative w-1/2 h-[80vh] bg-red-400 rounded-xl">
					<h1 className="text-5xl font-manrope font-semibold tracking-tight absolute right-full translate-x-[50%] top-1/2 -translate-y-[50%] z-10">
						{'VISE'.split().map((letter, index) => (
							<span>{letter}</span>
						))}
					</h1>
					<div className="w-full h-full overflow-hidden rounded-xl">
						<img
							className="w-full h-full bg-cover"
							src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x550.png"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
