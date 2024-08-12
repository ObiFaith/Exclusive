import { products } from "../constant"
import { Btn, Card, Section, SectionHeading, SectionTitle } from ".."

const FlashSales = () => {
  const salesProds = products.filter(product => product.section === 'flashSales')

  return (
    <Section className='overflow-hidden pr-0 mr-0'>
      <div className="container pl-0 ml-0">
        <SectionTitle title='Today’s' />
        <SectionHeading carousel={true} heading='Flash Sales' />
      </div>
      <div className="flex gap-7 *:min-w-[270px]">
        {salesProds.map((product, index) => <Card key={index} {...product} />)}
      </div>
      <div className="text-center pt-[60px] pb-5"><Btn to='/products' name='View All Products' /></div>
    </Section>
  )
}

export default FlashSales