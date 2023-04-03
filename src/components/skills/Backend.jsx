import React from 'react';

const Backend = () => {
  let skillku = ['Node JS', 'RESTful API', 'Vercel', 'Express JS'];
  let levelku = ['Basic', 'Intermediate', 'Basic', 'Basic'];
  return (
    <div className="skills__content">
      <h3 className="skills__title">Back End developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          {skillku.map((item, index) => (
            <div className="skills__data">
              <i className="uil uil-check-circle services__modal-icon"></i>
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

export default Backend;