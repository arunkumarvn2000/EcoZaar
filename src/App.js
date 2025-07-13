import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Header from "./pages/Header";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      {/* Main content area */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:slug" element={<Home />} />
          {/* Add more routes here */}
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
