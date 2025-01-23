import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import AthleteList from "./components/AthleteList";
import AthleteDetails from "./components/AthleteDetails";
import TraitsPage from "./components/TraitsPage";
import MadeOrBorn from "./components/MadeOrBorn";
import Bk from "./Images/BK.png"
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router basename="/website_415e5485">
       <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<AthleteList />} />
          <Route path="/athlete/:name" element={<AthleteDetails />} />
          <Route path="/traits" element={<TraitsPage />} />
          <Route path="/made-or-born" element={<MadeOrBorn />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


function Header() {
  const location = useLocation();


  if (location.pathname === "/") {
    return (
      <>
        <h1>Elite Athletes</h1>
        <p>Athletes are more than just hard workers&mdash;they are a rare blend of natural talent, relentless dedication, and extraordinary traits that set them apart from the rest of us. While practice and training are essential, world-class athletes often possess innate abilities that give them the edge in high-pressure moments. A lot of the information provided is from Michael MacKelvie, most from his video <a href="https://www.youtube.com/watch?v=qIG1ZT3-a_A" target="_blank" rel="noreferrer">Elite Athletes See a Different World - A Visual & "Quiet" Analysis</a></p>
<p><strong>Quiet Eye</strong>, <strong>Visual Acuity &amp; Depth Perception</strong>, <strong>Unwavering Focus</strong>, <strong>Superior Spatial Awareness</strong>, and <strong>Elite Motor Coordination</strong> are just a few of the unique characteristics that enable these individuals to excel in their respective sports. <a href="/website_415e5485/traits">You can see the rest and their descriptions here.</a> These traits, honed through years of practice and discipline, allow them to perform feats that seem almost superhuman.</p>
<p>This site is to look at the uniqueness of these stars. Explore the profiles of elite athletes, dive into their distinctive qualities, and discover the fascinating science behind what makes them stand out. From their ability to process complex visual information in milliseconds to their mental resilience under pressure, this website showcases the extraordinary traits that define greatness.</p>
<p>Now this asks the same old question: <a href="/website_415e5485/made-or-born">are the best athletes made, or born?</a> While genetics can provide a foundation for certain advantages like height, speed, or natural coordination, training, discipline, and opportunity play equally significant roles in determining greatness. As explored in the video <a href="https://www.youtube.com/watch?v=iZ3gl6mYA-4" target="_blank" rel="noreferrer">Were the Best Athletes Born to Be Great?</a>, the path to elite performance is a complex interplay between nature and nurture. This site not only celebrates the extraordinary traits of these athletes but also delves into the fascinating science behind what truly sets them apart.</p>

      </>
    );
  }


  return null;
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        borderTop: "1px solid #ccc",
        marginTop: "20px",
      }}
    >
      <span>&copy; {currentYear} Elite Athletes</span>
<div>
  <span>Powered by </span>
  <a href="https://bkemboi.com/" target="_blank" rel="noreferrer"><img 
        src={Bk}
        alt="Elite Athletes Logo"
        style={{ height: "30px" }}
      /></a>
</div>
    </footer>
  );
}

export default App;
