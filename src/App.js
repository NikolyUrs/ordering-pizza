import { Route, Routes } from "react-router-dom";
import { Header } from "./componenrs/";
import { Cart, Home } from "./Pages";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
