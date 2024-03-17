import React from 'react'
import {Form, Button, FloatingLabel} from "react-bootstrap"
import "./contact.scss"

export const Contact = () => {
  return (
    <Form className='contact-form row'>
    <Form.Group className="mb-3 col-sm-12" controlId="formBasicName">

      <Form.Control type="text" placeholder="Enter your name" />
    </Form.Group>

    <Form.Group className="mb-3 col-sm-12" controlId="formBasicEmail">

      <Form.Control type="email" placeholder="Enter your email adress" />
    </Form.Group>
    <Form.Group className="mb-3 col-sm-12" controlId="formBasicPhoneNumber">


    <Form.Group controlId="floatingTextarea2" >
        <Form.Control
          as="textarea"
          placeholder="Leave a message here"
          style={{ height: '200px' }}
        />
      </Form.Group>
    </Form.Group>
    <Button variant="primary" type="submit" className='col-sm-12'>
      Submit
    </Button>
  </Form>
  )
}
