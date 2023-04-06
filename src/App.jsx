import { useState } from "react";
import { Navbars } from "./components/Navbars";
import Footers from "./components/Footers";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Archives } from "./components/Archives";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <BrowserRouter>
      <Navbars />

<Routes>

<Route path="/" element={ <Home />}/>
<Route path="/archive" element={ <Archives/>}/>
</Routes>
      
     
      <Footers />
      </BrowserRouter>
    </>
  );
}

export default App;
