import React, { Component } from "react";
import Contact from "./components/Contact.js";
import Header from "./components/Header.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Contact />
      </div>
    );
  }
}

export default App;
