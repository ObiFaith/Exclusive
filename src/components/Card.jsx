import { Btn } from "./Buttons"
import { preview, heart_small } from "../assets"
import { Rating } from ".."

const Card = ({btn = false, name, img, price, newPrice, rating, ratingNo, discount, status, color }) => {
  return (
    <div className="border-radius">
      <div className="" style={{background: `url(${img}) no-repeat center/cover`}}>
        <div className="flex">
          {discount && <span className="btn btn-primary">{discount}</span>}
					{(!discount && status) && <span className="btn btn-accent">{discount}</span>}
          <div className="flex flex-col gap-2">
            <div className="bg-white p-2 rounded-full"><img src={heart_small} alt="heart_small" /></div>
            <div className="bg-white p-2 rounded-full"><img src={preview} alt="preview" /></div>
          </div>
        </div>
        {btn && <div className="font-medium text-white bg-black">Add To Cart</div>}
      </div>
      <div className="*:font-medium">
        <p>{name}</p>
        <div className="flex gap-3">
          <span className="text-red-400">$ {newPrice ? newPrice : price}</span>
          {newPrice && <span className="text-dark-400 line-through">$ {price}</span>}
        </div>
        <div className="">
          <Rating rating={rating} />
          <h4 className="text-dark-400 txt-sm">({ratingNo})</h4>
        </div>
      </div>
    </div>
  )
}

export default Card