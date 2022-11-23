
import Form from './component/Form';
import React, {useState, useEffect} from 'react';
import UsersFunc from "./component/newUser"
import schema from "./validation/formSchema"
import * as yup from "yup"
import axios from "axios"

////// INITIAL STATES /////
const initialFormValues = {
  ///// TEXT INPUTS /////
  first_name: '',
  last_name: '',

  email: '',

  password: '',
  ///// CHECKBOXES /////
  terms: false,
}

const initialFormErrors = {
  last_name: '',
  last_name: '',
  email: '',
  password: '',
}

const initialUsers = []

function App() {

  const [users, setUsers] = useState(initialUsers)          // array of friend objects
  const [formValue, setFormValue] = useState(initialFormValues)
  const [formError, setFormError] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)       // boolean


//Check the values are valid//
  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormError({...formError, [name]: ""}))
    .catch(err => setFormError({...formError, [name]: err.errors[0]}))
  }



  const getUsers = () => {

    axios.get("https://reqres.in/api/users")
      .then(res => {
        setUsers(res.data.data)
        console.log(res.data.data)
      }).catch(err => console.error(err))
  }

  const inputChange = (name, value) => {
    // 🔥 STEP 10- RUN VALIDATION WITH YUP
    validate(name, value)
    setFormValue({
      ...formValue,
      [name]: value // NOT AN ARRAY
    })
  }


  const postUser = newUser => {
    axios.post(`https://reqres.in/api/users`, newUser)
    .then(res => {
      setUsers([newUser, ...users])
      
    })
    .catch(err => console.error(err))
    .finally(() => setFormValue(initialFormValues))
  }

  const onSubmit = () => {
    const newUser = {
      first_name: formValue.first_name.trim(),
      last_name: formValue.last_name.trim(),
      email: formValue.email.trim(),
      password: formValue.password.trim(),
      terms: true
    }
    postUser(newUser)
}

 useEffect(() => {
      getUsers()
      
    }, [])


    useEffect(() => {
      // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
      schema.isValid(formValue).then(valid => setDisabled(!valid))
    }, [formValue])


   


   
  return (
    <div className = "app_Wrapper">
          <Form 
            values={formValue}
            change={inputChange}
            submit={onSubmit}
            disabled={disabled}
            error={formError}/>
          
      
      <h2>Current User</h2> 
      {
        users.map( user => {
          return (
            <UsersFunc key={user.id} details={user} />
          )
        })
      }
    </div>

  );
}


export default App
