import { Section } from '..';
import { servicesInfo } from '../constant';

export const Service = ({ icon, title, text }) => {
	return (
		<div className="text-center">
			<div className="bg-dark-200 inline-block p-2.5 rounded-full mb-3 lg:mb-6">
				<div className="bg-black p-1.5 rounded-full">
					<img
						src={icon}
						alt={
							icon.split('/').pop().replace('.svg', '') + ' icon'
						}
					/>
				</div>
			</div>
			<h2 className="text-base lg:text-lg">{title}</h2>
			<p className="text-sm">{text}</p>
		</div>
	);
};

const Services = () => {
	return (
		<Section
			lastSection={true}
			className="flex max-md:flex-col max-md:gap-6 gap-10 lg:gap-20 justify-center items-center"
		>
			{servicesInfo.map(service => (
				<Service
					key={service.title}
					title={service.title}
					icon={service.img}
					text={service.text}
				/>
			))}
		</Section>
	);
};

export default Services;
