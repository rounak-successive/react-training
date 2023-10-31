// 11.Build a shopping cart application using the useContext hook. Set up a context to manage the state of the shopping cart. Create components to display products and a shopping cart. Use the useContext hook to access the cart state and update it. Allow users to add and remove items from the cart. Display the total price of items in the cart.

import { createContext, useState } from 'react'
import Products from './Products'
import Cart from './Cart'
export const ShoppingCartContext = createContext()

const ShoppingApplication = () => {
  const [cart, setCart] = useState([])

  return (
    <ShoppingCartContext.Provider value={{ cart, setCart }}>
      <Products />
      <Cart />
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingApplication
