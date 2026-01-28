import { useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import CartPage from "./pages/CartPage"

export default function App() {
  const [cart, setCart] = useState([])
  const [page, setPage] = useState("home") // home | cart

  function addToCart(product) {
    setCart((prev) => [...prev, product])
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <>
      <Navbar
        cartCount={cart.length}
        goHome={() => setPage("home")}
        goCart={() => setPage("cart")}
      />

      {page === "home" && <Home addToCart={addToCart} />}
      {page === "cart" && (
        <CartPage cart={cart} removeFromCart={removeFromCart} />
      )}
    </>
  )
}
