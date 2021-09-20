import React from "react";
import "./TeamMembers.css";
import kennedy from "../../images/kennedy.png";
import mijan from "../../images/mijan.png";
import mritunjoy from "../../images/mritunjoy.png";
import munshi from "../../images/munshi.png";
import wildan from "../../images/wildon.png";
import zaid from "../../images/zaid.png";
import ebosele from "../../images/ebosele.png";
import bishen from "../../images/bishen.png";
import GithubIcon from "../../images/github.png";
import DribbleIcon from "../../images/dribble.png";
import ellipse from "../../images/ellipse.png";

const TeamMembers = () => {
  return (
    <>
      <h2 className="intro">
        Let's Introduce Our&nbsp;<span className="intro-team"> Team</span>
      </h2>
      <section className="teammembers-section">
        <div>
          <ul className="circle-container">
            <li>
              <img src={kennedy} />
            </li>
            <li>
              <img src={wildan} />
            </li>
            <li>
              <img src={bishen} />
            </li>
            <li>
              <img src={mritunjoy} />
            </li>
            <li>
              <img src={zaid} />
            </li>
            <li>
              <img src={munshi} />
            </li>
            <li>
              <img src={ebosele} />
            </li>
            <li>
              <img src={mijan} />
            </li>
            {/* <li>
              <img className="ellipse" src={ellipse} />
            </li> */}
            <li>
              <h2>
                <span className="logo-web">Web</span>
                <span className="logo-stack">Stack</span>
              </h2>
            </li>
          </ul>
        </div>
        <div className="profile-description">
          <h2>Our Profile</h2>
          <h3>Consists of team members who are experts in their fields</h3>
          <p>
            Our members come from various countries and are very talented in
            their fields
          </p>
          <div className="button-container">
            <a href="" className="button">
              <img src={DribbleIcon} alt="" />
              See our Dribble
            </a>
            <a href="" className="button">
              <img src={GithubIcon} alt="" />
              See our Github
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMembers;
