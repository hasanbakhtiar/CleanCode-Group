import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { productType } from "../types/product";
import { useDispatch } from "react-redux";
import { add } from "../manager/features/wishSlice";
import Icon from "./Icon";




const SingleCard:React.FC<any> = ({alldata}) => {
  const dispatch:any = useDispatch();
  return (
    <Col sm={12} md={4}>
      <Card>
        <Card.Img variant="top" src={alldata.photo} />
        <Card.Body>
          <Card.Title>{alldata.title}</Card.Title>
          <Card.Text>
          {alldata.price}$
          </Card.Text>
          <Icon value={alldata.rate}/>
          <p>{alldata.rate}</p>
          <Button variant="primary" onClick={()=>{dispatch(add(alldata))}}>Add wishlist</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleCard;
