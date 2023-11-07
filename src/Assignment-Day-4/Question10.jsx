// 10.Create a form with Material-UI text fields and implement form validation. Ensure that error messages are displayed when the user enters invalid data.

import { FormControl, FormGroup, TextField, Button } from '@mui/material'
import * as yup from 'yup'
import { useFormik } from 'formik'

const FormContainer = () => {
  const validationSchema = yup.object({
    username: yup.string().required('Name is required').min(6).max(10),
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  })

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validationSchema: validationSchema,
  })

  return (
    <FormGroup>
      <FormControl margin='normal'>
        <TextField
          label='Username'
          variant='outlined'
          style={{ width: '50%' }}
          name='username'
          onChange={formik.handleChange}
          value={formik.values.username}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          {...formik.getFieldProps('username')}
        />
      </FormControl>

      <FormControl>
        <TextField
          label='Email'
          variant='outlined'
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          {...formik.getFieldProps('email')}
          style={{ width: '50%', marginTop: '8px' }}
        />
      </FormControl>

      <FormControl>
        <TextField
          label='Password'
          variant='outlined'
          name='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          {...formik.getFieldProps('password')}
          style={{ width: '50%', marginTop: '8px' }}
        />
      </FormControl>
      <FormControl>
        <Button
          color='primary'
          variant='contained'
          type='submit'
          onClick={formik.handleSubmit}
          style={{ width: '50%', marginTop: '5px' }}
        >
          Submit
        </Button>
      </FormControl>
    </FormGroup>
  )
}

export default FormContainer
