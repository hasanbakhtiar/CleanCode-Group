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
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={this.state.inputPass}
                  onChange={(e) => {
                    this.setState({ inputPass: e.target.value });
                  }}
                />
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
