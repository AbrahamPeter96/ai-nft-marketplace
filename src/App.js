import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {
  Creators,
  Collections,
  Testimonials,
  Aboutus,
  Bid,
  Buy,
  Sell,
  Detail,
  Detailed,
  SignIn,
  SignUp,
  MoreDetail,
  Wallet
} from "./Pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/Collections" />
          </Route>
          <Route path="/Collections">
            <Collections />
          </Route>
          <Route path="/Creators">
            <Creators />
          </Route>
          <Route path="/Detail">
            <Detail />
          </Route>
          <Route path="/MoreDetail">
            <MoreDetail />
          </Route>
          <Route path="/Detailed">
            <Detailed />
          </Route>
          <Route path="/Wallet">
            <Wallet />
          </Route>
          <Route path="/Testimonials">
            <Testimonials />
          </Route>
          <Route path="/Signin">
            <SignIn />
          </Route>
          <Route path="/Signup">
            <SignUp />
          </Route>
          <Route path="/Aboutus">
            <Aboutus />
          </Route>
          <Route path="/Buy">
            <Buy />
          </Route>
          <Route path="/Bid">
            <Bid />
          </Route>
          <Route path="/Sell">
            <Sell />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
