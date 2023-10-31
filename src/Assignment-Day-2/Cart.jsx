import { useContext, useEffect, useState } from 'react'
import { ShoppingCartContext } from './Question11'

const Cart = () => {
  const { cart, setCart } = useContext(ShoppingCartContext)

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId)
    setCart(updatedCart)
  }

  const [totalPrice, setTotalPrice] = useState(0)

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId)
    } else {
      const updatedCart = cart.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: newQuantity }
        }
        return product
      })
      setCart(updatedCart)
    }
  }

  useEffect(() => {
    let newTotalPrice = 0
    cart.forEach(
      (product) => (newTotalPrice += product.price * product.quantity)
    )
    setTotalPrice(newTotalPrice)
  }, [cart])

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Cart</h1>

      {totalPrice === 0 ? (
        'Cart is Empty'
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price(INR)</th>
                <th>Quantity</th>
                <th>Delete Item</th>
              </tr>
            </thead>

            <tbody>
              {cart.map((product) => {
                const { id, price, quantity, name } = product
                return (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{price}</td>
                    <td>
                      <button onClick={() => updateQuantity(id, quantity + 1)}>
                        +
                      </button>
                      {quantity}
                      <button onClick={() => updateQuantity(id, quantity - 1)}>
                        -
                      </button>
                    </td>
                    <td>
                      <button onClick={() => removeFromCart(id)}>Delete</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <h3>
            The total price of the all the items in the cart is: {totalPrice}
          </h3>
        </>
      )}
    </div>
  )
}

export default Cart
