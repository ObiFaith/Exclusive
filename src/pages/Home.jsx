import { BrowseCategory, FlashSales, NewArrival } from ".."
import { Services } from ".."

const Home = () => {
  return (
    <>
      <FlashSales />
      <BrowseCategory />
      <NewArrival />
      <Services />
    </>
  )
}

export default Home