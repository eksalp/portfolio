import React from 'react';
import './qualification.css';
import '../services/service.css';
import AboutImage from '../../assets/speaker.png';
import { useState } from 'react';

const Qualification = () => {
  const [pilih, setPilih] = useState(1);
  const pilihan = (index) => {
    setPilih(index);
  };
  const [togel, setTogel] = useState(0);
  const togelTab = (index) => {
    setTogel(index);
  };

  return (
    <section className="qualification section" id="services">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div onClick={() => pilihan(1)} className={pilih === 1 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'}>
            <i className="uil uil-graduation-cap qualification__icon"></i>
            {''}
          </div>
          <div onClick={() => pilihan(2)} className={pilih === 2 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            {''}
          </div>
          <div onClick={() => pilihan(3)} className={pilih === 3 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'}>
            <i className="uil uil-university qualification__icon"></i>
            {''}
          </div>
          <div onClick={() => pilihan(4)} className={pilih === 4 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'}>
            <i className="uil uil-users-alt qualification__icon"></i>
            {''}
          </div>
        </div>

        <div className="qualification__sections">
          <div className={pilih === 1 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
            <h3 className="qualification__tabs">Education Experience</h3>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">Univ UI</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - Present
                </div>
                <button className="button edit_button" onClick={() => togelTab(1)}>
                  Detail
                </button>
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
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">Univ UI</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">Univ UI</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title"> wemblew Director</h3>
                <span className="qualification__subtitle">Univ UI</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - Present
                </div>
              </div>
            </div>
          </div>

          <div className={pilih === 2 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
            <h3 className="qualification__tabs">Work Experience</h3>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">Univ UI</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">Univ UI</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">Univ UI</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title"> wemblew Director</h3>
                <span className="qualification__subtitle">Univ UI</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - Present
                </div>
              </div>
            </div>
          </div>

          <div className={pilih === 3 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
            <h3 className="qualification__tabs">Organizational Experience</h3>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">Univ UI</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - Present
                </div>
                <button className="button edit_button" onClick={() => togelTab(1)}>
                  Detail
                </button>
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
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">Univ UI</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">Univ UI</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title"> wemblew Director</h3>
                <span className="qualification__subtitle">Univ UI</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - Present
                </div>
              </div>
            </div>
          </div>

          <div className={pilih === 4 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
            <h3 className="qualification__tabs">Volunteer Experience</h3>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">Univ UI</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">Univ UI</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">Univ UI</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title"> wemblew Director</h3>
                <span className="qualification__subtitle">Univ UI</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - Present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
