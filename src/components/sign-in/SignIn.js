import React, { Component } from "react";

import FormInput from "../../components/form-input/FormInput";

import CustomButton from "../../components/custom-button/CustomButton";

import { signInWithGoogle } from "../../firebase/firebase";

import "./signin.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange = event => {
    // pull value and name off our event
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            handleChange={this.handleChange}
            type="email"
            label="email"
            value={this.state.email}
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
