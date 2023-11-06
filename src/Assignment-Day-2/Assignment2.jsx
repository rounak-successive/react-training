import { useParams, Link } from 'react-router-dom'
import Counter from './Question1'
import PersonForm from './Question2'
import ToDoList from './Question3'
import RandomNumberGenerator from './Question4'
import CounterWithStep from './Question5'
import Clock from './Question6'
import Notification from './Question7'
import Slideshow from './Question8'
import ThemeSwitcher from './Question9'
import LanguageSwitcher from './Question10'
import ShoppingApplication from './Question11'
import VotingApplication from './Question12'
import Parent from './Question13'
import TaskList from './Question14'
import StudentList from './Question15'
import EmployeeSalary from './Question16'
import CopyTextComponent from './Question17'
import UserPreferences from './Question18'
import TimerComponent from './Question19'

const Assignment2 = () => {
  const { questionNo } = useParams()
  let content
  switch (questionNo) {
    case '1':
      content = (
        <div id={'Question1'}>
          <p className='question'>
            1. Create a functional component called Counter. Inside the
            component, use the useState hook to manage a state variable named
            count initialized to 0. Render the current value of count in a
            {' <p> '} element. Add two buttons, one for incrementing the count
            and another for decrementing it. When the user clicks on the
            buttons, update the count state accordingly.
          </p>
          <Counter />
        </div>
      )
      break
    case '2':
      content = (
        <div id={'Question2'}>
          <p className='question'>
            2. Create a functional component called PersonForm. Use the useState
            hook to manage three state variables: firstName, lastName, and age,
            all initialized to empty strings. Render three input fields for the
            user to enter their first name, last name, and age. As the user
            types, update the respective state variables. Display the entered
            information below the input fields.
          </p>
          <PersonForm />
        </div>
      )
      break
    case '3':
      content = (
        <div id={'Question3'}>
          <p className='question'>
            3. Create a functional component called ToDoList. Use the useState
            hook to manage a state variable named todos, initialized as an empty
            array. Render a list of todos using the map function. Each todo
            should have a checkbox to mark it as completed and a delete button
            to remove it from the list. Use the useState hook to manage the
            state of each todo item (completed or not).
          </p>
          <ToDoList />
        </div>
      )
      break
    case '4':
      content = (
        <div id={'Question4'}>
          <p className='question'>
            4. Create a functional component called RandomNumberGenerator. Use
            the useState hook to manage a state variable named randomNumber,
            initialized to a random number between 1 and 100. Render the current
            value of randomNumber. Add a button that generates a new random
            number and updates the state when clicked.
          </p>
          <RandomNumberGenerator />
        </div>
      )
      break
    case '5':
      content = (
        <div id={'Question5'}>
          <p className='question'>
            5. Create a functional component called CounterWithStep. Use the
            useState hook to manage a state variable named count initialized to
            0. Render the current value of count in a {'<p>'} element. Add two
            buttons, one for incrementing the count and another for decrementing
            it. Add an input field where the user can specify a step value.
            Update the count using the specified step value when the buttons are
            clicked.
          </p>
          <CounterWithStep />
        </div>
      )
      break
    case '6':
      content = (
        <div id={'Question6'}>
          <p className='question'>
            6. Create a functional component called Clock. Use the useState hook
            to manage a state variable named time initialized to the current
            time. Use the useEffect hook to update the time state every second
            to display the current time. Render the current time in a {'<p>'}{' '}
            element. When the component unmounts, clear the interval to stop
            updating the time.
          </p>
          <Clock />
        </div>
      )
      break

    case '7':
      content = (
        <div id={'Question7'}>
          <p className='question'>
            7. Create a functional component called Notification. Use the
            useState hook to manage a state variable named message initialized
            to an empty string. Use the useEffect hook to show a notification
            message for 5 seconds whenever the message state changes. Render the
            notification message in a {'<div>'} element. After 5 seconds, clear
            the message to hide the notification.
          </p>
          <Notification />
        </div>
      )
      break
    case '8':
      content = (
        <div id={'Question8'}>
          <p className='question'>
            8. Use the useEffect hook to manage the current slide and
            transition. Add few images atleast 10 in public folder to populate
            the slideshow. Allow users to pause, play the slideshow. Include a
            time interval option to control the automatic slideshow progression.
          </p>
          <Slideshow />
        </div>
      )
      break
    case '9':
      content = (
        <div id={'Question9'}>
          <p className='question'>
            9. Create a theme switcher application using the useContext hook.
            Create a context to manage the current theme (e.g., light or dark).
            Provide a button to toggle between the two themes. Use the
            useContext hook to access the theme value and update it. Apply
            different styles and colors to components based on the selected
            theme.
          </p>
          <ThemeSwitcher />
        </div>
      )
      break
    case '10':
      content = (
        <div id={'Question10'}>
          <p className='question'>
            10. Develop a language switcher application using the useContext
            hook. Create a context to manage the current language (e.g., English
            or Spanish). Provide buttons to switch between languages. Use the
            useContext hook to access the current language value. Display
            different language versions of the application's content.
          </p>
          <LanguageSwitcher />
        </div>
      )
      break
    case '11':
      content = (
        <div id={'Question11'}>
          <p className='question'>
            11. Build a shopping cart application using the useContext hook. Set
            up a context to manage the state of the shopping cart. Create
            components to display products and a shopping cart. Use the
            useContext hook to access the cart state and update it. Allow users
            to add and remove items from the cart. Display the total price of
            items in the cart.
          </p>
          <ShoppingApplication />
        </div>
      )
      break
    case '12':
      content = (
        <div id={'Question12'}>
          <p className='question'>
            12. Create a simple voting application using the useReducer hook.
            Set up a reducer to manage the votes for different options. Create
            buttons representing voting options. Use the useReducer hook to
            access the votes state and dispatch actions. Allow users to vote for
            their preferred options. Display the current vote count for each
            option.
          </p>
          <VotingApplication />
        </div>
      )
      break
    case '13':
      content = (
        <div id={'Question13'}>
          <p className='question'>
            13. Create two components: Parent and Child. In the Parent
            component, maintain a count state. Pass a callback function from the
            Parent to the Child that increments the count. Use the useCallback
            hook in the Parent to memoize the callback function with a
            dependency on the count state. Display the count in the Child
            component. Implement a button in the Child component that resets the
            count to zero when clicked.
          </p>
          <Parent />
        </div>
      )
      break
    case '14':
      content = (
        <div id={'Question14'}>
          <p className='question'>
            14. Create a component that displays a list of tasks. Each task has
            a "Complete" button. Implement a feature where clicking the
            "Complete" button marks the task as completed. Use the useCallback
            hook to create dynamic callback functions for each task. Ensure that
            clicking the "Complete" button for one task doesn't trigger
            unnecessary re-renders for other tasks.
          </p>
          <TaskList />
        </div>
      )
      break
    case '15':
      content = (
        <div id={'Question15'}>
          <p className='question'>
            15.Create a functional component named StudentList that displays a
            list of student names.. Define an array of student names as a
            constant within the component. Use the useMemo hook to memoize the
            list of student names. Render the list of student names on the
            screen. Include a button that, when clicked, appends a new student
            name to the list.
          </p>
          <StudentList />
        </div>
      )
      break
    case '16':
      content = (
        <div id={'Question16'}>
          <p className='question'>
            16.Create a functional component named EmployeeSalary that displays
            the average salary of a list of employees. Define an array of
            employee objects, where each object has a name and salary property.
            Use the useMemo hook to calculate the average salary of employees.
            Ensure that the useMemo hook has a dependency on the employee data
            so that it recalculates when the employee data changes. Render the
            average salary on the screen. Include a button that, when clicked,
            updates the employee data with new salaries.
          </p>
          <EmployeeSalary />
        </div>
      )
      break
    case '17':
      content = (
        <div id={'Question17'}>
          <p className='question'>
            17.Build a custom hook named useClipboard for copying text to the
            clipboard. Implement a useClipboard hook that takes a text value as
            a parameter. Use the document.execCommand API to copy the provided
            text to the clipboard. Return a success status and methods to
            trigger the copying action. Develop a component that uses the
            useClipboard hook to provide a copy button for text.
          </p>
          <CopyTextComponent />
        </div>
      )
      break
    case '18':
      content = (
        <div id={'Question18'}>
          <p className='question'>
            18.Design a custom hook named useLocalStorage to interact with local
            storage. Create a useLocalStorage hook that allows storing and
            retrieving data from local storage. Implement methods for setting,
            getting, and removing data using the hook. Utilize the localStorage
            API within the hook to manage data. Develop a component that uses
            the useLocalStorage hook to manage user preferences.
          </p>
          <UserPreferences />
        </div>
      )
      break
    case '19':
      content = (
        <div id={'Question19'}>
          <p className='question'>
            19.Build a custom hook named useTimer for creating countdown timers.
            Create a useTimer hook that takes a countdown duration as a
            parameter. Use setInterval to decrement the timer at regular
            intervals. Return the current timer value and methods to start,
            pause, and reset the timer. Develop a component that utilizes the
            useTimer hook to display and control a countdown.
          </p>
          <TimerComponent />
        </div>
      )
      break
    default:
      content = <h2>Click on any Question to view it.</h2>
  }

  return (
    <>
      <nav style={{ margin: 10 }}>
        <Link to='/assignment-2/1' style={{ padding: 5 }}>
          Question1
        </Link>
        <Link to='/assignment-2/2' style={{ padding: 5 }}>
          Question2
        </Link>
        <Link to='/assignment-2/3' style={{ padding: 5 }}>
          Question3
        </Link>
        <Link to='/assignment-2/4' style={{ padding: 5 }}>
          Question4
        </Link>
        <Link to='/assignment-2/5' style={{ padding: 5 }}>
          Question5
        </Link>
        <Link to='/assignment-2/6' style={{ padding: 5 }}>
          Question6
        </Link>
        <Link to='/assignment-2/7' style={{ padding: 5 }}>
          Question7
        </Link>
        <Link to='/assignment-2/8' style={{ padding: 5 }}>
          Question8
        </Link>
        <Link to='/assignment-2/9' style={{ padding: 5 }}>
          Question9
        </Link>
        <Link to='/assignment-2/10' style={{ padding: 5 }}>
          Question10
        </Link>
        <Link to='/assignment-2/11' style={{ padding: 5 }}>
          Question11
        </Link>
        <Link to='/assignment-2/12' style={{ padding: 5 }}>
          Question12
        </Link>
        <Link to='/assignment-2/13' style={{ padding: 5 }}>
          Question13
        </Link>
        <Link to='/assignment-2/14' style={{ padding: 5 }}>
          Question14
        </Link>
        <Link to='/assignment-2/15' style={{ padding: 5 }}>
          Question15
        </Link>
        <Link to='/assignment-2/16' style={{ padding: 5 }}>
          Question16
        </Link>
        <Link to='/assignment-2/17' style={{ padding: 5 }}>
          Question17
        </Link>
        <Link to='/assignment-2/18' style={{ padding: 5 }}>
          Question18
        </Link>
        <Link to='/assignment-2/19' style={{ padding: 5 }}>
          Question19
        </Link>
      </nav>

      {content}
    </>
  )
}

export default Assignment2
