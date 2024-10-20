import './App.css'

import User from './components/User'
import Cart from './components/Cart'
import Products from './components/Products'

import { UserProvider } from './context/UserContext'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <>
      <UserProvider>
        <CartProvider>
          <h1>Context Shop</h1>

          <User />
          <Cart />
          <Products />
        </CartProvider>
      </UserProvider>
    </>
  )
}

export default App
