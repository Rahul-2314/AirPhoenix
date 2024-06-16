import React, { useEffect } from "react";
import IMG1 from "../../assets/free_content/saas.jpg";
import IMG2 from "../../assets/free_content/micro_eCommerce.jpg";
import IMG3 from "../../assets/free_content/ML_course.jpeg";
import IMG4 from "../../assets/free_content/MLops.jpg";
import IMG5 from "../../assets/free_content/bloackchain.jpg";
import IMG6 from "../../assets/free_content/ethereum.jpg";
import IMG7 from "../../assets/free_content/ethereum_react.jpg";
import IMG8 from "../../assets/free_content/web3.jpg";
import "./freeContent.css";

const FreeContent = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const freeContent = [
		{
			id: 1,
			title: "SaaS Foundation Course",
			img: IMG1,
			description:
				"Learn the foundational principles of building Software as a Service (SaaS) applications.",
			technologies: "HTML | CSS | JavaScript | Webpack",
			link: ".",
			notes: "",
		},
		{
			id: 2,
			title: "micro-Ecommerce Course",
			img: IMG2,
			description:
				"Learn to build a micro-ecommerce platform with advanced React and Redux techniques.",
			technologies: "React | Redux",
			link: ".",
			notes: "",
		},
		{
			id: 3,
			title: "Machine Learning Course",
			img: IMG3,
			description:
				"Explore advanced machine learning concepts through practical projects.",
			technologies: "Python | Machine Learning",
			link: ".",
			notes: "",
		},
		{
			id: 4,
			title: "Advace MLops Course",
			img: IMG4,
			description:
				"Learn advanced techniques in MLops with practical projects and real-time deployment strategies.",
			technologies: "Python | Flask | HTML | CSS | JavaScript",
			link: ".",
			notes: "",
		},
		{
			id: 5,
			title: "Blockchain Devops Course",
			img: IMG5,
			description:
				"Learn blockchain development principles through practical projects.",
			technologies: "Blockchain | DevOps",
			link: ".",
			notes: "",
		},
		{
			id: 6,
			title: "Ethereum Expert Course",
			img: IMG6,
			description:
				"Become an Ethereum expert through hands-on projects and machine learning predictions.",
			technologies: "JS | Ethereum | Smart Contract",
			link: ".",
			notes: "",
		},
		{
			id: 7,
			title: "Ethereum+React Course",
			img: IMG7,
			description:
				"Learn Ethereum and React integration to predict placement chances using machine learning models.",
			technologies: "Ethereum | React | JS",
			link: ".",
			notes: "",
		},
		{
			id: 8,
			title: "Complete Web3 Course",
			img: IMG8,
			description: "Master Web3 development and smart contract programming.",
			technologies: "Solidity | Ethereum | Web3.js",
			link: ".",
			notes: "",
		},
	];

	return (
		<section id="free_content">
			<h5>Check out</h5>
			<h2>Our Most Popular Essays From The AirPhoenix!</h2>

			<div className="container free_content__container">
				{freeContent.map((pro) => (
					<article className="free_content__item" key={pro.id}>
						<div className="free_content__item-image">
							<img src={pro.img} alt={pro.title} />
						</div>
						<div className="free_content__item-content">
							<h3>{pro.title}</h3>
							<p>{pro.description}</p>
							<p>{pro.technologies}</p>
						</div>
						<div className="free_content__item-cta">
							<a
								href={""}
								// target="_blank"
								className="btn"
								rel="noreferrer"
							>
								Notes
							</a>
							{pro.link && (
								<a
									href={""}
									// target="_blank"
									className="btn btn-primary"
									rel="noreferrer"
								>
									View Course
								</a>
							)}
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default FreeContent;
