// 3.Create a functional component named Weather that accepts a prop called temperature (a number).
// Display a message like "It's sunny today!" if the temperature is above 25°C and "It's cold today!" if the temperature is below 10°C.
// Import and render the Weather component in the App component with different temperature values.

import { PropTypes } from 'prop-types'
const Weather = ({ temperature }) => {
  return (
    <h2>
      The temperature is {temperature}.
      {temperature > 25 && " It's sunny today!"}
      {temperature < 10 && " It's cold today!"}
    </h2>
  )
}
Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
}

export default Weather
