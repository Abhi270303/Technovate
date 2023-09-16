import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ConnectWallet from "./components/ConnectWallet";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/connect-wallet" element={<ConnectWallet />} />

        </Routes>
     
    </div>
  );
}

export default App;
