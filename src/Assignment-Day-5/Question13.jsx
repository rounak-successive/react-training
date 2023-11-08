// 13.Design and implement a Modal component in React. Allow customization of the modal content and provide options to open, close, and toggle the modal. Use this component to display various types of content.

import { useState, useRef } from 'react'

const ModalComponent = (props) => {
  const { children, isOpen, handleClose } = props
  const modalStyles = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: isOpen ? 'block' : 'none',
  }

  const modalMainStyles = {
    position: 'fixed',
    backgroundColor: 'white',
    width: '60%',
    maxWidth: '600px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
  }

  return (
    <div style={modalStyles}>
      <section style={modalMainStyles}>
        {children}
        <br />
        <button onClick={handleClose} style={{ marginTop: '15px' }}>
          Close
        </button>
      </section>
    </div>
  )
}

const SampleModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const inputRef = useRef(null)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      <ModalComponent isOpen={isModalOpen} handleClose={toggleModal}>
        <h2>Welcome User</h2>
        <input placeholder='Enter your message' type='text' ref={inputRef} />
        <button
          onClick={() => {
            console.log(inputRef.current.value)
            toggleModal()
            inputRef.current.value = ''
          }}
        >
          Submit
        </button>
      </ModalComponent>
    </div>
  )
}

export default SampleModal
