import React from "react";
//import Jumbo from "./Jumbotron";
//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";
import Jumbo from "./Jumbotron.jsx";
import Card from "./CardsFeed.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
//create your first component
const Home = () => {
	return (
		<div className="mt-5">
			<Navbar />
			<div className="my-5"></div>
			<Jumbo />
			<Card />
			<Footer />
		</div>
	);
};
export default Home;
