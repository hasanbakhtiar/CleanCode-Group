import React from 'react'
import BlogForm from '../BlogForm'
import { useDispatch } from 'react-redux'
import { addBlog } from '../../../manager/action./blogAction';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div>
            <h1 className='text-center my-3'>Add Blog</h1>
            <BlogForm valueSend={(items) => {
                dispatch(addBlog({ mytitle: items.mytitle, myauther: items.myauther }));
                navigate('/admin')
            }} />
        </div>
    )
}

export default AddBlog