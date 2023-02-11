import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
const ContactEmail = () => {
	return (
		<>
			<div className="contact-wrap">
				<div className="mail-text-wrap">
					<p>
						Feel free to reach out if you wanna collaborate with me, or simply
						have a chat
					</p>
				</div>
				<div className="mail-wrap">
					<button className="contact-mail">
						<Link to="/contact">bagna27@outlook.com</Link>
					</button>
				</div>
			</div>
		</>
	);
};

export default ContactEmail;
