import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeBlog } from '../../manager/action./blogAction';
import { LinkContainer } from 'react-router-bootstrap';

const Dashboard = () => {
    const newsdata = useSelector(p=>p);
    const dispatch = useDispatch();
    
  return (
 <Container>
    <h1 className='text-center my-5'>Admin Panel</h1>
    <LinkContainer to="/admin/add"><Button variant='success mb-2' >Add</Button></LinkContainer>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Auther</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
    {newsdata.map((item,count)=>(
            <tr>
            <td>{count+1}</td>
            <td>{item.title}</td>
            <td>{item.auther}</td>
            <td ><Button variant='warning'>Edit</Button></td>
            <td ><Button onClick={()=>{
                dispatch(removeBlog({id:item.id}))
            }} variant='danger'>X</Button></td>
          </tr>
    ))}
       
      </tbody>
    </Table>
    
 </Container>
  )
}

export default Dashboard