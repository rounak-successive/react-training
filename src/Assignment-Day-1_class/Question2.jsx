// 2.Create a functional component named UserCard that accepts the
//           following props: name, email, and avatarURL. Use the props to display
//           the user's name, email, and an image (avatar) in the UserCard
//           component. Create multiple instances of the UserCard component with
//           different user data.

import React, { Component } from 'react'
class UserCard extends Component {
  render() {
    const { name, email, avatarURL } = this.props
    return (
      <span
        style={{
          border: '2px solid red',
          padding: '10px',
          display: 'inline-block',
          textAlign: 'center',
        }}
      >
        <img src={avatarURL} alt='User Avatar'></img>
        <h4>Name : {name}</h4>
        <h4>Email: {email}</h4>
      </span>
    )
  }
}

export default UserCard
