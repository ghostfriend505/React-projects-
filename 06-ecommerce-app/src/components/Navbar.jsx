export default function Navbar({ cartCount, goHome, goCart }) {
  return (
    <nav className="navbar">
      <h2 onClick={goHome} style={{ cursor: "pointer" }}>
        🛒 MyStore
      </h2>
      <button onClick={goCart}>Cart ({cartCount})</button>
    </nav>
  )
}
