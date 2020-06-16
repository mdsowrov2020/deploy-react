import React, { Component } from 'react'
import {Form,Button} from 'react-bootstrap'
import './contact.css'


const Contact =() =>{
    return(
        <>
        
            <section className="py-5 mt-5">
                <div className="contact_main">

                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            
                                   <div className="form"> 
                                   <h2>Get in touch</h2>
                                   <Form>
                                    <div className="row justify-content-center">
                                    <div className="col-md-6">
                                            <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="text" placeholder="Name" className="form_input" />
                                            <Form.Text className="text-muted">
                                            </Form.Text>
                                        </Form.Group>
                                            </div>
                                            <div className="col-md-6">
                                            <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Enter email" className="form_input" />
                                            <Form.Text className="text-muted">
                                            </Form.Text>
                                        </Form.Group>
                                            </div>
                                            <div className="col-md-12"> 
                                            
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <Form.Control as="textarea" rows="3" placeholder="Write message here..." />
                                                </Form.Group>
                                        </div>
                                            <div className="col-md-12">
                                                
                                        <Button variant="primary" type="submit" className="btn btn-block custom_button">
                                            Send
                                        </Button>
                                            </div>
                                        </div>
                                    </Form>
                                   </div>
                            
                        </div>
                    </div>

                </div>
            </section>
        
        </>
    )
}

export default Contact;