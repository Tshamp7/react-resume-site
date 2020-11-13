import React, { useState } from "react";
import backgroundOne from "../resources/images/pexels-bri-schneiter-346529.jpg";
import ProjectItem from "./ProjectItem";
import imageUrl from "../resources/images/githubFinder.png";
import imageUrl2 from "../resources/images/contactKeeper.png";
import imageUrl3 from "../resources/images/paybackBook.png";
import ContactForm from "./ContactForm";

const Main = () => {
  const [projects] = useState([
    {
      id: 1,
      image: imageUrl,
      title: "Github Finder",
      url: "https://my-random-thing.netlify.app/",
      description:
        "This is a github account finder I implemented using React, react-router-dom, Netlify and the Github API.",
    },
    {
      id: 2,
      image: imageUrl2,
      title: "Contact Keeper",
      url: "https://obscure-escarpment-98076.herokuapp.com/",
      description:
        "This is a contact keeper implemented using MongoDB, Express, React and Node. Deployed on Heroku! Try it out! The login is person@example.com and the password is 'password'. It may take a few seconds for the page to load as Heroku spins down hobby dynos after a while of inactivity.",
    },
    {
      id: 3,
      image: imageUrl3,
      title: "Ecommerce site",
      url: "www.paybackbook.com",
      description:
        "A RoR web app built for a local company which enabled them to transition their fundraising business to a completely online format during the COVID-19 pandemic. This project uses Rails views, a PostgresQL database, custom Stripe checkout, and an admin panel for managing orders. An automated emailer was also implemented to automatically send each days orders to the shipping center each night while marking these orders as fulfilled.",
    },
  ]);

  const topStyle = {
    width: "100%",
    height: "100vh",
    marginTop: "-30px",
    background: `url(${backgroundOne})`,
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    overflow: "hidden",
  };

  return (
    <div className="main-container">
      <div style={topStyle}>
        <div className="banner-container" id="introduction">
          <div className="banner-contents">Hi!</div>
          <div className="banner-contents">I'm Tom Shamp!</div>
        </div>
      </div>
      <div className="subsection-container" id="about">
        <div className="subsection">
          <div className="fa-container">
            <i class="fas fa-question-square fa-2x"></i>
          </div>
          <h5>About</h5>
          <h6>Some information about me</h6>
          <p>
            I had originally started out working as a researcher in
            pharmaceutical sciences, in particular, as a molecular biologist. I
            enjoyed this career as it allowed me to solve complex problems in my
            day to day work and to constantly keep learning. After 5 years in
            this field however, I began to feel as if I had reached a growth
            ceiling unless I obtained a more advanced degree. During this time,
            which was about a year and a half ago, I became interested in
            computer programming through my wife and began to think that this
            was something I could really enjoy and see myself doing for a
            career. My first language was Ruby and I enjoy using its most
            well-known framework, Rails as well! My second language is
            Javascript which I have also come to enjoy and this led me to React,
            which I am currently building this site with! I am looking forward
            to continuing to learn and grow as a full-stack developer and
            computer-scientist for the rest of my life!
          </p>
          <p>Some of my other hobbies include:</p>
          <ul>
            <li>
              Restoring classic cars, currently working on a 1970 Chevy Nova and
              a 1936 Dodge Coupe
            </li>
            <li>Building desktop computers</li>
            <li>Training with weights and calisthenics</li>
            <li>Archery</li>
          </ul>
        </div>
      </div>

      <div className="subsection-container" id="projects">
        <div className="subsection">
          <div className="fa-container folder">
            <i class="fas fa-folder fa-2x"></i>
          </div>
          <h5>Projects</h5>
          <p>
            Here is a list of technologies which are showcased by my various
            projects! Click on the images to be brought to the live, hosted
            project!
          </p>
          <ul className="projects-list">
            {projects.map((project) => {
              return (
                <li>
                  <ProjectItem
                    key={project.id}
                    image={project.image}
                    title={project.title}
                    url={project.url}
                    description={project.description}
                  />
                </li>
              );
            })}
          </ul>
          <p className="project-subtext">
            There also much more to see on my Github account! Feel free to check
            it out!
            <a className="btn" href="https://github.com/Tshamp7">
              {" "}
              <i className="fab fa-github fa-lg"></i>{" "}
            </a>
          </p>
        </div>
      </div>

      <div className="subsection-container" id="contact">
        <div className="subsection">
          <div className="fa-container">
            <i class="fas fa-envelope-square fa-2x"></i>
          </div>
          <h5>Contact Me</h5>
          <p>Want to get in touch? Send me an email here!</p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Main;
