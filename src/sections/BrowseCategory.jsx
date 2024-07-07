import { Section, SectionHeading, SectionTitle } from ".."
import { categories } from "../constant"

const BrowseCategory = () => {
  const half_length = categories.length / 2;

  return (
    <Section>
      <SectionTitle title='Categories' />
      <SectionHeading carousel={true} heading='Browse By Category' />
      <div className="flex max-lg:flex-col gap-5 lg:gap-10 *:w-full">
        <div className="flex max-sm:flex-col gap-5 lg:gap-10">
          {categories.map((category, index) => (
            index < half_length && <div className="grid cursor-pointer hover:border-0 hover:shadow-md hover:bg-red-400 hover:text-white justify-items-center p-6 gap-4 border border-black/30 border-radius w-full" key={category.name}>
              <img className="hover:fill-white" src={category.img} alt={category.img.split('/').pop().replace('.svg', '')} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
        <div className="flex max-sm:flex-col gap-5 lg:gap-10">
          {categories.map((category, index) => (
            index >= half_length && <div className="grid cursor-pointer hover:border-0 hover:shadow-md hover:bg-red-400 hover:text-white justify-items-center p-6 gap-4 border border-black/30 border-radius w-full" key={category.name}>
              <img src={category.img} alt={category.img.split('/').pop().replace('.svg', '')} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default BrowseCategory