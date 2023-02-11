import React from 'react';
import './style.css';
const SkillsBox = () => {
	const Skills = {
		WebSkills: [
			'HTML-CSS',
			'JavaScript',
			'React JS',
			'Context-api',
			'React-Router-Dom',
			'Next.js',
			'Framer Motion',
			'Tailwind CSS',
			'Supabase',
			'GIT and GitHub',
		],
		Extras: ['Linux', 'Lightroom', 'VScode', 'Stack Overflow', 'Figma'],
	};

	return (
		<>
			<div className="skills-wrap">
				<div className="skills-colomn-wrap">
					<h3>Frontend Development</h3>
					<ul>
						{Skills.WebSkills.map((skill, index) => {
							return <li key={index}>{skill}</li>;
						})}
					</ul>
				</div>

				<div className="skills-colomn-wrap">
					<h3>Extras</h3>
					<ul>
						{Skills.Extras.map((skill, index) => {
							return <li key={index}>{skill}</li>;
						})}
					</ul>
				</div>
			</div>
		</>
	);
};

export default SkillsBox;
