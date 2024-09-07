import { useState } from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col} from "react-bootstrap";

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
    console.log(formData);
  };

  return (
    <Container fluid id = "big">
      <form onSubmit={handleSubmit} id = "login">
        <div class="form-group">
          <label for="Username">Username:</label>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            onChange={handleUsernameChange}
          />
        </div>

        <div class="form-group">
          <label for="Email">Email:</label>
          <input
            type="text"
            class="form-control"
            placeholder="Example@gmail.com"
            onChange={handleEmailChange}
          />
        </div>

        <div class="form-group">
        <label for = "Password">Password:</label>
          <input
            type="text"
            class = "form-control"
            placeholder="*****"
            onChange={handlePasswordChange}
          />
        </div>
        <div class="form-group">
        <label for = "Confirm_Password">Confirm Password:</label>
          <input
            type="text"
            class = "form-control"
            placeholder="*****"
            onChange={handleConfirmPasswordChange}
          />
        </div>
        
        <Button type="submit" class="btn btn-dark" id = "submit">
          Submit
        </Button>
      </form>
    </Container>
    
  );
}
export default FormValidationExample;
