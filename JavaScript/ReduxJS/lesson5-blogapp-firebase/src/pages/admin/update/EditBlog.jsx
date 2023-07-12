import React from 'react'
import BlogForm from '../BlogForm'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { editBlog, editBlogFromDatabase } from '../../../manager/action/blogAction';

const EditBlog = () => {
    const {id} = useParams();
    const blogdata = useSelector(a=>a);
    const blogdetails = blogdata.find(p=>p.id.toString() === id)
    const navigate = useNavigate();
    const dispatch = useDispatch();
  return (
    <div>
        <h1 className='text-center my-4'>Edit Blog</h1>
        <BlogForm editblog = {blogdetails} 
        valueSend={(items) => {
            dispatch(editBlogFromDatabase(blogdetails.id,items));
            console.log(items);
            navigate('/admin')
        }}
        />
    </div>
  )
}

export default EditBlog