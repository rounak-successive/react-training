// 4.Fetch a large dataset from an API and implement pagination. Display a limited number of items per page and provide navigation controls to load more pages of data.

import { useState, useEffect, useCallback } from 'react'
import Pagination from '@mui/material/Pagination'

const PaginationComponent = () => {
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 10

  const fetchPosts = useCallback(async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts').then(
      (response) => response.json()
    )
    setPosts(data)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const handlePageChange = useCallback(
    (event, pageNumber) => setCurrentPage(pageNumber),
    []
  )

  return (
    <>
      <h1>Posts</h1>
      {currentPosts.map((post) => (
        <div
          key={post.id}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '10px',
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}

      <Pagination
        count={Math.ceil(posts.length / postsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        color='primary'
        variant='outlined'
      />
    </>
  )
}

export default PaginationComponent
