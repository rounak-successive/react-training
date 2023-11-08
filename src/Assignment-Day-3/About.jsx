import { useNavigate } from 'react-router-dom'
const About = () => {
  const navigate = useNavigate()
  const navigateToHome = () => {
    navigate('..')
  }

  return (
    <div style={{ alignContent: 'center' }}>
      <h2>Welcome to About Page</h2>
      <button onClick={navigateToHome}>Go to Home </button>
    </div>
  )
}
export default About
