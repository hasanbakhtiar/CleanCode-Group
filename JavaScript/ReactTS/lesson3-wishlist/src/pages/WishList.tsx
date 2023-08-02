import { Button, Container, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { remove } from "../manager/features/wishSlice";

const WishList = () => {
  const wishdata:any = useSelector((p:any)=>p.wish);
  const dispatch:any = useDispatch();
  return (
    <Container>
      <h1 className="text-center text-danger my-5">Wish List</h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Photo</th>
          <th>Title</th>
          <th>Price</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
       {wishdata.map((item:any,count:number)=>(
         <tr key={item.id}>
         <td>{count+1}</td>
         <td><img src={item.photo} width={100} alt={item.title} /></td>
         <td>{item.title}</td>
         <td>{item.price}$</td>
         <td><Button variant="danger" onClick={()=>{dispatch(remove(item.id))}}>X</Button></td>
       </tr>
       ))}

      </tbody>
    </Table>
    </Container>
  )
}

export default WishList