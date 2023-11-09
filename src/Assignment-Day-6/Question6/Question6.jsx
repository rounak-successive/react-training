// 6.Create a React component (Modal) that displays a modal dialog with content. Users can open and close the modal. Write tests to check if the modal opens and closes when triggered.

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
    <div style={modalStyles} data-testid='modal'>
      <section style={modalMainStyles} data-testid='modal-main'>
        {children}
        <br />
        <button onClick={handleClose} style={{ marginTop: '15px' }}>
          Close
        </button>
      </section>
    </div>
  )
}

export default ModalComponent
