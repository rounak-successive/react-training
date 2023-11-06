import '../App.css'
import { Link, useParams } from 'react-router-dom'
import Parent from './Question1'
import Question2Container from './Question2'
import Question3Container from './Question3'
import Question4Container from './Question4'
import Question5Container from './Question5'
import Products from './Question6'
function Assignment3() {
  const { questionNo } = useParams()
  let content
  switch (questionNo) {
    case '1':
      content = (
        <div id={'Question1'}>
          <p className='question'>
            1. Create two components: a parent component that acts as a provider
            and a child component that consumes the context. Create a context to
            manage a user's authentication status (logged in or out). Implement
            a login button in the child component that, when clicked, updates
            the authentication status in the context to "logged in." Display a
            message in the child component based on the user's authentication
            status. If the user is logged in, show "Welcome, [username]!"
            Otherwise, display "Please log in."
          </p>
          <Parent />
        </div>
      )
      break
    case '2':
      content = (
        <div id={'Question2'}>
          <p className='question'>
            2. Extend the previous application to demonstrate the use of nested
            contexts. Create a new context to manage user preferences (e.g.,
            theme preference). Modify the parent component to provide both the
            authentication and preferences contexts. Create a child component
            that consumes both contexts. Allow the user to change their theme
            preference (light/dark) using a button in the child component.
            Display the theme preference in the UI and adjust the component's
            styling accordingly.
          </p>
          <Question2Container />
        </div>
      )
      break
    case '3':
      content = (
        <div id={'Question3'}>
          <p className='question'>
            3. Creat pages: Home and About. Implement routing using React Router
            DOM. Create navigation links to switch between the Home and About
            pages. Display appropriate content on each page. Add a "404 Not
            Found" page for any invalid routes.
          </p>
          <Question3Container />
        </div>
      )
      break
    case '4':
      content = (
        <div id={'Question4'}>
          <p className='question'>
            4. Enhance the previous application by adding protected routes that
            require authentication. Create a login page with a form that accepts
            a username and password. Implement authentication logic (e.g.,
            hardcode a username and password for now). Secure the About page so
            that it can only be accessed by authenticated users. Redirect
            unauthenticated users to the login page. Display a message on the
            Home page welcoming the authenticated user.
          </p>
          <Question4Container />
        </div>
      )
      break
    case '5':
      content = (
        <div id={'Question5'}>
          <p className='question'>
            5. Extend the application to include nested routes for a more
            complex user interface. Create a new section of your application
            (e.g., a Dashboard) with multiple sub-pages (e.g., Dashboard,
            Profile, Settings). Implement nested routing within this section
            using nested routes. Add navigation links to switch between the
            sub-pages within the Dashboard section. Customize the content
            displayed on each sub-page.
          </p>
          <Question5Container />
        </div>
      )
      break
    case '6':
      content = (
        <div id={'Question6'}>
          <p className='question'>
            6.Create a list of items (e.g., products, articles) in your
            application. Implement dynamic routing to display details for each
            item when clicked. Create a route parameter that represents the
            item's ID in the URL (e.g., "/products/:id"). Fetch item details
            based on the route parameter and display them on the detail page.
            Add a "Go Back" button on the detail page to return to the list.
          </p>
          <Products />
        </div>
      )
      break

    default:
      content = <h2>Click on any Question to view it.</h2>
  }

  return (
    <>
      <nav style={{ margin: 10 }}>
        <Link to='/assignment-3/1' style={{ padding: 5 }}>
          Question1
        </Link>
        <Link to='/assignment-3/2' style={{ padding: 5 }}>
          Question2
        </Link>
        <Link to='/assignment-3/3' style={{ padding: 5 }}>
          Question3
        </Link>
        <Link to='/assignment-3/4' style={{ padding: 5 }}>
          Question4
        </Link>
        <Link to='/assignment-3/5' style={{ padding: 5 }}>
          Question5
        </Link>
        <Link to='/assignment-3/6' style={{ padding: 5 }}>
          Question6
        </Link>
      </nav>

      {content}
    </>
  )
}

export default Assignment3
