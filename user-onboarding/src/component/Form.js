
import "./Form.css" 
import Users from './newUser';




const Form = (props) => {

const { 
    values,
    submit,
    change,
    disabled,
    error
    } = props


const onChange = evt => {
    const { name, value, checked, type} = evt.target
    const valueToUse = type === "checkbox" ? checked : value
    change(name, valueToUse)
}

const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  


    return(
        <div className= "form_Wrapper">
            <h1>Sign Up</h1>

            <div>{error.first_name}</div>
            <div>{error.last_name}</div>
            <div>{error.email}</div>
            <div>{error.password}</div>
            <div>{error.terms}</div>



            <form className="form">
                <label className="label_Wrapper">Name
                <div>

                <input
                    className="name_input"
                    placeholder="First Name"
                    value={values.first_name}
                    onChange={onChange}
                    name='first_name'
                    type='text'
                    />

                    <input
                    className="name_input"
                    placeholder="Last Name"
                    value={values.last_name}
                    onChange={onChange}
                    name='last_name'
                    type='text'
                    />
                </div>
                </label>

                <label className="label_Wrapper">Email
                    <input
                        placeholder="Enter Text Here"
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        type='text'
                    />
                </label>
                <label className="label_Wrapper">Password
                    <input 
                        placeholder="Enter Text Here"
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        type='text'
                    />
                </label>

                <label className="label_Wrapper Terms">Terms of Service
                <input 
                    type="checkbox"
                    name="terms"
                    onChange={onChange}
                    checked={values.true}
                />
            </label>
            
            </form>
              
          <button 
          className="submit_Button"
          onClick={onSubmit} 
          disabled={disabled}
          >
            Submit
          </button>
   
        <Users />


        </div>
    )
}

export default Form