import './Assignment3.css'

const Profile = () => {
  const userProfile = {
    name: 'Rounak Dawry',
    email: 'rdrounak@gmail.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  }

  return (
    <div className='profile-section'>
      <h3 style={{ marginTop: '5px' }}>Your Profile</h3>
      <p>Name: {userProfile.name}</p>
      <p>Email: {userProfile.email}</p>
      <p>Bio: {userProfile.bio}</p>
    </div>
  )
}

export default Profile
