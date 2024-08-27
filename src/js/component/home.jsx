import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";

const logo = {title: "Start Bootstrap", url:"/#"}
const boton = {title: "Call to action!", url:"/#"}
//create your first component
const Home = () => {
	return (
		<>
		<Navbar logo= {logo}/>
		<Jumbotron boton= {boton}/>
		</>

	);
};



export default Home;



