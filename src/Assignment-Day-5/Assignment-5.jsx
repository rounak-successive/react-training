import { Link, useParams } from 'react-router-dom'
import Question1Container from './Question1'
import Question2Container from './Question2'
import Question3Container from './Question3'
import PaginationComponent from './Question4'
import Question5Container from './Question5'
import Question6Container from './Question6'
import Question7Container from './Question7'
import GraphQlComponent from './Question8'
import GraphQlPaginationComponent from './Question9/Question9'
import SampleButtons from './Question12'
import SampleModal from './Question13'
import Question14Container from './Question14'
import Question15Container from './Question15'
import Question16Container from './Question16'

function Assignment5() {
  const { questionNo } = useParams()
  let content

  switch (questionNo) {
    case '1':
      content = (
        <div id={'Question1'}>
          <p className='question'>
            1. Create a React component that fetches data from a public API
            (e.g., JSONPlaceholder) and displays it on the page. Use the fetch
            function to make the request.
          </p>
          <Question1Container />
        </div>
      )
      break
    case '2':
      content = (
        <div id={'Question2'}>
          <p className='question'>
            2. Implement error handling for the fetch request. Display an error
            message if the request fails and provide a way for the user to retry
            the request.
          </p>
          <Question2Container />
        </div>
      )
      break
    case '3':
      content = (
        <div id={'Question3'}>
          <p className='question'>
            3. Add a loading indicator (e.g., a spinner) to the component.
            Display it while the data is being fetched and hide it once the data
            is loaded.
          </p>
          <Question3Container />
        </div>
      )
      break
    case '4':
      content = (
        <div id={'Question4'}>
          <p className='question'>
            4. Fetch a large dataset from an API and implement pagination.
            Display a limited number of items per page and provide navigation
            controls to load more pages of data.
          </p>
          <PaginationComponent />
        </div>
      )
      break
    case '5':
      content = (
        <div id={'Question5'}>
          <p className='question'>
            5. Create a React component that fetches data from a public API
            (e.g., JSONPlaceholder) using Axios and displays it on the page.
          </p>
          <Question5Container />
        </div>
      )
      break
    case '6':
      content = (
        <div id={'Question6'}>
          <p className='question'>
            6. Modify the previous assignment to implement error handling using
            Axios. Display an error message if the request fails and provide a
            way for the user to retry the request.
          </p>
          <Question6Container />
        </div>
      )
      break
    case '7':
      content = (
        <div id={'Question7'}>
          <p className='question'>
            7. Create a form in your React component that allows the user to
            input data (e.g., a post title and content). Use Axios to send a
            POST request to an API endpoint, posting the user's data.
          </p>
          <Question7Container />
        </div>
      )
      break
    case '8':
      content = (
        <div id={'Question8'}>
          <p className='question'>
            8. Set up a GraphQL client library like Apollo Client. Create a
            simple component that uses the client to fetch and display data from
            a GraphQL API.
          </p>
          <GraphQlComponent />
        </div>
      )
      break
    case '9':
      content = (
        <div id={'Question9'}>
          <p className='question'>
            9. Create a React component that makes GraphQL queries to retrieve a
            list of items (e.g., a list of books, movies, or products) from a
            GraphQL API. Implement pagination for large datasets and display the
            data in a user-friendly way.
          </p>
          <GraphQlPaginationComponent />
        </div>
      )
      break
    case '10':
      content = (
        <div id={'Question10'}>
          <p className='question'>
            10. Extend the previous assignment to allow users to perform
            mutations, such as adding, updating, or deleting items. Implement a
            form and mutation queries to interact with the GraphQL API.
          </p>
        </div>
      )
      break
    case '11':
      content = (
        <div id={'Question11'}>
          <p className='question'>
            11. Demonstrate how to handle errors in GraphQL queries and
            mutations. Create a React component that displays error messages
            when GraphQL requests fail and provides a way for users to retry the
            request.
          </p>
        </div>
      )
      break
    case '12':
      content = (
        <div id={'Question12'}>
          <p className='question'>
            12. Create a reusable Button component in React that accepts props
            for different styles (e.g., primary, secondary, danger) and click
            handlers. Demonstrate how to use this component in a sample
            application.
          </p>
          <SampleButtons />
        </div>
      )
      break
    case '13':
      content = (
        <div id={'Question13'}>
          <p className='question'>
            13. Design and implement a Modal component in React. Allow
            customization of the modal content and provide options to open,
            close, and toggle the modal. Use this component to display various
            types of content.
          </p>
          <SampleModal />
        </div>
      )
      break
    case '14':
      content = (
        <div id={'Question14'}>
          <p className='question'>
            14. Create an HOC named withAuth that restricts access to a specific
            component to authenticated users only. Implement this HOC on a
            sample component and demonstrate how it protects routes.
          </p>
          <Question14Container />
        </div>
      )
      break
    case '15':
      content = (
        <div id={'Question15'}>
          <p className='question'>
            15. Build an HOC called withLogger that logs the events of a
            component (e.g., mounting, unmounting, updating). Apply this HOC to
            a component and display the logs in the browser console.
          </p>
          <Question15Container />
        </div>
      )
      break
    case '16':
      content = (
        <div id={'Question16'}>
          <p className='question'>
            16. Develop an HOC named withDataFetching that fetches data from an
            API and passes it as props to a component. Use this HOC to retrieve
            and display data in a component.
          </p>
          <Question16Container />
        </div>
      )
      break

    default:
      content = <h2>Click on any Question to view it.</h2>
  }

  return (
    <>
      <nav style={{ margin: 10 }}>
        <Link to='/assignment-5/1' style={{ padding: 5 }}>
          Question1
        </Link>
        <Link to='/assignment-5/2' style={{ padding: 5 }}>
          Question2
        </Link>
        <Link to='/assignment-5/3' style={{ padding: 5 }}>
          Question3
        </Link>
        <Link to='/assignment-5/4' style={{ padding: 5 }}>
          Question4
        </Link>
        <Link to='/assignment-5/5' style={{ padding: 5 }}>
          Question5
        </Link>
        <Link to='/assignment-5/6' style={{ padding: 5 }}>
          Question6
        </Link>
        <Link to='/assignment-5/7' style={{ padding: 5 }}>
          Question7
        </Link>
        <Link to='/assignment-5/8' style={{ padding: 5 }}>
          Question8
        </Link>
        <Link to='/assignment-5/9' style={{ padding: 5 }}>
          Question9
        </Link>
        <Link to='/assignment-5/10' style={{ padding: 5 }}>
          Question10
        </Link>
        <Link to='/assignment-5/11' style={{ padding: 5 }}>
          Question11
        </Link>
        <Link to='/assignment-5/12' style={{ padding: 5 }}>
          Question12
        </Link>
        <Link to='/assignment-5/13' style={{ padding: 5 }}>
          Question13
        </Link>
        <Link to='/assignment-5/14' style={{ padding: 5 }}>
          Question14
        </Link>
        <Link to='/assignment-5/15' style={{ padding: 5 }}>
          Question15
        </Link>
        <Link to='/assignment-5/16' style={{ padding: 5 }}>
          Question16
        </Link>
      </nav>

      {content}
    </>
  )
}

export default Assignment5
