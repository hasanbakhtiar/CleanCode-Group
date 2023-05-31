import { Component } from "react"
import { Link } from "react-router-dom"

class Home extends Component{
    render(){
      return(
            <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">Best Shop</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link  className="btn btn-primary btn-lg px-4 gap-3" to="/products">Shop now</Link>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact</button>
          </div>
        </div>
      </div>

      )
    }
  }

  export default Home