import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const navigateToAbout = () => {
    navigate('about')
  }

  return (
    <div>
      <h2>Welcome to Home Page</h2>
      <button onClick={navigateToAbout}>Go to About </button>
    </div>
  )
}

export default Home
