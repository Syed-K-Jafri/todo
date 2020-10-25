import React from 'react';
import { Row, Col, Form, Button, Card } from 'react-bootstrap';

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            invalid: false
        }
    }

    createOrEditTodo = async (e) => {
        e.preventDefault();   
    }
  
    render() {
        return (
            <div className='container'>
                <Row className='custom-comp-pad'>
                    <Col md={{ span: 8, offset: 2 }} >
                        <Card className='shadow'>
                            <Card.Body>
                                <Form onSubmit={(e)=> this.createOrEditTodo(e)}>
                                    <Form.Row>
                                        <Col md={9}>
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                                <Form.Control 
                                                    type="text" 
                                                    name="title"
                                                    required
                                                    placeholder="task..." 
                                                    value={this.state.title}
                                                    onChange={(e)=> this.setState({ title: e.target.value })}
                                                    className={ this.state.invalid ? 'invalid' : '' }
                                                    onFocus={()=> this.setState({ invalid: false })}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Button 
                                                variant='outline-primary' 
                                                className='custom-width' 
                                                type="submit" 
                                                onClick={(e) => this.createOrEditTodo(e) }>
                                                    { 'ADD' }
                                            </Button>
                                        </Col>
                                    </Form.Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
};

export default Todo;