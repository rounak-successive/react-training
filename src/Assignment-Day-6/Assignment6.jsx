import { Link, useParams } from 'react-router-dom'
import Counter from './Question3/Question3'
import LoginForm from './Question4/Question4'
import UserProfile from './Question5/Question5'
import Question1Container from './Question1/Question1'
import Question2Container from './Question2/Question2'

function Assignment6() {
  const { questionNo } = useParams()
  let content

  switch (questionNo) {
    case '1':
      content = (
        <div id={'Question1'}>
          <p className='question'>
            1. Create a React application that has multiple pages represented as
            components. Implement lazy loading for these components using
            React's lazy and Suspense features. When a user navigates to a
            particular page, the component should be loaded lazily, improving
            the application's initial loading time.
          </p>
          <Question1Container />
        </div>
      )
      break
    case '2':
      content = (
        <div id={'Question2'}>
          <p className='question'>
            2. Extend Question 1 to include error handling. If a lazy-loaded
            component fails to load, display a user-friendly error message to
            the user instead of crashing the application. Implement this using
            the ErrorBoundary component.
          </p>

          <Question2Container />
        </div>
      )
      break
    case '3':
      content = (
        <div id={'Question3'}>
          <p className='question'>
            3. Create a React component named Counter that displays a number and
            two buttons, one for incrementing the number and another for
            decrementing it. Write tests using React Testing Library to ensure
            that the component behaves as expected.
          </p>
          <Counter />
        </div>
      )
      break
    case '4':
      content = (
        <div id={'Question4'}>
          <p className='question'>
            4. You are given a simple form component (LoginForm) that contains
            input fields for username and password, as well as a submit button.
            Create test cases to verify that the form fields can be filled, and
            the submit button works correctly.
          </p>
          <LoginForm />
        </div>
      )
      break
    case '5':
      content = (
        <div id={'Question5'}>
          <p className='question'>
            5. Implement a React component (UserProfile) that displays user
            profile information such as name, email, and phone number. Write
            tests to ensure that the user profile information is correctly
            displayed when the component receives user data as props.
          </p>
          <UserProfile
            user={{
              name: 'Rounak Dwary',
              email: 'rounak.dwary@successive.tech',
              phone: '123-456-7890',
            }}
          />
        </div>
      )
      break
    case '6':
      content = (
        <div id={'Question6'}>
          <p className='question'>
            6. Create a React component (Modal) that displays a modal dialog
            with content. Users can open and close the modal. Write tests to
            check if the modal opens and closes when triggered.
          </p>
        </div>
      )
      break

    default:
      content = <h2>Click on any Question to view it.</h2>
  }

  return (
    <>
      <nav style={{ margin: 10 }}>
        <Link to='/assignment-6/1' style={{ padding: 5 }}>
          Question1
        </Link>
        <Link to='/assignment-6/2' style={{ padding: 5 }}>
          Question2
        </Link>
        <Link to='/assignment-6/3' style={{ padding: 5 }}>
          Question3
        </Link>
        <Link to='/assignment-6/4' style={{ padding: 5 }}>
          Question4
        </Link>
        <Link to='/assignment-6/5' style={{ padding: 5 }}>
          Question5
        </Link>
        <Link to='/assignment-6/6' style={{ padding: 5 }}>
          Question6
        </Link>
      </nav>

      {content}
    </>
  )
}

export default Assignment6
