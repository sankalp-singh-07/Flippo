import React, { useEffect, useState } from 'react';

const Eyes = () => {
	const [angle, setAngle] = useState(0);

	useEffect(() => {
		window.addEventListener('mousemove', (e) => {
			let mX = e.clientX;
			let mY = e.clientY;

			let x = mX - window.innerWidth / 2;
			let y = mY - window.innerHeight / 2;

			var ang = Math.atan2(y, x) * (180 / Math.PI);
			setAngle(ang - 180);
		});
	});

	return (
		<div className="w-full h-screen overflow-hidden">
			<div className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
				<div className="absolute top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%] flex gap-10">
					<div className="flex justify-center items-center w-[15vw] h-[15vw] bg-zinc-50 rounded-full">
						<div className="relative w-2/3 h-2/3 rounded-full bg-zinc-950">
							<div
								style={{
									transform: `translate(-50%, -50%) rotate(${angle}deg)`,
								}}
								className="w-full h-1/6 flex items-center absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
							>
								<div className="w-1/6 h-full bg-zinc-50 rounded-full"></div>
							</div>
						</div>
					</div>
					<div className="flex justify-center items-center w-[15vw] h-[15vw] bg-zinc-50 rounded-full">
						<div className="relative w-2/3 h-2/3 rounded-full bg-zinc-950">
							<div
								style={{
									transform: `translate(-50%, -50%) rotate(${angle}deg)`,
								}}
								className="w-full h-1/6 flex items-center  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
							>
								<div className="w-1/6 h-full bg-zinc-50 rounded-full"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Eyes;
