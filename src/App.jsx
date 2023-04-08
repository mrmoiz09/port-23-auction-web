import { useState } from "react";

import Footers from "./components/Footers";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Archives } from "./components/Archives";
import { Lotpage } from "./components/Lotpage";
import ProductPage from "./components/Lotes/Productpage";
import { Example } from "./components/Faqpage/Example";
// import {Navbars}  from "./components/Header"
import { Cartpage } from "./components/Cart/Cartpage";
import Header from "./components/Header";
import { Accountpage } from "./components/Accountpage";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
   
      <BrowserRouter>

<Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archives />} />
          <Route path="/lots" element={<Lotpage />} />
          <Route path="/Productpage" element={<ProductPage />} />
          <Route path="/faq" element={<Example />} />
          <Route path="/cartpage" element={<Cartpage/>}/>
          <Route path="/account" element={<Accountpage/>}/>

        </Routes>

        <Footers />
      </BrowserRouter>
    </>
  );
}

export default App;
