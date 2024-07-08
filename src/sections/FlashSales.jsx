import { Card, Section, SectionHeading, SectionTitle } from ".."
import { products } from "../constant"

const FlashSales = () => {
  const salesProds = products.filter(product => product.section === 'flashSales')
  return (
    <Section className='overflow-hidden'>
      <SectionTitle title='Today’s' />
      <SectionHeading carousel={true} heading='Flash Sales' />
      <div className="">
        {salesProds.map((product, index) => <Card key={index} {...product} />)}
      </div>
    </Section>
  )
}

export default FlashSales