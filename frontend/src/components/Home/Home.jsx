import React from "react";
import "./Home.css";
import handIicon from "../Assests/hand-icon.jpg";
import girl from "../Assests/girl.jpg";

const Home = () => {
  return (
    <div className="shop">
      <div className="shop-left">
        <h1>NEW ARRIVAL ONLY</h1>
      <div>
      <div className="one">
        <h2>new</h2>
        <img className="handIcon" src={handIicon} alt="handIcon" />
       </div>
        <h2>collections for everyone</h2>
       </div>
        <div>
        <button className="btn">Latest Collection</button>
        </div>
      </div>
      <div className="shop-right">
        <img className="girl" src={girl} alt="" />
        
      </div>
    </div>
  );
};

export default Home;
