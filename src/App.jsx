import { useState } from "react";
import { Navbars } from "./components/Navbars";
import Topslider from "./components/Topslider";
import { Upcommingauctions } from "./components/Upcommingauction";
import Browselot from "./components/Browselot";
import { Followinglots } from "./components/Followinglots";
import Footers from "./components/Footers";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbars />
      {/* home page componens  */}
      <Topslider />
      <Upcommingauctions />
      <Browselot />
      <Followinglots />
      {/* end  */}
      <Footers/>
    </>
  );
}

export default App;
