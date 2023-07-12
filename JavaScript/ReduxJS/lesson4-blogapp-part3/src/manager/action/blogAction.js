import { v4 as uuid } from 'uuid';

export const addBlog = ({ title, auther }) => ({
  type: "ADD_BLOG",
  value: {
    id: uuid(),
    title: title,
    auther: auther
  }
})


export const removeBlog = ({ id }) => ({
  type: "REMOVE_BLOG",
  myid: id
})


export const editBlog = (id, update) => ({
  type: "UPDATE_BLOG",
  id,
  update
})