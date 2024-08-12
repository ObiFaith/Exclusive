import { Rating } from ".."
import { preview, heart_small } from "../assets"

const Card = ({btn = false, name, img, price, newPrice, rating, ratingNo, discount, status, color }) => {
  return (
    <div className="border-radius grid gap-4">
      <div className="p-3 shadow-sm min-h-[250px]" style={{background: `#F5F5F5 url(${img}) no-repeat center`}}>
        <div className="flex items-start">
          {discount > 0 && <span className="px-3 py-1 btn-primary border-radius">-{discount}%</span>}
					{(!discount && status) && <span className="btn btn-accent">{discount}</span>}
          <div className="flex flex-col ms-auto items-center gap-2">
            <div className="bg-white p-1 rounded-full"><img src={heart_small} alt="heart_small" /></div>
            <div className="bg-white px-1 py-2 rounded-full"><img src={preview} alt="preview" /></div>
          </div>
        </div>
        {btn && <div className="font-medium text-white bg-black">Add To Cart</div>}
      </div>
      <div className="*:font-medium grid gap-1">
        <p>{name}</p>
        <div className="flex gap-3">
          <span className="text-red-400">${price}</span>
          {newPrice && <span className="text-dark-200 line-through">${newPrice}</span>}
        </div>
        <div className="flex gap-2">
          <Rating rating={rating} />
          <h4 className="text-dark-200 txt-sm">({ratingNo})</h4>
        </div>
      </div>
    </div>
  )
}

export default Card