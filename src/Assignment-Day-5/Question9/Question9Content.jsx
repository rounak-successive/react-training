import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'
import { Pagination } from '@mui/material'

const GET_TODOS = gql`
  query MyQuery {
    todos(sort: asc) {
      title
      todoId
    }
  }
`

const Content = () => {
  const todosPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)

  const { data, loading, error } = useQuery(GET_TODOS)

  const handlePageChange = (event, pageNumber) => setCurrentPage(pageNumber)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error}`

  const todos = data ? data.todos : []
  const indexOfLastPost = currentPage * todosPerPage
  const indexOfFirstPost = indexOfLastPost - todosPerPage
  const currentTodos = todos.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <>
      <h1>Here is a list of Todos</h1>
      <ul>
        {currentTodos.map((todo, index) => {
          const { title, todoId } = todo
          return (
            <li key={index}>
              <h2>Id: {todoId}</h2>
              <h3>Title: {title}</h3>
            </li>
          )
        })}
      </ul>
      <Pagination
        count={Math.ceil(todos.length / todosPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        color='primary'
        variant='outlined'
      />
    </>
  )
}

export default Content
