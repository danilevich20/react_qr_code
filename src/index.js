import React, { useState } from "react";
import ReactDOM from "react-dom";
import QRGenerator from "./qr-generator";

import "./styles.css";

function App() {
  const [userCode, setUserCode] = useState("Hello, World!");

  return (
    <div className="App">
      <h1>QR Code Maker</h1>
      <input
        style={{ display: "block", margin: "0 auto" }}
        type="text"
        value={userCode}
        onChange={event => setUserCode(event.target.value)}
      />
      <QRGenerator qrCode={userCode} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
