import React from 'react';
import './qualification.css';
import '../services/service.css';
import pendidikan1 from '../../assets/esema.jpg';
import pendidikan2 from '../../assets/1080976012.png';
import kerja1 from '../../assets/kerja1.jpg';
import kerja2 from '../../assets/kerja2.png';
import org1 from '../../assets/org1.jpg';
import vol1 from '../../assets/vol1.png';
import vol2 from '../../assets/vol2.jpg';
import vol3 from '../../assets/vol3.jpg';
import vol4 from '../../assets/vol4.jpg';
import vol5 from '../../assets/vol5.jpg';
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
          <div onClick={() => pilihan(3)} className={pilih === 3 ? 'qualification__button qualification__active button--flex' : 'borderr qualification__button button--flex'}>
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
                <h3 className="qualification__title">Science Major</h3>
                <span className="qualification__subtitle">SMAN 15 Kota Tangerang</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2019
                </div>
                <button className="button edit_button aak" onClick={() => togelTab(1)}>
                  Detail
                </button>
                <div className={togel === 1 ? 'services__modal active-modal' : 'services__modal'}>
                  <div className="services__modal-content">
                    <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">SMAN 15 Kota Tangerang</h3>
                    <div className="about__images">
                      <img src={pendidikan1} alt="" className="imagesss" />
                    </div>

                    <p className="services__modal-description">Have graduated in 2019 and got a 3rd parallel rank.</p>

                    <ul className="services__modal-services grid">
                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Became a model student for representatives of SMAN 15 Tangerang</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">3rd Runner Up of Math Competition in Mercubuana University in 2018</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Became a participant of Math National Science Olympiad in 2017</p>
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
                <h3 className="qualification__title">Management of Finance</h3>
                <span className="qualification__subtitle">Sebelas Maret University</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - Present
                </div>
                <button className="button edit_button aak" onClick={() => togelTab(2)}>
                  Detail
                </button>
                <div className={togel === 2 ? 'services__modal active-modal' : 'services__modal'}>
                  <div className="services__modal-content">
                    <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Management of Finance</h3>
                    <div className="about__images">
                      <img src={pendidikan2} alt="" className="imagesss" />
                    </div>

                    <p className="services__modal-description">A college student at Sebelas Maret University.</p>

                    <ul className="services__modal-services grid">
                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Get a GPA of 3.63 out of 4.00</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Became a participant student of Studi Independen at Kampus Merdeka Kemdikbud 2022</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Became a participant of PKM-RSH in 2022</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={pilih === 2 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
            <h3 className="qualification__tabs">Work Experience</h3>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Front End Engineer</h3>
                <span className="qualification__subtitle">PT Ruang Raya Indonesia (Ruangguru)</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 6 Months
                </div>
                <button className="button edit_button aak" onClick={() => togelTab(3)}>
                  Detail
                </button>
                <div className={togel === 3 ? 'services__modal active-modal' : 'services__modal'}>
                  <div className="services__modal-content">
                    <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Front End Engineer</h3>
                    <div className="about__images">
                      <img src={kerja1} alt="" className="imagesss" />
                    </div>

                    <p className="services__modal-description">Has completed Studi Independen by Kampus Merdeka Kemdikbud in Ruangguru as a Front End Engineer.</p>

                    <ul className="services__modal-services grid">
                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Able to build responsive & interactive website applications.</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Has learned some languages programming for front end engineer, such as HTML, CSS, Javascript and some libraries and frameworks.</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Achieve final GPA 3.65/4.00 in Ruangguru.</p>
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
                <h3 className="qualification__title">Finance Intern</h3>
                <span className="qualification__subtitle">KPPN Serang, Ministry of Finance</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2 Months
                </div>
                <button className="button edit_button aak" onClick={() => togelTab(4)}>
                  Detail
                </button>
                <div className={togel === 4 ? 'services__modal active-modal' : 'services__modal'}>
                  <div className="services__modal-content">
                    <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Finance Intern</h3>
                    <div className="about__images">
                      <img src={kerja2} alt="" className="imagesss" />
                    </div>

                    <p className="services__modal-description">Has completed internship at KPPN Serang (September - Oktober 2022)</p>

                    <ul className="services__modal-services grid">
                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Validate the SPM (Payment Order) submitted by the Satker (Work Unit) to KPPN for disbursement of funds.</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Take care of salary increases, transfers and pensions for civil servants, PPPK, TNI and Polri.</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Correcting data on the disbursement of funds from the satker submitted to the KPPN.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={pilih === 3 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
            <h3 className="qualification__tabs">Organizational Experience</h3>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Sharia Economic Learning</h3>
                <span className="qualification__subtitle">KEI FEB UNS</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 1 Year
                </div>
                <button className="button edit_button aak" onClick={() => togelTab(5)}>
                  Detail
                </button>
                <div className={togel === 5 ? 'services__modal active-modal' : 'services__modal'}>
                  <div className="services__modal-content">
                    <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Sharia Economic Learning</h3>
                    <div className="about__images">
                      <img src={org1} alt="" className="imagesss" />
                    </div>

                    <p className="services__modal-description">Become a staff in the 2022 KEI FEB UNS sharia economic learning division</p>

                    <ul className="services__modal-services grid">
                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Establish relationships and work together with the Marcom, RnD, Finance division teams in forming projects Sharia Economic Learning division.</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Leading the e-bulletin team with 8 staff members from the Marcom, RnD, HRD divisions.</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Became in charge of the Webinar Series from the SEL KEI FEB UNS project which was attended by 50 participants.</p>
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
          </div>

          <div className={pilih === 4 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
            <h3 className="qualification__tabs">Volunteer Experience</h3>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">Univ UI</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - Present
                </div>
                <button className="button edit_button aak" onClick={() => togelTab(6)}>
                  Detail
                </button>
                <div className={togel === 6 ? 'services__modal active-modal' : 'services__modal'}>
                  <div className="services__modal-content">
                    <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Sharia Economic Learning</h3>
                    <div className="about__images">
                      <img src={vol1} alt="" className="imagesss" />
                    </div>

                    <p className="services__modal-description"></p>

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
                <button className="button edit_button aak" onClick={() => togelTab(7)}>
                  Detail
                </button>
                <div className={togel === 7 ? 'services__modal active-modal' : 'services__modal'}>
                  <div className="services__modal-content">
                    <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Sharia Economic Learning</h3>
                    <div className="about__images">
                      <img src={vol2} alt="" className="imagesss" />
                    </div>

                    <p className="services__modal-description"></p>

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

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">Univ UI</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - Present
                </div>
                <button className="button edit_button aak" onClick={() => togelTab(8)}>
                  Detail
                </button>
                <div className={togel === 8 ? 'services__modal active-modal' : 'services__modal'}>
                  <div className="services__modal-content">
                    <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Sharia Economic Learning</h3>
                    <div className="about__images">
                      <img src={vol3} alt="" className="imagesss" />
                    </div>

                    <p className="services__modal-description"></p>

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
                <h3 className="qualification__title"> wemblew Director</h3>
                <span className="qualification__subtitle">Univ UI</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - Present
                </div>
                <button className="button edit_button aak" onClick={() => togelTab(9)}>
                  Detail
                </button>
                <div className={togel === 9 ? 'services__modal active-modal' : 'services__modal'}>
                  <div className="services__modal-content">
                    <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Sharia Economic Learning</h3>
                    <div className="about__images">
                      <img src={vol4} alt="" className="imagesss" />
                    </div>

                    <p className="services__modal-description"></p>

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

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">Univ UI</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - Present
                </div>
                <button className="button edit_button aak" onClick={() => togelTab(10)}>
                  Detail
                </button>
                <div className={togel === 10 ? 'services__modal active-modal' : 'services__modal'}>
                  <div className="services__modal-content">
                    <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Sharia Economic Learning</h3>
                    <div className="about__images">
                      <img src={vol5} alt="" className="imagesss" />
                    </div>

                    <p className="services__modal-description"></p>

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
