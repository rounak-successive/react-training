import '../App.css'
import Greeting from './Question1'
import UserCard from './Question2'
import Weather from './Question3'
import Counter from './Question4'
import TaskList from './Question5'
import Button from './Question6'
import { Link, useParams } from 'react-router-dom'

function Assignment1() {
  const userArray = [
    {
      name: 'Rounak Dwary',
      email: 'rounak.dwary@successive.tech',
      avatarURL:
        'https://gravatar.com/avatar/9e9593b2ef84cba227494ad563781eb6?s=400&d=robohash&r=x',
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      avatarURL:
        'https://gravatar.com/avatar/342fb4e123f512a7775562a200adc15b?s=400&d=robohash&r=x',
    },
    {
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      avatarURL:
        'https://gravatar.com/avatar/4e97657c4ecd060bd0181ec91e18e296?s=400&d=robohash&r=x',
    },
  ] // for question 2

  const temperatureData = [27, 18, 9] // for question 3
  const tasks = [
    'Complete homework assignment',
    'Go grocery shopping',
    'Write a report',
    'Exercise for 30 minutes',
    'Read a book',
    'Call a friend',
    'Clean the house',
    'Prepare dinner',
  ] // for question 5

  const { questionNo } = useParams()
  let content
  switch (questionNo) {
    case '1':
      content = (
        <div id={'Question1'}>
          <p className='question'>
            1. Create a functional component named Greeting that displays a
            simple "Hello, React!" message on the screen. Import and render the
            Greeting component in the App component.
          </p>
          <Greeting />
        </div>
      )
      break
    case '2':
      content = (
        <div id={'Question2'}>
          <p className='question'>
            2. Create a functional component named UserCard that accepts the
            following props: name, email, and avatarURL. Use the props to
            display the user's name, email, and an image (avatar) in the
            UserCard component. Create multiple instances of the UserCard
            component with different user data.
          </p>
          {userArray.map((user, key) => (
            <UserCard key={key} {...user} />
          ))}
        </div>
      )
      break
    case '3':
      content = (
        <div id={'Question3'}>
          <p className='question'>
            3. Create a functional component named Weather that accepts a prop
            called temperature (a number). Display a message like "It's sunny
            today!" if the temperature is above 25°C and "It's cold today!" if
            the temperature is below 10°C. Import and render the Weather
            component in the App component with different temperature values.
          </p>
          {temperatureData.map((temperature, key) => (
            <Weather temperature={temperature} key={key} />
          ))}
        </div>
      )
      break
    case '4':
      content = (
        <div id={'Question4'}>
          <p className='question'>
            4. Create a functional component named Counter that displays a count
            and two buttons: "Increment" and "Decrement". Implement event
            handlers for the "Increment" and "Decrement" buttons to increase and
            decrease the count. Display the updated count on the screen.
          </p>
          <Counter />
        </div>
      )
      break
    case '5':
      content = (
        <div id={'Question5'}>
          <p className='question'>
            5.Create a functional component named TaskList that accepts an array
            of task names as a prop. Use the map function to render each task
            name as a list item. Import and render the TaskList component in the
            App component with an array of tasks.
          </p>
          <TaskList tasks={tasks} />
        </div>
      )
      break
    case '6':
      content = (
        <div id={'Question6'}>
          <p className='question'>
            6.Create a functional component named Button that accepts props for
            text and color. Style the button using inline styles or CSS classes
            based on the color prop. Import and render the Button component in
            the App component with different text and color props.
          </p>
          <Button color='red' text='Demo Button' />{' '}
          <Button color='blue' text='Demo Button' />{' '}
          <Button color='green' text='Demo Button' />
        </div>
      )
      break

    default:
      content = <h2>Click on any Question to view it.</h2>
  }

  return (
    <>
      <nav style={{ margin: 10 }}>
        <Link to='/assignment-1-class/1' style={{ padding: 5 }}>
          Question1
        </Link>
        <Link to='/assignment-1-class/2' style={{ padding: 5 }}>
          Question2
        </Link>
        <Link to='/assignment-1-class/3' style={{ padding: 5 }}>
          Question3
        </Link>
        <Link to='/assignment-1-class/4' style={{ padding: 5 }}>
          Question4
        </Link>
        <Link to='/assignment-1-class/5' style={{ padding: 5 }}>
          Question5
        </Link>
        <Link to='/assignment-1-class/6' style={{ padding: 5 }}>
          Question6
        </Link>
      </nav>

      {content}
    </>
  )
}

export default Assignment1
