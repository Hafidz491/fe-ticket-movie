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
import Login from "./components/auth/Login"; 
import SignUp from "./components/auth/sign";
import ProtectedRoute from "./components/auth/protectedRoute"; 
import Profile from "./components/auth/profile";
import Trailer from "./components/movie/trailer";
import { Comingsoon } from "./components/comingSoon/comingSoon";
import { Movie } from "./components/allMovie/movie";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Heroes /><MainSection /></>} />
          <Route path="/comingsoon" element={<Comingsoon />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/Movie" element={<Movie/>} />
          <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
          <Route path="/movie/:id" element={<ProtectedRoute element={<Detail />} />} />
          <Route path="/movie/:id/trailer" element={<ProtectedRoute element={<Trailer />} />} />
          <Route path="/movie/:id/seatSelection" element={<ProtectedRoute element={<SeatSelection />} />} />
          <Route path="/movie/:id/seatSelection/checkout" element={<ProtectedRoute element={<Checkout />} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
