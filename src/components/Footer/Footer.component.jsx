import React from 'react';

const Footer = () => {
	return (
		<div className="w-full flex h-screen bg-[#356552] text-[#cec8c0] p-20">
			<div className="w-1/2 flex flex-col h-full justify-between">
				<div>
					<h1 className="text-7xl font-bold font-manrope">EYE-</h1>
					<h1 className="text-7xl font-bold font-manrope">OPENING</h1>
				</div>
				<div className="text-xl font-semibold font-inter">FliPPo.</div>
			</div>
			<div className="w-1/2">
				<div className="flex gap-10">
					<h1 className="uppercase text-7xl font-bold font-manrope">
						presentations
					</h1>
				</div>
				<div className="w-full pt-9">
					<h1 className="uppercase text-xl font-semibold pt-3 font-manrope mb-2">
						Social Links:
					</h1>
					{['Facebook', 'Instagram', 'Twitter'].map((text, ind) => {
						return (
							<div
								key={ind}
								className="uppercase text-base font-medium font-manrope mb-2 underline"
							>
								{text}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Footer;
