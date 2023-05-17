import React, { Component } from "react";

const user={
    email:"test@example.com",
    pass:"test123"
}

class Login extends Component {
  constructor() {
    super();
    this.state = {
      alertText: "",
      alertStyle: "",
      inputMail: "",
      inputPass: "",
      inputType:"password",
      icon:"fa-solid fa-eye"
    };
  }

  formSubmit = (e) => {
    e.preventDefault();
    if (!this.state.inputMail || !this.state.inputPass) {
        this.setState({
            alertText: "please,fill input",
            alertStyle: "warning",
        })
    }else{
        if (this.state.inputMail === user.email && this.state.inputPass === user.pass) {
            this.setState({
                alertText: "login is successfull",
                alertStyle: "success",
            })
        }else{
            this.setState({
                alertText: "email address or password is wrong",
                alertStyle: "danger",
            })
        }
    }
  };

  render() {
    return (
      <div className="container">
        <div className="d-flex align-items-center justify-content-center flex-column">
          <h1 className="my-5">Login</h1>
          <div className="col-6">
            <h4 className={`text-center alert alert-${this.state.alertStyle}`}>
              {this.state.alertText}
            </h4>
            <form onSubmit={this.formSubmit}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  value={this.state.inputMail}
                  onChange={(e) => {
                    this.setState({ inputMail: e.target.value });
                  }}
                />
              </div>

                  <label className="form-label">Password</label>
                <div className="input-group mb-3">
                  <input

                  type={this.state.inputType}
                  value={this.state.inputPass}
                   onChange={(e) => {
                    this.setState({ inputPass: e.target.value });
                  }} className="form-control"   />
                  <button className="btn btn-outline-secondary" type="button" 
                  onClick={()=>{
                    if (this.state.icon === "fa-solid fa-eye") {
                        this.setState({
                          inputType:"text",
                          icon:"fa-solid fa-eye-slash"
                        })
                    }else{
                      this.setState({
                        inputType:"password",
                        icon:"fa-solid fa-eye"
                      })
                    }
                  }}
                  ><i className={this.state.icon}></i></button>
                </div>

             

              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
