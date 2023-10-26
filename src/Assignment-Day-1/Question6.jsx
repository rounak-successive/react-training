// 6.Create a functional component named Button that accepts props for text and color.
// Style the button using inline styles or CSS classes based on the color prop.
// Import and render the Button component in the App component with different text and color props.

const Button = (props) => {
  const { text, color, ...style } = props
  return <button style={{ ...style, backgroundColor: color }}>{text}</button>
}

export default Button
