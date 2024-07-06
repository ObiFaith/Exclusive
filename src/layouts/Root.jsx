import { Outlet } from "react-router-dom"
import { Header, Footer } from ".."

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Root