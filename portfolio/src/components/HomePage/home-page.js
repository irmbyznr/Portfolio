import React from "react";
import { Header } from "./header";
import "./home-page.scss";

export const HomePage = () => {
  var ReactRotatingText = require("react-rotating-text");
  return (
    <section id="home">
      <Header />
      <main className="main-section">
        <div className="overlay"></div>
        <div className="home-content">
          <span>HI! I AM</span>
          <h1>Irem Beyzanur Ofluoglu</h1>
          <h2>
            I'm a
            <span>
              <ReactRotatingText items={["Frontend Developer"]} />
            </span>
          </h2>
        </div>
      </main>
    </section>
  );
};
