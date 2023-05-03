import React from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck, faUtensilSpoon, faThumbTack, faSmile } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <main>
      <div className="banner">
        <h1 className="title">
          All <span>Chinese Recipes</span> are here.
        </h1>
        <button className="btn-primary">Explore More</button>
      </div>
      <section className="feature">
        <h2 className="section-title">Our Features</h2>
        <div className="grid col-4">
          <div className="feature-card">
            <FontAwesomeIcon icon={faUserCheck} className="icon" />
            <p>90+ Chefs</p>
          </div>
          <div className="feature-card">
            <FontAwesomeIcon icon={faUtensilSpoon} className="icon" />
            <p>200+ Recipes</p>
          </div>
          <div className="feature-card">
            <FontAwesomeIcon icon={faThumbTack} className="icon" />
            <p>Easy Learning</p>
          </div>
          <div className="feature-card">
            <FontAwesomeIcon icon={faSmile} className="icon" />
            <p>Be Happy</p>
          </div>
        </div>
      </section>
      <section className="partners">
        <h2 className="section-title">Our Partners</h2>
        <div className="grid col-4">
            <div className="img-box">
                <img src="./partner-01.png" alt="" />
            </div>
            <div className="img-box">
                <img src="./partner-02.png" alt="" />
            </div>
            <div className="img-box">
                <img src="./partner-03.png" alt="" />
            </div>
            <div className="img-box">
                <img src="./partner-04.png" alt="" />
            </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
