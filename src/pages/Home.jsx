import { BestSelling, BrowseCategory, FlashSales, NewArrival } from ".."
import { Services } from ".."

const Home = () => {
  return (
    <>
      <FlashSales />
      <BrowseCategory />
      <BestSelling />
      <NewArrival />
      <Services />
    </>
  )
}

export default Home