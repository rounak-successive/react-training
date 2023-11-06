import { Link, useParams } from 'react-router-dom'
import ControlledComponent from './Question1'
import ControlledForm from './Question2'
import Question3Container from './Question3'
import DualPasswordForm from './Question4'
import DropdownMenu from './Question5'
import ToDoList from './Question6'
import SearchFilter from './Question7'
import TemperatureConverter from './Question8'
import TemporaryDrawer from './Question9'
import FormContainer from './Question10'
import ModalDialog from './Question11'
import SortedTable from './Question12'
import ComplexFormContainer from './Question13'
import ValidatedFormContainer from './Question14'

function Assignment4() {
  const { questionNo } = useParams()
  let content

  switch (questionNo) {
    case '1':
      content = (
        <div id={'Question1'}>
          <p className='question'>
            1. Create a React component with an input field. Implement it as a
            controlled component where the input value is controlled by the
            component's state. When the user types into the input field, the
            component's state should update accordingly.
          </p>
          <ControlledComponent />
        </div>
      )
      break
    case '2':
      content = (
        <div id={'Question2'}>
          <p className='question'>
            2. Build a form that includes various input fields like text inputs,
            checkboxes, and radio buttons. Ensure that each input is a
            controlled component. When the user submits the form, log the form
            data to the console.
          </p>
          <ControlledForm />
        </div>
      )
      break
    case '3':
      content = (
        <div id={'Question3'}>
          <p className='question'>
            3. Create a component with controlled input field and a button. When
            the user enters a specific value into the input (e.g., "show"), a
            new component should be rendered below the input, displaying a
            message. Otherwise, nothing should be displayed.
          </p>
          <Question3Container />
        </div>
      )
      break
    case '4':
      content = (
        <div id={'Question4'}>
          <p className='question'>
            4. Build a registration form with two password fields. Implement
            controlled components for both password inputs. Add a validation
            rule to ensure that the two passwords match before allowing the form
            submission.
          </p>
          <DualPasswordForm />
        </div>
      )
      break
    case '5':
      content = (
        <div id={'Question5'}>
          <p className='question'>
            5. Construct a select dropdown menu with multiple options. Control
            the selected option using state. When an option is selected, display
            a message showing the selected value.
          </p>
          <DropdownMenu />
        </div>
      )
      break
    case '6':
      content = (
        <div id={'Question6'}>
          <p className='question'>
            6. Build a simple todo list component with a text input for adding
            new tasks and a list to display them. Use controlled components to
            handle the input and update the list of tasks.
          </p>
          <ToDoList />
        </div>
      )
      break
    case '7':
      content = (
        <div id={'Question7'}>
          <p className='question'>
            7. Design a search filter component that consists of an input field.
            As the user types into the input, use controlled components to
            filter a list of items displayed below. The list should dynamically
            update to show only items matching the search query.
          </p>
          <SearchFilter />
        </div>
      )
      break
    case '8':
      content = (
        <div id={'Question8'}>
          <p className='question'>
            8. Create a temperature converter component with two input fields:
            one for Celsius and one for Fahrenheit. Implement controlled
            components for both inputs. When the user enters a value in one
            input, the other input should update with the converted temperature.
          </p>
          <TemperatureConverter />
        </div>
      )
      break
    case '9':
      content = (
        <div id={'Question9'}>
          <p className='question'>
            9. Implement a responsive sidebar navigation using Material-UI's
            Drawer component. Include links that allow users to navigate between
            different sections of your web app.
          </p>
          <TemporaryDrawer />
        </div>
      )
      break
    case '10':
      content = (
        <div id={'Question10'}>
          <p className='question'>
            10. Create a form with Material-UI text fields and implement form
            validation. Ensure that error messages are displayed when the user
            enters invalid data.
          </p>
          <FormContainer />
        </div>
      )
      break
    case '11':
      content = (
        <div id={'Question11'}>
          <p className='question'>
            11. Design a modal dialog component using Material-UI's Dialog
            component. Use it to display additional information or capture user
            input within your app.
          </p>
          <ModalDialog />
        </div>
      )
      break
    case '12':
      content = (
        <div id={'Question12'}>
          <p className='question'>
            12. Build a data table using Material-UI's Table component. Populate
            the table with sample data and add features like sorting and
            pagination.
          </p>
          <SortedTable />
        </div>
      )
      break
    case '13':
      content = (
        <div id={'Question13'}>
          <p className='question'>
            13. Install Yup. Define a Yup validation schema for a more complex
            form. Include validation rules for fields like email, password, and
            phone number. Ensure that error messages are displayed for each
            validation rule. Implement real-time validation feedback using
            Material-UI's TextField component. Show validation errors as the
            user types, and clear the errors when the input is valid.(Use Formik
            as well)
          </p>
          <ComplexFormContainer />
        </div>
      )
      break
    case '14':
      content = (
        <div id={'Question14'}>
          <p className='question'>
            14. Create a new form and Implement form submission handling. Ensure
            that the form cannot be submitted if there are validation errors.
            Display a summary of errors if the user attempts to submit an
            invalid form.
          </p>
          <ValidatedFormContainer />
        </div>
      )
      break

    default:
      content = <h2>Click on any Question to view it.</h2>
  }

  return (
    <>
      <nav style={{ margin: 10 }}>
        <Link to='/assignment-4/1' style={{ padding: 5 }}>
          Question1
        </Link>
        <Link to='/assignment-4/2' style={{ padding: 5 }}>
          Question2
        </Link>
        <Link to='/assignment-4/3' style={{ padding: 5 }}>
          Question3
        </Link>
        <Link to='/assignment-4/4' style={{ padding: 5 }}>
          Question4
        </Link>
        <Link to='/assignment-4/5' style={{ padding: 5 }}>
          Question5
        </Link>
        <Link to='/assignment-4/6' style={{ padding: 5 }}>
          Question6
        </Link>
        <Link to='/assignment-4/7' style={{ padding: 5 }}>
          Question7
        </Link>
        <Link to='/assignment-4/8' style={{ padding: 5 }}>
          Question8
        </Link>
        <Link to='/assignment-4/9' style={{ padding: 5 }}>
          Question9
        </Link>
        <Link to='/assignment-4/10' style={{ padding: 5 }}>
          Question10
        </Link>
        <Link to='/assignment-4/11' style={{ padding: 5 }}>
          Question11
        </Link>
        <Link to='/assignment-4/12' style={{ padding: 5 }}>
          Question12
        </Link>
        <Link to='/assignment-4/13' style={{ padding: 5 }}>
          Question13
        </Link>
        <Link to='/assignment-4/14' style={{ padding: 5 }}>
          Question14
        </Link>
      </nav>

      {content}
    </>
  )
}

export default Assignment4
