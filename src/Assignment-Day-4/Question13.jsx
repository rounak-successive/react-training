// 13.install  Yup. Define a Yup validation schema for a more complex form. Include validation rules for fields like email, password, and phone number. Ensure that error messages are displayed for each validation rule. Implement real-time validation feedback using Material-UI's TextField component. Show validation errors as the user types, and clear the errors when the input is valid.(Use Formik as well)

import { FormControl, FormGroup, TextField, Button } from '@mui/material'
import * as yup from 'yup'
import { useFormik } from 'formik'

const ComplexFormContainer = () => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
    phoneNumber: yup
      .number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .required('A phone number is required'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      phoneNumber: '',
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validationSchema: validationSchema,
  })

  return (
    <FormGroup>
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
          style={{ width: '50%' }}
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

      <FormControl margin='normal'>
        <TextField
          label='Phone Number'
          variant='outlined'
          style={{ width: '50%', marginTop: '8px' }}
          name='phoneNumber'
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
          error={
            formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
          }
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          {...formik.getFieldProps('phoneNumber')}
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

export default ComplexFormContainer
