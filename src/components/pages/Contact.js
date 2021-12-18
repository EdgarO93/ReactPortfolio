import React, { useState } from "react";
import './style.css';
import { Form, Button } from "react-bootstrap";
import'bootstrap/dist/css/bootstrap.min.css';
import { validateEmail } from "../../utils/helpers";

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [FullName, setFullName] = useState("");
  const [Message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "FullName") {
      setFullName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the Name is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
      // Then we check to see if the name is not valid.
      if (!FullName) {
        setErrorMessage("Name is required");
       
        return;
    }
    if (!Message) {
      setErrorMessage("Message is required");
     
      return;
  }
    alert(`Hello ${FullName}, thanks for submitting!`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setFullName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div>
        <h1>Contact Page</h1>
      <h2>Hello {FullName}</h2>
  
    <Form>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label style={{ color: "white" }} >Name </Form.Label>
      <Form.Control   value={FullName}
          name="FullName"
          onChange={handleInputChange}
          type="text"
          placeholder="Edgar Ortega" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
      <Form.Label style={{ color: "white" }} >Email address</Form.Label>
      <Form.Control   value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="edort93@gmail.com"/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label style={{ color: "white" }} >Message</Form.Label>
      <Form.Control   value={Message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message" as="textarea" size="lg" rows={3} />
    </Form.Group>
  </Form>
  <Button type="button" onClick={handleFormSubmit} variant="outline-light">
          Submit
        </Button>
        {errorMessage && (
        <div>
          <p className="error-text" >{errorMessage}</p>
        </div>
      )}
      </div>
  );
}
export default Contact;
