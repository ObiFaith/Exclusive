import { Breadcrumb, BrowseCategory, NewArrival } from ".."
import { Services } from ".."

const Home = () => {
  return (
    <>
      {/* <Breadcrumb parent='Home' page='NotFound' /> */}
      <BrowseCategory />
      <NewArrival />
      <Services />
    </>
  )
}

export default Home