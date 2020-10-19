import React from "react";
import "./App.scss";

// Components
import Wallet from "./components/Wallet/Wallet";
import Tabs from "./components/Tabs/Tabs";

const App = () => {
  return (
    <div className="app">
      <div className="widget-container">
        <div className="widget">
          <div className="drag" />
          <Wallet />
          <Tabs />
        </div>
        <div className="additional-info">
          <div className="arrow-left" />
          <div className="arrows-left" />
          <div className="heading">
            Return Your Fees for&nbsp;invited friends
          </div>
          <div className="desc">
            Return Your Fees for invited friendsfor invited friends
          </div>
          <a href="/" className="recommend">
            Let’s recommend
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
