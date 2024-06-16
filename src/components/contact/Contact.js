import React, { useRef, useState ,useEffect} from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import "./contact.css";

const Contact = () => {
	const [message, setMessage] = useState(false);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const formRef = useRef();
	const handleSubmit = (e) => {
		e.preventDefault();
		setMessage(true);
		emailjs
			.sendForm("Service_ID", "Template_ID", formRef.current, "Public_API_Key")
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

		e.target.reset();
	};
	return (
		<section id="contact">
			<h5 className="start_contact">Get In Touch</h5>
			<h2>Contact Us</h2>
			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineEmail className="contact__option-icon" />
						<h4>Email</h4>
						<h5>abc@gmail.com</h5>
						<a href="mailto: abc@gmail.com">Send a message</a>
					</article>
				</div>
				<form ref={formRef} onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Your Full Name"
						name="user_name"
						required
					/>
					<input
						type="text"
						placeholder="Your Email"
						name="user_email"
						required
					/>
					<textarea
						placeholder="Your message"
						rows="7"
						name="message"
						required
					></textarea>
					<button type="submit" className="btn btn-primary">
						Send Message
					</button>
					{message && <span>Thanks, We'll Reply ASAP :)</span>}
				</form>
			</div>
		</section>
	);
};

export default Contact;
