import { useContext } from 'react'
import { ShoppingCartContext } from './Question11'
const Products = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 15 },
  ]

  const { setCart, cart } = useContext(ShoppingCartContext)

  const addToCart = (productId) => {
    const existingProduct = cart.find((item) => item.id === productId)

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
      setCart(updatedCart)
    } else {
      const product = products.find((product) => product.id === productId)
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Products</h1>
      <table>
        <thead>
          <tr>
            <th>Product No.</th>
            <th>Name</th>
            <th>Price(INR)</th>
            <th>Add to Cart</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            const { id, name, price } = product
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>
                  <button onClick={() => addToCart(id)}>Add to Cart</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Products
