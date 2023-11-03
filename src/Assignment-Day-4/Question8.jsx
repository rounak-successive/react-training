// 8.Create a temperature converter component with two input fields: one for Celsius and one for Fahrenheit. Implement controlled components for both inputs. When the user enters a value in one input, the other input should update with the converted temperature.

import { useState } from 'react'

const TemperatureConverter = () => {
  const [celsiusTemperature, setCelsiusTemperature] = useState(0)
  const [fahrenheitTemperature, setFahrenheitTemperature] = useState(32)
  const handleChange = (event) => {
    const { value, id } = event.target
    if (id === 'celsiusTemp') {
      setCelsiusTemperature(value)
      setFahrenheitTemperature(+((value * 9) / 5 + 32).toFixed(5))
    } else {
      setFahrenheitTemperature(value)
      setCelsiusTemperature(+(((value - 32) * 5) / 9).toFixed(5))
    }
  }

  return (
    <>
      <label
        htmlFor='celsiusTemp'
        style={{ marginBottom: '5px', display: 'block' }}
      >
        Temperature in Celsius
      </label>
      <input
        type='number'
        value={celsiusTemperature}
        id='celsiusTemp'
        onChange={handleChange}
        style={{
          padding: '8px',
          marginBottom: '15px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
      <label
        htmlFor='fahrenTemp'
        style={{ marginBottom: '5px', display: 'block' }}
      >
        Temperature in Fahrenheit
      </label>
      <input
        type='number'
        value={fahrenheitTemperature}
        id='fahrenTemp'
        onChange={handleChange}
        style={{
          padding: '8px',
          marginBottom: '15px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
    </>
  )
}

export default TemperatureConverter
