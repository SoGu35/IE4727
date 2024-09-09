import { useState } from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col} from "react-bootstrap";

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email)
}

function FormValidationExample() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleUsernameChange = (e) => {
    setFormData({ ...formData, username: e.target.value });
  };
  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };
  const handleConfirmPasswordChange = (e) => {
    setFormData({ ...formData, confirmPassword: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default action of the form stops from refreshing the page
    if (isValidEmail(formData.email)) {
      if(formData.password == formData.confirmPassword){
        console.log(formData)
      }
      else{
        alert("Passwords dont match")
      }
    } 
    else {
      alert('Email is invalid')
    }
  };

  return (
    <Container fluid id = "big">
      <form onSubmit={handleSubmit} id = "login">
        <div className="form-group">
          <label htmlFor="Username">Username:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            onChange={handleUsernameChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Email">Email:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Example@gmail.com"
            onChange={handleEmailChange}
            required
          />
        </div>

        <div className="form-group">
        <label htmlFor = "Password">Password:</label>
          <input
            type="password"
            className = "form-control"
            placeholder="*****"
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="form-group">
        <label htmlFor = "Confirm_Password">Confirm Password:</label>
          <input
            type="password"
            className = "form-control"
            placeholder="*****"
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        
        <Button type="submit" className="btn btn-dark" id = "submit">
          Submit
        </Button>
      </form>
    </Container>
    
  );
}
export default FormValidationExample;
