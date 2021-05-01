import React, { useState } from 'react';
import Nav from './components/Nav';
import Project from './components/Project';
import Contact from './components/Contact';
import About from './components/About'
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  const [itemSelected, setItemSelected] = useState("about");

  return (
    <div className="wrapper">
      <header className="header">
        <Nav
          itemSelected={itemSelected}
          setItemSelected={setItemSelected}
        ></Nav>
      </header>
      <main>
        <div className="projects">
          { itemSelected === "portfolio" && (<Project />)}
          { itemSelected === "about" && (<About />)}
          { itemSelected === "contact" && (<Contact />)}
          { itemSelected === "resume" && (<Resume />)}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
