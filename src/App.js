import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Homepage from "./components/homepage/Homepage";
import ImageSlider from "./components/imageSlider/ImageSlider";
import FreeContent from "./components/freeContent/FreeContent";
import TheCohort from "./components/theCohort/TheCohort";
import About from "./components/about/About";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";

function App() {
	const [logIn, setLogIn] = useState(false);

	return (
		<Router>
			<div className="App">
				<Navbar logIn={logIn} />
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Homepage />
								<ImageSlider />
								<About />
								<Contact />
							</>
						}
					/>
					<Route path="/freeContent" element={<FreeContent />} />
					<Route path="/theCohort" element={<TheCohort />} />
					<Route path="/signIn" element={<SignIn />} />
					<Route path="/signUp" element={<SignUp />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
