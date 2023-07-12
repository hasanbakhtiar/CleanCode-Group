import { applyMiddleware, compose, createStore } from "redux"
import { blogReducer } from "../reducer/blogReducer";
import thunk from "redux-thunk";

const composeEnhancers =  compose;
const configureStore = () => {
    const store = createStore(blogReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}

export default configureStore;