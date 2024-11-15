import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./page/Home/Home"
import Cart from "./page/cart/Cart"
import PlaceOrder from "./page/placeorder/PlaceOrder"
import Footer from "./Components/Footer/Footer"
import LoginPopUp from "./Components/Loginpopup/LoginPopUp"
import { useState } from "react"

function App() {
  const [showlogin, setShowlogin] = useState(false)
  return (
    <>
      {
        showlogin ? <LoginPopUp setShowlogin={setShowlogin} /> : <></>
      }
      <div className="app">
        <Navbar setShowlogin={setShowlogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
