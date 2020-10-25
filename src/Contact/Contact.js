import React from 'react';
import { Row, Col, Form, Button, Card } from 'react-bootstrap';

class Contact extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      comments: ''
    }
  }
  
  handleTextChange = (e) => {
    this.setState({ [e.name]: e.value });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ firstName: '', lastName: '', email: '', comments: '' });
  }


  render() {
    return (
      <div className="container">
        <Row className='custom-comp-pad'>
          <Col md={{ span: 8, offset: 2 }}>
            <Card className="shadow">
                <Card.Body>
                    <Form onSubmit={(e) => this.handleSubmit()}>
                        <Form.Row>
                            <Col>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control 
                                type="text"
                                name="firstName"
                                required 
                                placeholder="Enter First Name"
                                value={this.state.firstName}
                                onChange={(e) => this.handleTextChange(e.target)}
                                />
                            </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control 
                                type="text"
                                name="lastName" 
                                required
                                placeholder="Enter Last Name"
                                value={this.state.lastName}
                                onChange={(e) => this.handleTextChange(e.target)}
                                />
                            </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                type="email"
                                name="email" 
                                required
                                placeholder="example@gmail.com"
                                value={this.state.email}
                                onChange={(e) => this.handleTextChange(e.target)}
                                />
                            </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                            <Form.Group>
                                <Form.Label>Comments</Form.Label>
                                <Form.Control 
                                as="textarea"
                                rows={3}
                                required
                                name="comments" 
                                placeholder="Comments..."
                                value={this.state.comments}
                                onChange={(e) => this.handleTextChange(e.target)}
                                />
                            </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Button 
                                    className="custom-width" 
                                    variant="primary" 
                                    type="submit" 
                                    onClick={(e)=> this.handleSubmit(e)}
                                >
                                    Submit
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
};

export default Contact;