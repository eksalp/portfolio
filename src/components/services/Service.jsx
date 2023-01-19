import React, { useState } from 'react';
import './service.css';
import '../qualification/qualification.css';
import AboutImage from '../../assets/speaker.png';
const Service = () => {
  const [pilih, setPilih] = useState(1);
  const pilihan = (index) => {
    setPilih(index);
  };

  const [togel, setTogel] = useState(0);
  const togelTab = (index) => {
    setTogel(index);
  };
  return (
    <section className="services section">
      <h2 className="section__title">Achievements and Honors</h2>
      <span className="section__subtitle">What I Have Reached and Done.</span>
      <div className="qualification__tabs">
        <div onClick={() => pilihan(1)} className={pilih === 1 ? 'service__button service__active button--flex' : 'service__button button--flex'}>
          All
        </div>
        <div onClick={() => pilihan(2)} className={pilih === 2 ? 'service__button service__active button--flex' : 'service__button button--flex'}>
          National
          {''}
        </div>
        <div onClick={() => pilihan(3)} className={pilih === 3 ? 'service__button service__active button--flex' : 'service__button button--flex'}>
          Others
        </div>
      </div>

      <div className={pilih === 1 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
        <div className="services__container container grid">
          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="sevices__title">
                Virtual Internship <br /> Program <br /> Bank Muamalat
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(1)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 1 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Visual design</h3>
                <div className="about__images">
                  <img src={AboutImage} alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quidem?</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Lorem, ipsum dolor.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Lorem, ipsum dolor.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Lorem, ipsum dolor.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="sevices__title">
                Virtual Internship <br /> Program <br /> Bank Muamalat
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(1)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 1 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Visual design</h3>
                <div className="about__images">
                  <img src={AboutImage} alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quidem?</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Lorem, ipsum dolor.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Lorem, ipsum dolor.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Lorem, ipsum dolor.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="sevices__title">
                Virtual Internship <br /> Program <br /> Bank Muamalat
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(1)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 1 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Visual design</h3>
                <div className="about__images">
                  <img src={AboutImage} alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quidem?</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Lorem, ipsum dolor.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Lorem, ipsum dolor.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Lorem, ipsum dolor.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
