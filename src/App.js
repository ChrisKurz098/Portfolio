
import React, {useState} from "react";
import './assets/css/style.css';
import Header from "./components/Header";
import About from "./components/About";
function App() {
  const [view, setView] = useState(<About/>);
  console.log(view);
  return (
    <div>
     <Header
     setView={setView}
     />

   {view}

    </div>
  )
}

export default App;
