import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  ListGroup,
} from "react-bootstrap";
import AOS from "aos";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./feature/todoSlice";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  const [todoValue, setTodoValue] = useState<string>("");
  const mytodo: any = useSelector((p: any) => p.todos);
  const disptach = useDispatch();
  const todoSubmited = (e: React.FormEvent) => {
    e.preventDefault();
    disptach(add(todoValue));
    setTodoValue("");
  };
  return (
    <Container>
      <h1 className="my-5 text-center text-danger">Todo App</h1>
      <div className="d-flex justify-content-center">
        <Col md={6}>
          <Form onSubmit={todoSubmited}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Enter todo"
                value={todoValue}
                onChange={(e) => {
                  setTodoValue(e.target.value);
                }}
              />
              <Button
                variant="outline-success"
                type="submit"
                id="button-addon2"
              >
                Add
              </Button>
            </InputGroup>
          </Form>
          <ListGroup>
            {mytodo.map((item: any) => (
              <ListGroup.Item
                key={item.id}
                data-aos="fade-left"
                className="d-flex justify-content-between align-items-center"
              >
                {item.title} <Button variant="danger">X</Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </div>
    </Container>
  );
};

export default App;
