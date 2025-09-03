import plane1 from "./../assets/planes/plane1.png";
import plane2 from "./../assets/planes/plane2.png";
import plane3 from "./../assets/planes/plane3.png";
import plane4 from "./../assets/planes/plane4.png";
import plane5 from "./../assets/planes/plane5.png";
import plane6 from "./../assets/planes/plane6.png";
import plane7 from "./../assets/planes/plane7.png";
import plane8 from "./../assets/planes/plane8.png";
import plane9 from "./../assets/planes/plane9.png";
import plane10 from "./../assets/planes/plane10.jpeg";
import plane11 from "./../assets/planes/plane11.jpeg";
import plane12 from "./../assets/planes/plane12.jpeg";
import plane13 from "./../assets/planes/plane13.jpeg";
import plane14 from "./../assets/planes/plane14.jpeg";
import plane15 from "./../assets/planes/plane15.jpeg";

function selectPlane() {
	const planeNum = Math.floor(Math.random() * 15) + 1;

	switch (planeNum) {
		case 1:
			return plane1;
		case 2:
			return plane2;
		case 3:
			return plane3;
		case 4:
			return plane4;
		case 5:
			return plane5;
		case 6:
			return plane6;
		case 7:
			return plane7;
		case 8:
			return plane8;
		case 9:
			return plane9;
		case 10:
			return plane10;
		case 11:
			return plane11;
		case 12:
			return plane12;
		case 13:
			return plane13;
		case 14:
			return plane14;
		case 15:
			return plane15;
		default:
			return plane1;
	}
}

function Flying() {
	return (
		<div
			className="hero min-h-screen"
			style={{
				backgroundImage: `url(${selectPlane()})`,
			}}
		>
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="hero-content text-center text-neutral-content">
				<div className="max-w-lg">
					<h1 className="text-7xl mb-5 new-york" style={{ fontWeight: 900 }}>
						✈️ I Fly Planes
					</h1>
				</div>
			</div>
		</div>
	);
}

export default Flying;
