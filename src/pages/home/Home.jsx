import React from "react";
import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Aavesh Attar.</span>
            Full Stack Developer
          </h1>

          <p className="home__description">
            Full-stack Developer with expertise in Java, Spring Boot, and
            ReactJS, specializing in developing scalable, secure web
            applications and microservices architecture. Proficient in building
            REST APIs, integrating cloud services (AWS, Azure), and utilizing
            DevOps tools to enhance performance and reliability. Adept at
            optimizing application security with JWT and implementing CI/CD
            pipelines. Proven track record of resolving system issues and
            delivering high-performance solutions in Agile/Scrum environments.
          </p>

          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
