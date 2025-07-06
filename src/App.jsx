import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-bgBeige ">
      <NavBar />
      <main>
        <Home />
      </main>
    </div>
  )
}

export default App;
