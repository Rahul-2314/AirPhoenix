import React,{useEffect} from "react";
import Slider from "react-slick";
import "./imageSlider.css"; // Ensure your CSS imports are here as well
import img1 from "../../assets/image_slider/image1.jpg";
import img2 from "../../assets/image_slider/image2.jpg";
import img3 from "../../assets/image_slider/image3.jpg";
import img4 from "../../assets/image_slider/image4.jpg";
import img5 from "../../assets/image_slider/image5.jpg";
import img6 from "../../assets/image_slider/image6.jpg";
import img7 from "../../assets/image_slider/image7.jpg";
import img8 from "../../assets/image_slider/image8.jpg";
import img9 from "../../assets/image_slider/image9.jpg";
import arrow from "../../assets/arrow.svg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function ImageSlider() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};

	return (
		<>
			<div className="heading_imageSlider">
				<h5>Our's</h5>
				<h2>Key Colaborators</h2>
			</div>
			<div className="image-slider-container">
				<div className="text-section">
					<p className="main">
						🌸We are proud to collaborate with esteemed partners across various
						industries, including technology, healthcare, and education. Their
						expertise and support are vital to our mission, helping us achieve
						outstanding results and drive meaningful impact.
					</p>
					<p className="child">Our Key Collaborators are .....</p>
				</div>
				<div className="arrow-section">
					<img src={arrow} alt="arrow" className="arrow" />
				</div>
				<div className="image-slider">
					<div className="partial-image-slider">
						<Slider {...settings}>
							{images.map((image, index) => (
								<div key={index}>
									<img src={image} alt={`Slide ${index + 1}`} />
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</>
	);
}
