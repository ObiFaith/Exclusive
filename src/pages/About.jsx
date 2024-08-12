import { about_img } from '../assets';
import { aboutInfo } from '../constant';
import { Breadcrumb, Services, Teams } from '..';

const About = () => {
	return (
		<div className="container">
			<Breadcrumb parent="Home" page="About" />
			<div className="grid lg:grid-cols-2 gap-9 items-center">
				<div className="max-md:text-center">
					<h1 className="text-4xl md:pt-8 max-md:pt-16 pb-8">
						Our Story
					</h1>
					<div className="grid gap-6 text-balance">
						<p>
							Launced in 2015, Exclusive is South Asia’s premier
							online shopping makterplace with an active presense
							in Bangladesh. Supported by wide range of tailored
							marketing, data and service solutions, Exclusive has
							10,500 sallers and 300 brands and serves 3 millioons
							customers across the region.
						</p>
						<p>
							Exclusive has more than 1 Million products to offer,
							growing at a very fast. Exclusive offers a diverse
							assotment in categories ranging from consumer.
						</p>
					</div>
				</div>
				<div>
					<img src={about_img} alt="about img" />
				</div>
			</div>
			<div
				className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-[140px] *:py-9 *:border *:border-radius md:gap-6 gap-4 lg:gap-10 justify-center items-center`}
			>
				{aboutInfo.map((info, index) => (
					<div
						key={index}
						className={`text-center ${
							index === 1
								? 'bg-red-400 border-red-400 text-white'
								: ' border-black/30 hover:shadow-md hover:border-white'
						}`}
					>
						<div
							className={`${
								index === 1 ? 'bg-red-200' : 'bg-dark-200'
							} inline-block p-2.5 rounded-full mb-3 lg:mb-6`}
						>
							<div
								className={`${
									index === 1 ? 'bg-white' : 'bg-black'
								} p-1.5 rounded-full `}
							>
								<img
									src={info.icon}
									alt={
										info.icon
											.split('/')
											.pop()
											.replace('.svg', '') + ' icon'
									}
								/>
							</div>
						</div>
						<h2 className="text-base lg:text-lg">{info.title}</h2>
						<p className="text-sm">{info.text}</p>
					</div>
				))}
			</div>
      <Teams />
			<div className="pt-40">
				<Services />
			</div>
		</div>
	);
};

export default About;
