import { BestSelling, BrowseCategory, FlashSales, NewArrival } from ".."
import { Services } from ".."

const Home = () => {
  return (
    <>
      <FlashSales />
      <BestSelling />
      <BrowseCategory />
      <NewArrival />
      <Services />
    </>
  )
}

export default Home