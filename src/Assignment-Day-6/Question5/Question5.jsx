// 5.Implement a React component (UserProfile) that displays user profile information such as name, email, and phone number. Write tests to ensure that the user profile information is correctly displayed when the component receives user data as props.

import React from 'react'

const UserProfile = ({ user }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Phone: {user?.phone}</p>
    </div>
  )
}

export default UserProfile
