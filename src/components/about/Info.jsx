import React from 'react';

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Achievement</h3>
        <span className="about__subtitle">10+</span>
        <span className="about__subtitle"> Project</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1+ Years</span>
        <span className="about__subtitle"> Work Experiences</span>
      </div>

      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Contact</h3>
        <span className="about__subtitle">
          Fast Response <br />
          24 Hours
        </span>
      </div>
    </div>
  );
};

export default Info;
