import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import './style.css';

const Socials = ({ text, dimenssion, fontSize, to }) => {
	const [hover, setHover] = useState(false);
	return (
		<>
			<li
				className="one-social-wrap"
				onMouseOver={() => setHover(true)}
				onMouseLeave={() => setHover()}>
				<Icon
					icon={`arcticons:${text}`}
					style={{
						width: dimenssion,
						height: dimenssion,
						transform: hover ? 'rotate(-10deg)' : '',
					}}
				/>
				<a href={to} target="_blank" className="socials-name" rel="noreferrer">
					<p style={{ fontSize: fontSize }}>{text}</p>
				</a>
			</li>
		</>
	);
};

const SocialConnect = ({ dim, size }) => {
	return (
		<>
			<ul className="socials-wrap">
				<Socials
					text="instagram"
					to="https://www.instagram.com/frontendbagna/"
					dimenssion={dim}
					fontSize={size}
				/>
				<Socials
					text="linkedin"
					to="https://www.linkedin.com/in/bagna-farouk-omar-947752104/"
					dimenssion={dim}
					fontSize={size}
				/>
				<Socials
					text="github"
					to="https://github.com/omarbagna"
					dimenssion={dim}
					fontSize={size}
				/>
			</ul>
		</>
	);
};

export default SocialConnect;
