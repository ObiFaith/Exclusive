import { products } from '../constant';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { Btn, Card, Section, SectionHeading, SectionTitle } from '..';

const FlashSales = () => {
	const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
	const salesProds = products.filter(
		product => product.section === 'flashSales'
	);

	return (
		<Section className="embla pr-0 mr-0">
			<div className="container pl-0 ml-0">
				<SectionTitle title="Today's" />
				<SectionHeading carousel={true} heading="Flash Sales" />
			</div>
			<div ref={emblaRef} className="embla__viewport">
				<div className="embla__container gap-7 *:embla__slide *:min-w-[270px]">
					{salesProds.map((product, index) => (
						<Card key={index} {...product} />
					))}
				</div>
			</div>
			<div className="text-center pt-[60px] pb-5">
				<Btn to="/products" name="View All Products" />
			</div>
		</Section>
	);
};

export default FlashSales;
