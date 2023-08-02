import { Container, Row } from "react-bootstrap"
import SingleCard from "../components/SingleCard"
import productdata from "../data/product"

const Products = () => {
  return (
    <div>
      <h1 className="text-center my-5">Product List</h1>
      <Container>
        <Row className="g-5">
          {productdata.map((item:any)=>(
            <SingleCard key={item.id} alldata={item}/>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Products