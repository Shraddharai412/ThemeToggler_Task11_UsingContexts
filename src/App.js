import React from "react";
import ThemeToggler from "./Components/ThemeToggler";
import { ThemeProvider } from "./Components/ThemeContext";

function App(){
  //task 1
  return(
  <ThemeProvider>
    <div>
      <ThemeToggler/>
    </div>
    </ThemeProvider>
  );}
  export default App;