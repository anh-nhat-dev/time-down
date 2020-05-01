import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Time from "./components/Time";
import Button from "./components/Button";
import store from "./redux-setup/store";
import { Provider } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div id="main">
          <div id="title">Automatic Timer</div>
          <Time />
          <Button />
        </div>
      </Provider>
    );
  }
}

export default App;
