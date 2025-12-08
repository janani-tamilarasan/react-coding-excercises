import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginForm = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateLogin()) return;

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("No user registered. Please register first.");
      return;
    }

    if (user.email === form.email && user.password === form.password) {
      navigate('/home');
    } else {
      alert("Invalid email or password");
    }
  };

  const validateLogin = () => {
    let errorMessages = {};

    Object.keys(form).forEach((field) => {
      if (!form[field].trim()) {
        errorMessages[field] = `${field} is required`;
      }
    });

    setErrors(errorMessages);
    return Object.keys(errorMessages).length === 0;
  };

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
    setErrors((prev) => ({ ...prev, [field]: "" })); // clear error when typing
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <div>
          <label>Email</label>
          <input
            type='text'
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label>Password</label>
          <input
            type='password'
            value={form.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password}</p>
          )}
        </div>

        <button type='submit'>Login</button>
      </form>

      <Link to='/register'>Register</Link>
    </div>
  );
};

export default LoginForm;
