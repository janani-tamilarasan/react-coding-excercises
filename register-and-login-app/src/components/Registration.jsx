import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Registration = () =>{
   const [userForm,setUserForm] = useState({
   	firstName:'',
   	lastName: '',
   	email: '',
   	password: '',
   	passwordConfirmation: ''
   });
   const [errors,setErrors] = useState({
   	firstName:'',
   	lastName: '',
   	email: '',
   	password: '',
   	passwordConfirmation: ''
   });
   
   const navigate = useNavigate();

    const handleChange = (field,value) => {
    	setUserForm({...userForm,[field]: value})
    }

    const handleSubmit = (event) =>{
    	event.preventDefault();
    	debugger;

    	if(validateForm()){
    		localStorage.setItem("user", JSON.stringify(userForm));
    		alert('Registraion Sucess');
    		navigate('/')
    	}
    	
    }

	const validateForm = () => {
	  let newErrors = {};

	  // First Name
	  if (!userForm.firstName.trim()) {
	    newErrors.firstName = "First name is required";
	  } else if (!/^[A-Za-z]+$/.test(userForm.firstName)) {
	    newErrors.firstName = "First name should contain only letters";
	  }

	  // Last Name
	  if (!userForm.lastName.trim()) {
	    newErrors.lastName = "Last name is required";
	  } else if (!/^[A-Za-z]+$/.test(userForm.lastName)) {
	    newErrors.lastName = "Last name should contain only letters";
	  }

	  // Email
	  const emailRegExp = /^[a-zA-Z]+@[a-zA-Z]+.[a-zA-z]{2,}$/;
	  if (!userForm.email.trim()) {
	    newErrors.email = "Email is required";
	  } else if (!emailRegExp.test(userForm.email)) {
	    newErrors.email = "Invalid email format";
	  }

	  // Password
	  if (userForm.password.length < 6) {
	    newErrors.password = "Password must be at least 6 characters";
	  }

	  // Password Confirmation
	  if (userForm.password !== userForm.passwordConfirmation) {
	    newErrors.passwordConfirmation = "Passwords do not match";
	  }

	  setErrors(newErrors);

	  // If no errors → return true
	  return Object.keys(newErrors).length === 0;
	};


	return (
		<div id='register-form'>
			<h1>Registration</h1>
			<form onSubmit={handleSubmit}>
				<div>
				  <label>First Name</label>
				  <input
				    type="text"
				    value={userForm.firstName}
				    onChange={(e) => handleChange("firstName", e.target.value)}
				  />
				  {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}
				</div>

				<div>
				  <label>Last Name</label>
				  <input
				    type="text"
				    value={userForm.lastName}
				    onChange={(e) => handleChange("lastName", e.target.value)}
				  />
				  {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
				</div>

				<div>
				  <label>Email</label>
				  <input
				    type="text"
				    value={userForm.email}
				    onChange={(e) => handleChange("email", e.target.value)}
				  />
				  {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
				</div>

				<div>
				  <label>Password</label>
				  <input
				    type="password"
				    value={userForm.password}
				    onChange={(e) => handleChange("password", e.target.value)}
				  />
				  {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
				</div>

				<div>
				  <label>Confirm Password</label>
				  <input
				    type="password"
				    value={userForm.passwordConfirmation}
				    onChange={(e) =>
				      handleChange("passwordConfirmation", e.target.value)
				    }
				  />
				  {errors.passwordConfirmation && (
				    <p style={{ color: "red" }}>{errors.passwordConfirmation}</p>
				  )}
				</div>
				<button type='submit'>Register </button>
			</form>
		</div>
	)

}

export default Registration;