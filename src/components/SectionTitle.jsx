import { BtnSecondary } from "./Buttons"

const SectionTitle = ({title, btnName}) => {
  return (
    <div className="flex justify-between pb-4 items-center">
      <div className="flex gap-4 items-center">
        <span className="min-w-5 min-h-10 bg-red-400 border-radius"></span>
        <p className=" text-red-400 font-semibold">{title}</p>
      </div>
      {btnName && <BtnSecondary name={btnName} />}
    </div>
  )
}

export default SectionTitle