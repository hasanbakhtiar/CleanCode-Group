import React, { Component } from 'react'
import { Button, Col, Form, InputGroup } from 'react-bootstrap'

class Search extends Component {
    constructor(){
        super();
        this.state={
            keyword:""
        }
    }
    searchSubmit=e=>{
        e.preventDefault();
        this.props.formData(this.state.keyword);
    }
    render() {
        return (
            <div className="d-flex align-items-center justify-content-center flex-cloumn my-5">
                <Col md={6}>
                   <form onSubmit={this.searchSubmit}>
                   <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Enter username"
                            onChange={e=>{this.setState({
                                keyword:e.target.value
                            })}}
                        />
                        <Button variant="outline-dark" id="button-addon2" type='submit'>
                            Search
                        </Button>
                    </InputGroup>
                   </form>
                </Col>
            </div>
        )
    }
}

export default Search