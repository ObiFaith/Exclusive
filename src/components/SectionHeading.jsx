import { Btn } from './Buttons';
import { useCallback, useEffect } from 'react';
import { arrow_left, arrow_right } from '../assets';
import useEmblaCarousel from 'embla-carousel-react';

const SectionHeading = ({
	heading,
	btnName = '',
	carousel = false,
	to = '',
}) => {
	const [emblaRef, emblaApi] = useEmblaCarousel();

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	// Prevent the carousel from initializing when there's no need for it
	useEffect(() => {
		if (!carousel) {
			emblaApi?.destroy();
		}
	}, [carousel, emblaApi]);

	return (
		<div className="flex justify-between items-center pb-8">
			<h1 className="text-xl md:text-2xl lg:text-3xl">{heading}</h1>
			{btnName && <Btn to={to} name={btnName} />}
			{carousel && (
				<div ref={emblaRef} className="flex gap-2 cursor-pointer">
					<button
						onClick={scrollPrev}
						className="embla__prev bg-secondary p-2.5 lg:p-4 rounded-full"
					>
						<img src={arrow_left} alt="arrow_left" />
					</button>
					<button
						onClick={scrollNext}
						className="embla__next bg-secondary p-2.5 lg:p-4 rounded-full"
					>
						<img src={arrow_right} alt="arrow_right" />
					</button>
				</div>
			)}
		</div>
	);
};

export default SectionHeading;
