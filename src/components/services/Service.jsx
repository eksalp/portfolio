import React, { useState } from 'react';
import './service.css';
import '../qualification/qualification.css';
import AH1N from '../../assets/AH1N.png';
import AH2N from '../../assets/AH2N.jpg';
import AH3N from '../../assets/AH3N.jpg';
import AH4N from '../../assets/AH4N.jpg';
import AH1O from '../../assets/AH1O.png';
import AH2O from '../../assets/AH2O.png';
import AH21O from '../../assets/fs.jpg';
import AH3O from '../../assets/AH3O.jpg';
import AH4O from '../../assets/AH4O.png';
import AH5O from '../../assets/AH5O.png';
import AH6O from '../../assets/AH6O.jpg';
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
              <i className="uil uil-head-side-cough services__icon"></i>
              <h3 className="sevices__title">
                <br />
                Speaker
                <br /> ReadyLearn
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(1)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 1 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Speaker at ReadyLearn</h3>
                <div className="about__images">
                  <img src={AH1N} alt="" className="imagesss" />
                </div>
                <p className="services__modal-description">Be a speaker at ReadyLearn 2022</p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Provide some instructions for passing the test of SBMPTN</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Give some tips for the test of SBMPTN</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-bag-alt services__icon"></i>
              <h3 className="sevices__title">
                Bank Muamalat
                <br /> Program <br /> Virtual Internship
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(2)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 2 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Bank Muamalat Virtual Internship Program </h3>
                <div className="about__images">
                  <img src={AH2N} alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual internship activities at Bank Muamalat by Rakamin Academy</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Analytic some data business problems</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Participating in course by Bank Muamalat</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">giving some idea for creating new solution</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-trophy services__icon"></i>
              <h3 className="sevices__title">
                The Winner
                <br /> Startup Team <br /> SWI X UNS
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(4)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 4 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">The winner startup team by SWI X UNS 2022</h3>
                <div className="about__images">
                  <img src={AH3N} alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">The winner startup team by Startupweekend x Universitas Sebelas Maret (UNS Innovation Hub)</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Analytic some data business problems</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Participating in course by Bank Muamalat</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">giving some idea for creating new solution</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-graduation-cap services__icon"></i>
              <h3 className="sevices__title">
                Hukum Bisnis
                <br /> Course <br /> Universitas Indonesia
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(5)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 5 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Bank Muamalat Virtual Internship Program </h3>
                <div className="about__images">
                  <img src={AH4N} alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual internship activities at Bank Muamalat by Rakamin Academy</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Analytic some data business problems</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Participating in course by Bank Muamalat</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">giving some idea for creating new solution</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-book-open services__icon"></i>
              <h3 className="sevices__title">
                Kormo Jobs' <br /> Academy: <br /> Microsoft Office
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(3)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 3 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Microsoft Office Training</h3>
                <div className="about__images">
                  <img src={AH1O} alt="" className="aa" />
                </div>

                <p className="services__modal-description">Participating Microsoft Office online course by Kormo Jobs' in 2 days</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Participating online course about Microsoft Word</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Participating online course about Microsoft Excel</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Take an Microsoft Office online test </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-book-open services__icon"></i>
              <h3 className="sevices__title">
                <br /> Program <br /> Virtual Internship
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(6)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 6 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Bank Muamalat Virtual Internship Program </h3>
                <div className="about__images">
                  <img src={AH2O} alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual internship activities at Bank Muamalat by Rakamin Academy</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Analytic some data business problems</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Participating in course by Bank Muamalat</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">giving some idea for creating new solution</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-book-open services__icon"></i>
              <h3 className="sevices__title">
                Bank Muamalat
                <br /> Program <br /> Virtual Internship
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(61)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 61 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Bank Muamalat Virtual Internship Program </h3>
                <div className="about__images">
                  <img src={AH21O} alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual internship activities at Bank Muamalat by Rakamin Academy</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Analytic some data business problems</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Participating in course by Bank Muamalat</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">giving some idea for creating new solution</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-book-open services__icon"></i>
              <h3 className="sevices__title">
                Bank Muamalat
                <br /> Program <br /> Virtual Internship
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(7)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 7 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Bank Muamalat Virtual Internship Program </h3>
                <div className="about__images">
                  <img src={AH3O} alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual internship activities at Bank Muamalat by Rakamin Academy</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Analytic some data business problems</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Participating in course by Bank Muamalat</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">giving some idea for creating new solution</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-book-open services__icon"></i>
              <h3 className="sevices__title">
                Bank Muamalat
                <br /> Program <br /> Virtual Internship
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(8)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 8 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Bank Muamalat Virtual Internship Program </h3>
                <div className="about__images">
                  <img src={AH4O} alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual internship activities at Bank Muamalat by Rakamin Academy</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Analytic some data business problems</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Participating in course by Bank Muamalat</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">giving some idea for creating new solution</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-monitor services__icon"></i>
              <h3 className="sevices__title">
                Bank Muamalat
                <br /> Program <br /> Virtual Internship
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(9)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 9 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Bank Muamalat Virtual Internship Program </h3>
                <div className="about__images">
                  <img src={AH5O} alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual internship activities at Bank Muamalat by Rakamin Academy</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Analytic some data business problems</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Participating in course by Bank Muamalat</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">giving some idea for creating new solution</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-monitor services__icon"></i>
              <h3 className="sevices__title">
                Bank Muamalat
                <br /> Program <br /> Virtual Internship
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(10)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 10 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Bank Muamalat Virtual Internship Program </h3>
                <div className="about__images">
                  <img src={AH6O} alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual internship activities at Bank Muamalat by Rakamin Academy</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Analytic some data business problems</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Participating in course by Bank Muamalat</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">giving some idea for creating new solution</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={pilih === 2 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
        <div className="services__container container grid">
          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="sevices__title">
                Speaker
                <br /> ReadyLearn
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(1)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 1 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Speaker ReadyLearn</h3>
                <div className="about__images">
                  <img src={AH1N} alt="" className="imagesss" />
                </div>
                <p className="services__modal-description">Be a speaker at ReadyLearn 2022</p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Provide some instructions for passing the test of SBMPTN</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Give some tips for the test of SBMPTN</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="sevices__title">
                Bank Muamalat
                <br /> Program <br /> Virtual Internship
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(2)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 2 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Bank Muamalat Virtual Internship Program </h3>
                <div className="about__images">
                  <img src={AH2N} alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual internship activities at Bank Muamalat by Rakamin Academy</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Analytic some data business problems</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Participating in course by Bank Muamalat</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">giving some idea for creating new solution</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={pilih === 3 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
        <div className="services__container container grid">
          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="sevices__title">
                Speaker
                <br /> ReadyLearn
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
                  <img src={AH1N} alt="" className="imagesss" />
                </div>
                <p className="services__modal-description">Be a speaker at ReadyLearn 2022</p>
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
                  <img src={AH1N} alt="" className="imagesss" />
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
                  <img src={AH1N} alt="" className="imagesss" />
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
