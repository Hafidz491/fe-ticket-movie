import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Heroes } from "./components/heroes/Heroes";
import { MainSection } from "./components/mainSection/MainSection";
import Navbar from "./components/navbar/Navbar";
import ContactUs from "./components/contact/ContactUs";
import Detail from "./components/movie/Detail"; 
import SeatSelection from "./components/movie/seatSelection"; 
import Checkout from "./components/movie/checkout"; 


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Heroes />
                <MainSection />
              </>
            }
          />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/movie/:id" element={<Detail/>} />
          <Route path="/movie/:id/seatSelection" element={<SeatSelection />} />
          <Route path="/movie/:id/seatSelection/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
