import { products } from "../constant"
import { Card, Section, SectionHeading, SectionTitle } from ".."

const BestSelling = () => {
  const bestProds = products.filter(product => product.section === 'bestProduct');

  return (
    <Section>
      <SectionTitle title='This Month' />
      <SectionHeading to="/products" btnName='View All' heading='Best Selling Products' />
      <div className="flex gap-7 justify-between">
        {bestProds.map((product, index) => <Card key={index} {...product} />)}
      </div>
    </Section>
  )
}

export default BestSelling