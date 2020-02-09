import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/Shop";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/SignInAndSignUp";
import Header from "./components/header/Header";

import { auth, createUserProfileDocument } from "./firebase/firebase";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  // know when firebase user sign in/ signout
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      }
      this.setState({
        currentUser: userAuth
      });
    });
  }

  // close subscription
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
