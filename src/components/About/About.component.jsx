import React from 'react';

const About = () => {
	return (
		<div className="w-full h-[125vh] bg-[#cec8c0]">
			<div className=" w-full h-[125vh] bg-[#356552] text-[#cec8c0] rounded-tl-3xl rounded-tr-3xl">
				<h1 className="w-[80vw] text-[3vw] leading-[3.5vw] font-inter p-10">
					Ochi is a strategic presentation agency for forward-thinking
					businesses that need to raise funds, sell products, explain
					complex ideas, and hire great people.
				</h1>
				<div className="w-full flex gap-10 mt-12 border-t-2 border-[#cec8c0]">
					<div className="w-1/2 py-10 px-16">
						<h1 className="text-zinc-900 text-5xl pb-8">
							Our approach:
						</h1>
						<button className="flex gap-10 items-center uppercase bg-zinc-900 py-4 px-9 rounded-full">
							Read more
							<div className="w-2 h-2 bg-[#cec8c0] rounded-full"></div>
						</button>
					</div>
					<div className="w-1/2 my-12 rounded-2xl mx-16 h-[60vh] bg-[#214235]"></div>
				</div>
			</div>
		</div>
	);
};

export default About;
