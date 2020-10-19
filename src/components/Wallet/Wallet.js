import React from "react";
import "./Wallet.scss";

// Components
import Controls from "./Controls";

const Wallet = () => {
  const available = 78.5;
  const percent = available.toString().substring(0, 2);
  return (
    <div className="wallet-wrapper">
      <div className="qr-code" />
      <div className="info">
        <div className="heading">BTC wallet</div>
        <div className="balance">0,084643 BTC</div>
        <div className="status-bar">
          <div className="available" style={{ width: `${percent}%` }} />
        </div>
      </div>
      <Controls />
    </div>
  );
};

export default Wallet;
