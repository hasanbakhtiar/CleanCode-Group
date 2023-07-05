import React, { useState } from 'react'
import { Button, Col, Container,Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addBlog } from '../../manager/action./blogAction';


const BlogForm = ({valueSend}) => {
    const [title,setTitle] = useState("");
    const [auther,setAuther] = useState("");
    const handleSubmit=event=>{
        event.preventDefault();
        valueSend({
            mytitle:title,
            myauther:auther
        })


    }
    return (
        <Container>
            <div className="d-flex justify-content-center">
                <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control onChange={e=>setTitle(e.target.value)} type="text" placeholder="enter title" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Auther</Form.Label>
                            <Form.Control onChange={e=>setAuther(e.target.value)} type="text" placeholder="enter auther" />
                        </Form.Group>
                  
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </div>
        </Container>
    )
}

export default BlogForm