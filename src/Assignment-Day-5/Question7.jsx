// 7.Create a form in your React component that allows the user to input data (e.g., a post title and content). Use Axios to send a POST request to an API endpoint, posting the user's data.

import axios from 'axios'
import { useState } from 'react'
import {
  FormGroup,
  FormControl,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
  Typography,
} from '@mui/material'
import * as yup from 'yup'
import { useFormik } from 'formik'

const Question7Container = () => {
  const [data, setData] = useState('')
  const validationSchema = yup.object({
    inputText: yup.string().required('Input Text is required'),
    targetLanguage: yup.string().required('Target Language is required'),
  })

  const formik = useFormik({
    initialValues: {
      inputText: '',
      targetLanguage: '',
    },
    onSubmit: async (values) => {
      const encodedParams = new URLSearchParams()
      encodedParams.set('q', values.inputText)
      encodedParams.set('target', values.targetLanguage)
      encodedParams.set('source', 'en')

      const options = {
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key':
            'e23e23b505msh762e4188dbf3778p14f067jsndafaa77ddaf2',
          'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
        },
        data: encodedParams,
      }

      try {
        const newData = await axios
          .request(options)
          .then((response) => response.data)
          .then((data) => data.data.translations[0].translatedText)
        setData(newData)
      } catch (error) {
        console.error(error)
      }
    },
    validationSchema: validationSchema,
  })

  return (
    <FormGroup>
      <FormControl margin='normal'>
        <TextField
          label='Enter Text to be translated'
          variant='outlined'
          style={{ width: '50%' }}
          name='inputText'
          onChange={formik.handleChange}
          value={formik.values.inputText}
          error={formik.touched.inputText && Boolean(formik.errors.inputText)}
          helperText={formik.touched.inputText && formik.errors.inputText}
          {...formik.getFieldProps('inputText')}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Target Language</InputLabel>
        <Select
          id='demo-simple-select'
          value={formik.values.targetLanguage}
          label='Select Language'
          name='targetLanguage'
          onChange={formik.handleChange}
          style={{ width: '50%', marginTop: '8px' }}
          error={
            formik.touched.targetLanguage &&
            Boolean(formik.errors.targetLanguage)
          }
          {...formik.getFieldProps('targetLanguage')}
        >
          <MenuItem value={'hi'}>Hindi</MenuItem>
          <MenuItem value={'es'}>Spanish</MenuItem>
          <MenuItem value={'be'}>Bengali</MenuItem>
        </Select>
        <FormHelperText>
          {formik.touched.targetLanguage && formik.errors.targetLanguage}
        </FormHelperText>
      </FormControl>
      <Button
        color='primary'
        variant='contained'
        type='submit'
        onClick={formik.handleSubmit}
        style={{ width: '50%', marginTop: '8px' }}
      >
        Submit
      </Button>
      {data && (
        <Typography variant='h3' style={{ marginTop: '15px', width: '50%' }}>
          Translated Text: {data}
        </Typography>
      )}
    </FormGroup>
  )
}

export default Question7Container
