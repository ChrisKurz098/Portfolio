
import React, { useState } from "react";
import './assets/css/style.css';
import Header from "./components/Header";
import About from "./components/About";
import Works from "./components/Works";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  const [view, setView] = useState("About");

  function renderView(currentView) {
    switch (currentView) {
      case "About":
        return (<About />)
      case 'Work':
        return (<Works />)
      case 'Contact':
        return (<Contact />)
      case 'Resume':
        return (<Resume />)
      default:
        break;
    }
  }

  return (
    <div>
      <Header view={view} setView={setView}/>

      {renderView(view)}

    </div>
  )
}

export default App;
