import { v4 as uuid } from 'uuid';

export const addBlog = ({mytitle,myauther})=>({
    type:"ADD_BLOG",
    value:{
      id:uuid(),
      title:mytitle,
      auther:myauther
    }
  })


  export const removeBlog = ({id})=>({
            type:"REMOVE_BLOG",
            myid:id
  })
  