import React, { useState } from 'react'
import { Button, Col, Container,Form } from 'react-bootstrap'


const BlogForm = ({valueSend,editblog}) => {
    const [title,setTitle] = useState(editblog?editblog.title:"");
    const [auther,setAuther] = useState(editblog?editblog.auther:"");
    const handleSubmit=event=>{
        event.preventDefault();
        valueSend({
            title:title,
            auther:auther
        })


    }
    return (
        <Container>
            <div className="d-flex justify-content-center">
                <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control value={title} onChange={e=>setTitle(e.target.value)} type="text" placeholder="enter title" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Auther</Form.Label>
                            <Form.Control value={auther} onChange={e=>setAuther(e.target.value)} type="text" placeholder="enter auther" />
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