import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import WishList from "./pages/WishList";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./manager/store";

const App = () => {
  return (
    <BrowserRouter>
   <Provider store={store}>
   <Header />
      <Routes>
        <Route path="/" element={<Products/>}></Route>
        <Route path="/wish" element={<WishList/>}></Route>
      </Routes>
   </Provider>
    </BrowserRouter>
  )
}

export default App;