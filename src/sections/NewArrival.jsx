import { Link } from "react-router-dom"
import { Section, SectionHeading, SectionTitle } from ".."
import { newArrival } from "../constant"

export const Arrival = ({arrival, className}) => {
  return <div className={className} style={{background: `#000 url(${arrival.img}) no-repeat right center/contain`}}>
    <div className="h-full grid lg:pt-3 p-6 bg-black/20">
      <div className="self-end">
        <h4 className="text-xl lg:text-2xl">{arrival.title}</h4>
        <p className="text-sm pb-4 text-balance">{arrival.text}</p>
        <Link className='underline underline-offset-4 font-medium' to=''>Shop Now</Link>
      </div>
    </div>
  </div>
}

const NewArrival = () => {
  const [one, two, three, four] = newArrival

  return (
    <Section>
      <SectionTitle title='Featured' />
      <SectionHeading heading='New Arrival' />
      <div className="grid lg:min-h-[600px] *:min-h-[300px] lg:grid-cols-2 grid-rows-2 gap-7 lg:gap-y-0 *:w-full text-white-200">
        <Arrival arrival={one} className='row-span-2' />
        <div className="grid gap-y-8 row-span-2 max-lg:*:min-h-[300px]">
          <Arrival arrival={two} className='col-span-2' />
          <div className="grid col-span-2 md:grid-cols-2 gap-7 lg:gap-y-0 max-lg:*:min-h-[300px]">
            <Arrival arrival={three}/>
            <Arrival arrival={four}/>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default NewArrival