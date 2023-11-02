// 6. Create a list of items (e.g., products, articles) in your application.
// Implement dynamic routing to display details for each item when clicked.
// Create a route parameter that represents the item's ID in the URL (e.g., "/products/:id").
// Fetch item details based on the route parameter and display them on the detail page.
// Add a "Go Back" button on the detail page to return to the list.

import React from 'react'
import { Link, useParams, Route, Routes } from 'react-router-dom'
import items from './items'

const Products = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<ItemList items={items} />} />
        <Route path='products/:id' element={<ItemDetail items={items} />} />
      </Routes>
    </>
  )
}
const ItemList = ({ items }) => {
  return (
    <div>
      <h1>Item List</h1>
      <nav className='navigation'>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Link to={`products/${item.id}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

const ItemDetail = ({ items }) => {
  const { id } = useParams()
  const selectedItem = items.find((item) => item.id === parseInt(id))

  if (!selectedItem) {
    return <div>Item not found</div>
  }

  return (
    <div className='item-detail'>
      <h1>{selectedItem.name}</h1>
      <p>
        <strong>Category:</strong> {selectedItem.category}
      </p>
      <p>
        <strong>Description:</strong> {selectedItem.description}
      </p>
      <p>
        <strong>Price:</strong> ₹ {selectedItem.price}
      </p>
      <p>
        <strong>Stock:</strong> {selectedItem.stock} available
      </p>
      <Link to='..' className='go-back'>
        Go Back
      </Link>
    </div>
  )
}

export default Products
