import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="min-h-screen bg-bgBeige ">
      <NavBar />
      <main>
        <Home />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
