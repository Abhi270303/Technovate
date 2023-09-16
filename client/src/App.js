import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ConnectWallet from "./pages/ConnectWallet";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TFL from "./pages/TFL";
import Token from "./pages/Token";
import ContactUs from "./pages/ContactUs";
import SecureYourself from "./pages/SecureYourself";

function App() {
  return (
    <div>
      <Header />
      <div className=" p-3 px-4 md:p-6 md:px-16">
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/secure-yourself" element={<SecureYourself />} />
          <Route path="/tfl" element={<TFL />} />
          <Route path="/token" element={<Token />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/connect-wallet" element={<ConnectWallet />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
