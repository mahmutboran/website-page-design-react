import React from "react";
import Logo from "../assets";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <main>
        <div className="main">
          <div className="h1-main">
            <h1>Professional Web Design</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
              placeat aut consequuntur unde alias, minima beatae vero incidunt
              consectetur. Sapiente!
            </p>
          </div>
          {/*    <img src="./img/showcase.jpg" alt=""> */}
        </div>
      </main>
      <section>
        <div className="section-left">
          <p>Subscribe To Our Newsletter</p>
        </div>
        <div className="section-right">
          <input
            className="section-input"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email..."
          />
          <input
            className="section-input"
            type="submit"
            id="submit"
            defaultValue="Subscribe"
          />
        </div>
      </section>
      <div className="footer-top">
        {Logo.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
