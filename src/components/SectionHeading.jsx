import { arrow_left, arrow_right } from '../assets';
import { BtnPrimary } from './Buttons';

const SectionHeading = ({ heading, btnName = '', carousel = false }) => {
	return (
		<div className="flex justify-between items-center pb-8">
			<h1 className="text-xl md:text-2xl lg:text-3xl">{heading}</h1>
			{btnName && <BtnPrimary name={btnName} />}
			{carousel && (
				<div className="flex gap-2">
					<div className="bg-secondary p-2.5 lg:p-4 rounded-full">
						<img src={arrow_left} alt="arrow_left" />
					</div>
					<div className="bg-secondary p-2.5 lg:p-4 rounded-full">
						<img src={arrow_right} alt="arrow_right" />
					</div>
				</div>
			)}
		</div>
	);
};

export default SectionHeading;
