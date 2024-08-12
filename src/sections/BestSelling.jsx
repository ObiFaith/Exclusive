import { products } from "../constant"
import { Card, Section, SectionHeading, SectionTitle } from ".."

const BestSelling = () => {
  const bestProds = products.filter(product => product.section === 'bestProduct');

  return (
    <Section>
      <SectionTitle title='This Month' />
      <SectionHeading to="/products" btnName='View All' heading='Best Selling Products' />
      <div className="grid max-sm:grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-7">
        {bestProds.map((product, index) => <Card key={index} {...product} />)}
      </div>
    </Section>
  )
}

export default BestSelling