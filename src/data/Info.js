import React from 'react';
import { Link } from 'react-router-dom';

export const IntroInfo = () => {
	return (
		<>
			<p>
				I am a frontend developer with over 3 years of experience. I mainly develop web applications with React JS. Two things I can't live without Coffee and
				Coding <br />
				"I write code, love code, live code."
			</p>
		</>
	);
};
export const AboutInfo = () => {
	const style = {
		textDecoration: 'underline',
		fontWeight: '800',
		color: 'rgb(255, 245, 232)',
	};
	return (
		<>
			<p>
				I am a smart, focused and driven individual with experience in frontend
				development.
				<br />
				<br />
				I am eager to design and develop user friendly responsive websites for
				clients to help boost their online presence and generate relevant
				traffic.
				<br />
				<br />I love exploring different kinds of fields and I do some photo
				editing in Lightroom.
				<br />
				<br />
				At last, Feel free to{' '}
				<Link to="/contact" style={style}>
					Contact ME.
				</Link>{' '}
				We can listen to good music together 🎧.
			</p>
		</>
	);
};
