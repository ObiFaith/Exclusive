import { filled, half_filled, not_filled } from '../assets';

const Rating = ({ rating }) => {
	const remainder = rating % 1;
	const filledCount = Math.floor(rating);

	return (
		<div className='flex *:w-4'>
			{[...Array(5)].map((_, i) =>
				filledCount > i ? (
					<img key={i} src={filled} alt="filled" />
				) : filledCount === i && remainder ? (
					<img key={i} src={half_filled} alt="half_filled" />
				) : (
					<img key={i} src={not_filled} alt="not_filled" />
				)
			)}
		</div>
	);
};

export default Rating;
