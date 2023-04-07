import { useState } from "react";
import { Navbars } from "./components/Navbars";
import Footers from "./components/Footers";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Archives } from "./components/Archives";
import { Lotpage } from "./components/Lotpage";
import ProductPage from "./components/Lotes/Productpage";
import { Example } from "./components/Faqpage/Example";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <BrowserRouter>
      <Navbars />

<Routes>

<Route path="/" element={ <Home />}/>
<Route path="/archive" element={ <Archives/>}/>
<Route path="/lots" element={<Lotpage/>}/>
<Route path="/Productpage" element={<ProductPage/>}/>
<Route path="/faq" element={<Example/>}/>

</Routes>
      
     
      <Footers />
      </BrowserRouter>
    </>
  );
}

export default App;
