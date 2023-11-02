import { useNavigate } from 'react-router-dom'
const About = () => {
  const navigate = useNavigate()
  const navigateToAbout = () => {
    navigate('..')
  }

  return (
    <div style={{ alignContent: 'center' }}>
      <h2>Welcome to About Page</h2>
      <button onClick={navigateToAbout}>Go to Home </button>
    </div>
  )
}
export default About
