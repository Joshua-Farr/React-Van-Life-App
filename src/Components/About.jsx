import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./About.css";

export default function About() {
  return (
    <>
      <NavBar />
      <div>
        {/* <img
          src="../assets/man-on-a-van.png"
          alt="image of a man sitting on top of a camper in the evening"
        /> */}

        <div className="about-section">
          <h1 className="main-text">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p className="about-text">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉) Our
            team is full of vanlife enthusiasts who know firsthand the magic of
            touring the world on 4 wheels.
          </p>

          <div className="explore-card">
            <h2>Your destination is waiting. Your van is ready.</h2>
            <button>Explore our vans</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
