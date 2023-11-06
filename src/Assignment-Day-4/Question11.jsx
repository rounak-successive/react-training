// 11. Design a modal dialog component using Material-UI's Dialog component. Use it to display additional information or capture user input within your app.

import { useState } from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

const ModalDialog = () => {
  const [open, setOpen] = useState(false)
  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    feedback: yup.string().required('Please provide some feedback'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      feedback: '',
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validationSchema: validationSchema,
  })

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open Modal dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Welcome User, please enter your email address and feedback here.
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            name='email'
            label='Email Address'
            type='email'
            value={formik.values.email}
            fullWidth
            variant='standard'
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            autoFocus
            margin='dense'
            name='feedback'
            label='Feedback'
            type='text'
            value={formik.values.feedback}
            fullWidth
            variant='standard'
            onChange={formik.handleChange}
            error={formik.touched.feedback && Boolean(formik.errors.feedback)}
            helperText={formik.touched.feedback && formik.errors.feedback}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={formik.handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ModalDialog
