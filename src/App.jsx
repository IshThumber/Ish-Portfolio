import React from "react";
// import "./App.css";
import "./App1.css";

import Content from "./components/Main/content/Content";
import About from "./components/About/about";
const App = () => {
   return (
      <>
         <div className="main_container">
            <div>
               <Content />
            </div>
            <div>
               {/* <About /> */}
            </div>
         </div>
      </>
   );
};

export default App;
