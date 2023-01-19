import React from 'react';

const Frontend = () => {
  let skillku = ['HTML', 'CSS', 'Javascript', 'Tailwind CSS', 'Git', 'React JS', 'Chakra UI'];
  let levelku = ['intermediate', 'Basic', 'intermediate', 'Basic', 'intermediate', 'Basic', 'intermediate'];
  return (
    <div className="skills__content">
      <h3 className="skills__title">Front End Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          {skillku.map((item, index) => (
            <div className="skills__data">
              <i className="bx bx-check"></i>
              <div key={item}>
                <h3 className="skills__name">{item}</h3>
                <span className="skills_level">{levelku[index]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frontend;
