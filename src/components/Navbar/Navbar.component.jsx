import React from 'react';

const Navbar = () => {
	return (
		<div className="fixed z-[999] w-full px-20 py-8 flex justify-between items-center">
			<div className="logo font-manrope font-bold text-3xl">FliPPo.</div>
			<div className="links flex gap-14 font-inter align-middle">
				{['Services', 'Our Work', 'About Us', 'Insights'].map(
					(items, ind) => (
						<a
							key={ind}
							href="#"
							className={`text-md font-semibold `}
						>
							{items}
						</a>
					)
				)}
			</div>
			<div className="capitalize text-lg font-medium px-6 py-3 border-2 border-zinc-600 rounded-full cursor-pointer">
				contact Us
			</div>
		</div>
	);
};

export default Navbar;
