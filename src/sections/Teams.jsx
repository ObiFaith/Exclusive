import { teamIcons } from '../assets';
import { teams } from '../constant';

export const Team = ({ imgSrc, name, position }) => {
	return (
		<div className="grid gap-6">
			<div>
				<img
					className="mx-auto object-cover"
					src={imgSrc}
					alt={imgSrc.split('/').pop().replace('.png', '')}
				/>
			</div>
			<div className="grid gap-4">
				<div className="grid gap-2">
					<h2>{name}</h2>
					<p>{position}</p>
				</div>
				<div className="flex items-center gap-4">
					{teamIcons.map(icon => (
						<img
							key={icon}
							src={icon}
							alt={icon.split('/').pop().replace('.svg', '')}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

const Teams = () => {
	return (
		<div className="grid md:grid-cols-3 gap-8 items-end pt-[140px]">
			{teams.map(person => (
				<Team key={person.name} {...person} />
			))}
		</div>
	);
};

export default Teams;
