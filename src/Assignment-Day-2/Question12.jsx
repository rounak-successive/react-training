// 12.Create a simple voting application using the useReducer hook.
// Set up a reducer to manage the votes for different options.
// Create buttons representing voting options.
// Use the useReducer hook to access the votes state and dispatch actions.
// Allow users to vote for their preferred options.
// Display the current vote count for each option.

import { useReducer } from 'react'
import './Assignment2.css'

const VotingApplication = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'vote A':
        return { ...state, voteCountA: state.voteCountA + 1 }
      case 'vote B':
        return { ...state, voteCountB: state.voteCountB + 1 }
      case 'vote C':
        return { ...state, voteCountC: state.voteCountC + 1 }
      default:
        return state
    }
  }

  const initialVotes = {
    voteCountA: 0,
    voteCountB: 0,
    voteCountC: 0,
  }

  const [votes, dispatch] = useReducer(reducer, initialVotes)
  const handleVote = (voteType) => {
    dispatch({ type: voteType })
  }

  return (
    <div className='voting-app'>
      <h1>Voting Application</h1>
      <section className='voting-options'>
        <div className='voting-option'>
          <button onClick={() => handleVote('vote A')}>Vote A</button>
          <span>Count: {votes.voteCountA}</span>
        </div>
        <div className='voting-option'>
          <button onClick={() => handleVote('vote B')}>Vote B</button>
          <span>Count: {votes.voteCountB}</span>
        </div>
        <div className='voting-option'>
          <button onClick={() => handleVote('vote C')}>Vote C</button>
          <span>Count: {votes.voteCountC}</span>
        </div>
      </section>
    </div>
  )
}

export default VotingApplication
