// 14. Create a new form and Implement form submission handling. Ensure that the form cannot be submitted if there are validation errors. Display a summary of errors if the user attempts to submit an invalid form.

import {
  FormControl,
  FormGroup,
  TextField,
  Button,
  Typography,
} from '@mui/material'
import * as yup from 'yup'
import { useFormik } from 'formik'

const ValidatedFormContainer = () => {
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
      .min(10, 'Phone number should be of length 10')
      .max(10, 'Phone number should be of length 10')
      .required('A phone number is required'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      phoneNumber: '',
    },
    onSubmit: (values) => {
      if (formik.errors) console.log(formik.errors)
      else console.log(values)
    },
    validationSchema: validationSchema,
  })

  return (
    <>
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
            style={{ width: '50%', marginBottom: '10px' }}
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
            style={{ width: '50%' }}
          />
        </FormControl>

        <FormControl margin='normal'>
          <TextField
            label='Phone Number'
            variant='outlined'
            style={{ width: '50%' }}
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
      <br />
      {formik.submitCount > 0 && Object.keys(formik.errors).length > 0 && (
        <Typography variant='div' color='error'>
          Please fix the following errors:
          <ul>
            {Object.keys(formik.errors).map((field) => (
              <li key={field}>{formik.errors[field]}</li>
            ))}
          </ul>
        </Typography>
      )}
    </>
  )
}

export default ValidatedFormContainer
