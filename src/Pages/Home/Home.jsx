import React, { useEffect, useState } from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck, faUtensilSpoon, faThumbTack, faSmile } from "@fortawesome/free-solid-svg-icons";
import { useLoaderData } from "react-router-dom";
import Chefs from "../../components/Chefs/Chefs";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
    const datas = useLoaderData();
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },500)
    },[])
  return (
    <main>
      {
        loading? <ClipLoader></ClipLoader> : <div>
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
      <section className="chef">
        <h2 className="section-title">Our Chefs</h2>
        <div className="grid col-3">
            {
                datas.map(data => <Chefs 
                    key={data.chef_id}
                    chefs = {data}
                    ></Chefs>)
            }
        </div>
      </section>
        </div>
      }
    </main>
  );
};

export default Home;
