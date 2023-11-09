import { useNavigate } from 'react-router-dom'
const About = ({ user }) => {
  const navigate = useNavigate()
  const navigateToHome = () => {
    navigate('..')
  }

  return (
    <div style={{ alignContent: 'center' }}>
      <h2>Welcome {user.name}</h2>
      <button onClick={navigateToHome}>Go to Home </button>
    </div>
  )
}
export default About
