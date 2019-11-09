import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import Header from '../layout/Header';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
    <div>
        <Header/>
      <div className="container">
       
        <div className="row offset-3">
          <div className="col s8 ">
            
            <div className="col s12">
              <h1  className=" mt-30" 
              style={{marginLeft:"20%"}}
              >
                <b>Login</b> 
              </h1>
              <br/>
              <br/>
              


             
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s10 m8">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field col s10 m8">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div className="col s12 " style={{ paddingLeft: "11.250px" }}>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              
              </p>
                <button
                  style={{
                    width: "65%",
                    borderRadius: "15px",
                    letterSpacing: "1.5px",
                    marginTop: "2rem",
    
                    padding:"5px",
                    fontWeight:"bold",
                    fontSize:"25px",
                    border:"2px solid white"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3 text-white"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
