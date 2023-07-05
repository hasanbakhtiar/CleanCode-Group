import { createStore } from "redux"
import { blogReducer } from "../reducer/blogReducer";

const configureStore = ()=>{
    const store = createStore(blogReducer);
    return store;
}

export default configureStore;