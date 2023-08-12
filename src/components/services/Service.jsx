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
      <div className="work__filters">
        <div onClick={() => pilihan(1)} className={pilih === 1 ? 'service__button service__active button--flex' : 'service__button button--flex'}>
          All
        </div>
        <div onClick={() => pilihan(2)} className={pilih === 2 ? 'service__button service__active button--flex' : 'service__button button--flex'}>
          Tech
          {''}
        </div>
        <div onClick={() => pilihan(3)} className={pilih === 3 ? 'service__button service__active button--flex' : 'service__button button--flex'}>
          Management
        </div>
        <div onClick={() => pilihan(4)} className={pilih === 4 ? 'service__button service__active button--flex' : 'service__button button--flex'}>
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
                Speaker <br /> at
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
                    <p className="services__modal-info">Learn Business especially how to build startup idea</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Build team for startup</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Meet with professional mentor and startup practitioners</p>
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
                <h3 className="services__modal-title">Hukum Bisnis Course, Universitas Indonesia</h3>
                <div className="about__images">
                  <img src={AH4N} alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in learning activities with business law courses at the University of Indonesia</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Participate in classroom and learn about business law especially for corporate</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Got a score of 88</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Convert 2 SKS</p>
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
                SME <br /> Course
                <br /> Microsoft Berpijar
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(6)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 6 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">SME Course Microsoft Berpijar </h3>
                <div className="about__images">
                  <img src={AH2O} alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participate in Small Medium Enterprise at Microsoft Berpijar</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Regional potential-based and market-oriented business development in accordance with business competencies</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to manage small medium enterprises</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Got a score of A and convert into 3 SKS</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-book-open services__icon"></i>
              <h3 className="sevices__title">
                Social Entrepreneur-
                <br />
                ship Course <br /> Future Skill
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(61)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 61 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Social Entrepreneurship Course at Future Skill by smeshub</h3>
                <div className="about__images">
                  <img src={AH21O} alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participate in Social Entrepreneurship Course at Future Skill by Smeshub x Gadjah Mada University</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Create a new business idea or concept for social benefits</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to pitch a business idea well</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Understand the function of social entrepreneurship and the impact</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-book-open services__icon"></i>
              <h3 className="sevices__title">
                Business marketing <br />
                strategy and <br /> product optimization
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(7)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 7 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h5 className="khusus">Business marketing strategy and product optimization course by Grab at Indonesian Ministry of Communication and Informatics</h5>
                <div className="about__images">
                  <img src={AH3O} alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual learning of Business marketing strategy and product optimization by Grab</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to find the best form of marketing activities for products/services</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn to use Google Ads tools to analyze consumer interest in products</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to expand marketing reach through the use of digital media</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-book-open services__icon"></i>
              <h3 className="sevices__title">
                Digital <br /> Entrepreneurship
                <br /> Program
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(8)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 8 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="khusus">Digital Entrepreneurship Program by Google at Indonesian Ministry of Communication and Informatics</h3>
                <div className="about__images">
                  <img src={AH4O} alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual Digital Entrepreneurship Program by Google at Indonesian Ministry of Communication and Informatics</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn to create opportunities for business collaboration</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to use digital marketing effectively</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn to use artificial intelligence for business development</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-monitor services__icon"></i>
              <h3 className="sevices__title">
                Certification
                <br /> Program <br /> by MySkill.id
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(9)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 9 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Microsoft Excel Basic Course by MySkill</h3>
                <div className="about__images">
                  <img src={AH5O} alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual learning of Microsoft Excel Basic Course by MySkill</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn basic tools in Microsoft Excel</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to clean, sort, and filter data in Microsoft Excel</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to use conditional if-else</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-monitor services__icon"></i>
              <h3 className="sevices__title">
                Certification
                <br /> Program <br /> by MySkill.id
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(911)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 911 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Microsoft Excel Lanjutan 1 Course by MySkill</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=1FeY7boZJrMAEjo3l6OO7DNAyoRTvJpQy" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual learning of Microsoft Excel Lanjutan 1 Course by MySkill</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to use Vlookup and Hlookup</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn basic data formating and types of data</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn basic Pivot Table</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-monitor services__icon"></i>
              <h3 className="sevices__title">
                Certification
                <br /> Program <br /> by MySkill.id
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(9111)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 9111 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Microsoft Excel Lanjutan 2 Course by MySkill</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=1Fb7aE4ZvQ24KMDYzlxC1e-LqLnIizVs1" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual learning of Microsoft Excel Lanjutan 2 Course by MySkill</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn advanced Pivot Table in Microsoft Excel</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to simulate table data 1 and 2 variable in Microsoft Excel</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn basic VBA in Microsoft Excel</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-monitor services__icon"></i>
              <h3 className="sevices__title">
                Project <br /> Management
                <br /> Program
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(10)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 10 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Project Management Course by Google</h3>
                <div className="about__images">
                  <img src={AH6O} alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual learning of Project Management at Coursera by Google</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how important project management in corporate</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn some skills for project manager such as leadership, communication, time management, negotiation, etc</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to increase productivity and work performance</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <div className="apa apaa">
                <i className="uil uil-html5 services__icon"></i>
                <i className="uil uil-html3 services__icon"></i>
                <i className="bx bxl-javascript se services__icon"></i>
              </div>

              <h3 className="sevices__title">
                Basic Web
                <br /> Programming <br /> by Dicoding
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(11)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 11 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Basic Web Programming Course by Dicoding</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=13ypTWyebZT2PfsuvthFwt8VhZG6vhP11" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual learning of basic Programming Course by Dicoding</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn basic progamming language such as HTML, CSS, and Javascript</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to build basic website</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to make logical operator with Javascript </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-book-open services__icon"></i>
              <h3 className="sevices__title">
                Product Management
                <br /> Course <br /> by MySkill.id
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(12)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 12 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Product Management Course by MySkill</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=1N1xONol73lRu2Y0cFN-6u9ytFnaNTsve" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual learning of Basic Product Management Course by MySkill</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to make and develop product</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how the product can be likely by consumers</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to make product innovations that consumers need</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-monitor services__icon"></i>
              <h3 className="sevices__title">
                Startup
                <br /> Camp <br /> "The Hacker Class"
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(13)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 13 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Startup Camp by Sebelas Maret University</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=1u786nx6w7C3gud9KFRYuC4iHQdvZqoRQ" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual Startup Camp, Startup Digicamp Series Class 2022</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn the important role of hacker in startup</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to build basic website and deploy it</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to design the website</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-monitor services__icon"></i>
              <h3 className="sevices__title">
                Startup
                <br /> Camp <br /> Program
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(14)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 14 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Startup Camp Program by Startupweekend Indonesia x UNS Innovation Hub</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=1Iz9gRxK9cN5klvJw3nBOpXx2aIPFvGCp" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual Startup Camp, Startupweekend x UNS Innovation Hub</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to build and develop the idea for startup</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to pitch in front of expert and professional investor well</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to make Business Model Canvas, Product Management, Product Vision, etc</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-book-open services__icon"></i>
              <h3 className="sevices__title">
                General Competencies
                <br /> Course <br /> by Ruangguru
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(15)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 15 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">General Competencies course by Ruangguru</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=1aNsptrOFC-XdrY3YwHTmWXYK-gK1XOFc" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual course by Ruangguru Career Acceleration Bootcamp through Studi Independen, Kampus Merdeka, Kemendikbud</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Study Communication and Presentations Skills, Analytical & Strategic Thinking Skills, and Project Management</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Understand the basic understanding of thinking as one of the basic human instincts</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Be able to understand basic thinking skills as one of self-development</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-monitor services__icon"></i>
              <h3 className="sevices__title">
                Software Engineering
                <br /> Course <br /> by Ruangguru
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(16)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 16 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Software Engineering course by Ruangguru</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=1Q3D7YrgHXzOdM0N-bjvLEiaWsbPhkbWJ" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual course by Ruangguru Career Acceleration Bootcamp through Studi Independen, Kampus Merdeka, Kemendikbud</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Implement the software development process with using VSCode, Terminal, and Version Control</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Understand Project Management methods and tools</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Be Able to develop software with mindset a software engineer</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <div className="apa apaa">
                <i className="uil uil-html5 services__icon"></i>
                <i className="uil uil-html3 services__icon"></i>
              </div>

              <h3 className="sevices__title">
                HTML & CSS
                <br /> Course <br /> by Ruangguru
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(17)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 17 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Web Development With HTML & CSS course by Ruangguru</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=1lYVYGkg3xmcuFxbsgSkgZzv5uc2cBhNn" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual course by Ruangguru Career Acceleration Bootcamp through Studi Independen, Kampus Merdeka, Kemendikbud</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Implement the software development process with using VSCode, Terminal, and Version Control</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Understand Project Management methods and tools</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Be Able to develop software with mindset a software engineer</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <div className="apa apaa">
                <i className="bx bxl-javascript se services__icon"></i>
              </div>

              <h3 className="sevices__title">
                Javascript
                <br /> Course <br /> by Ruangguru
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(18)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 18 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Programming with Javascript course by Ruangguru</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=1h7zTk438WF-MW2dR4wyW74Byg4i6iYzt" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual course by Ruangguru Career Acceleration Bootcamp through Studi Independen, Kampus Merdeka, Kemendikbud</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Understand the general concepts contained in the language dynamic programming especially Javascript</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Understand the top-level features of the language JavaScript programming</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Able to use programming languages Javascript to solve a problem</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <div className="apa apaa">
                <i class="bx bxl-nodejs se services__icon"></i>
              </div>

              <h3 className="sevices__title">
                Node.js
                <br /> Course <br /> by Ruangguru
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(19)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 19 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Node.js course by Ruangguru</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=19EwaVOKM828Y7UXbZXq1e3Vhs6aqDz5y" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual course by Ruangguru Career Acceleration Bootcamp through Studi Independen, Kampus Merdeka, Kemendikbud</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Utilize the NodeJS development ecosystem to develop applications</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Be able to apply the use of package managers (NPM)</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Be able to manipulate package.json to configure information about applications and dependencies needed</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <div className="apa apaa">
                <i class="bx bx-code-alt se services__icon"></i>
              </div>

              <h3 className="sevices__title">
                Web APIs
                <br /> Course <br /> by Ruangguru
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(20)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 20 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Interacting with Web APIs course by Ruangguru</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=122xYwpvBrZjkvsXoCX5SkLXyohqcamDs" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual course by Ruangguru Career Acceleration Bootcamp through Studi Independen, Kampus Merdeka, Kemendikbud</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Understand how website applications run and are displayed from the client side</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Be able to understand and manipulate the Document Object Model</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Be able to utilize objects in browsers (Browser API), especially the Web</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <div className="apa apaa">
                <i class="bx bxl-react se services__icon"></i>
              </div>

              <h3 className="sevices__title">
                React Js
                <br /> Course <br /> by Ruangguru
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(21)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 21 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Frontend Web Development with React course by Ruangguru</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=1bZrmNtsgOqV3ICiKnTbVV_lcgFeJ7Tl3" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual course by Ruangguru Career Acceleration Bootcamp through Studi Independen, Kampus Merdeka, Kemendikbud</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Understand the fundamental ReactJS library (JSX, Component, Props, State, LifeCycle, Event Handling) and use ReactJS to create a Single Page Application</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Understand the concept of Single Page Application ReactJS and create Routing using the React Router DOM package</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">understand and use JSX on ReactJS Component</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <div className="apa apaa">
                <i className="uil uil-cloud-computing services__icon"></i>
              </div>

              <h3 className="sevices__title">
                RESTful API
                <br /> Course <br /> by Ruangguru
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(22)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 22 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Consuming RESTful API course by Ruangguru</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=1gYJsCigqWYFV_MOiCGPmJCwLgKSFUaEf" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual course by Ruangguru Career Acceleration Bootcamp through Studi Independen, Kampus Merdeka, Kemendikbud</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Understand the fundamental RESTful API architecture and apply it in website development on the frontend development side</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Able to understand and use HTTP Method in RESTful API architecture</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Understand the basic concepts of RESTful API architecture</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <div className="apa apaa">
                <i className="uil uil-github services__icon"></i>
              </div>

              <h3 className="sevices__title">
                Deploy to Web
                <br /> Course <br /> by Ruangguru
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(23)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 23 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Frontend Deployment To Production course by Ruangguru</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=1ohmM_Xv2tCVKgSFR5dvsc9UWhhmlH_XQ" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual course by Ruangguru Career Acceleration Bootcamp through Studi Independen, Kampus Merdeka, Kemendikbud</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Understand how to deploy a ReactJS application that has been created so that it can be accessed online using the Netlify / Vercel / Github Pages service</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Can do deployment to Netlify / Vercel / Github Pages services</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Able to understand the concept of building ReactJS (production) applications for deployment</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <div className="apa apaa">
                <i className="uil uil-monitor services__icon"></i>
              </div>

              <h3 className="sevices__title">
                Cloud Practitioner <br /> Essentials
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(24)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 24 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Cloud Practitioner Essentials</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=17uiT4nmjEJHXaplH3_4xYZxDC8EmckQe" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual course by Dicoding X DBS Foundation Coding Camp 2023</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Describe and explain the shared responsibility model (shared responsibility model).</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Describes the basics of AWS Cloud migration.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Describes the financial benefits of the AWS Cloud for organizational/enterprise cost management.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <div className="apa apaa">
                <i className="uil uil-monitor services__icon"></i>
              </div>

              <h3 className="sevices__title">
                Digital Marketing <br /> by ai4impact
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(25)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 25 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Digital Marketing by ai4impact</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=15SQ5gEmHlRzha80jggvmd3gvSAWs1jRC" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual course of digital marketing: social media marketing & chatbot 101 by ai4impact 2023</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to indentify the audience, market, and analyze the opportunity of market.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to use social media for branding and advertising.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to use SEO for increasing search engine and also optimaze content</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <div className="apa apaa">
                <i className="uil uil-book-open services__icon"></i>
              </div>

              <h3 className="sevices__title">
                Student Development <br /> Program 2023
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(26)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 26 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Student Development Program 2023 by Edvisee</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=1y5-o5DVME2lqcxJj-nRt9J1SfRXcJEJW" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual Student Development Program 2023 by Edvisee</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to build self branding in social media.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn what preparations are needed to work and continue their studies after graduating from a bachelor's degree.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Sharing experiences with students from the university of california.</p>
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
              <div className="apa apaa">
                <i className="uil uil-html5 services__icon"></i>
                <i className="uil uil-html3 services__icon"></i>
                <i className="bx bxl-javascript se services__icon"></i>
              </div>

              <h3 className="sevices__title">
                Basic Web
                <br /> Programming <br /> by Dicoding
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(11)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 11 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Basic Web Programming Course by Dicoding</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=13ypTWyebZT2PfsuvthFwt8VhZG6vhP11" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual learning of basic Programming Course by Dicoding</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn basic progamming language such as HTML, CSS, and Javascript</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to build basic website</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to make logical operator with Javascript </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-monitor services__icon"></i>
              <h3 className="sevices__title">
                Startup
                <br /> Camp <br /> "The Hacker Class"
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(13)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 13 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Startup Camp by Sebelas Maret University</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=1u786nx6w7C3gud9KFRYuC4iHQdvZqoRQ" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual Startup Camp, Startup Digicamp Series Class 2022</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn the important role of hacker in startup</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to build basic website and deploy it</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to design the website</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-monitor services__icon"></i>
              <h3 className="sevices__title">
                Startup
                <br /> Camp <br /> Program
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(14)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 14 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Startup Camp Program by Startupweekend Indonesia x UNS Innovation Hub</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=1Iz9gRxK9cN5klvJw3nBOpXx2aIPFvGCp" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual Startup Camp, Startupweekend x UNS Innovation Hub</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to build and develop the idea for startup</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to pitch in front of expert and professional investor well</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to make Business Model Canvas, Product Management, Product Vision, etc</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-monitor services__icon"></i>
              <h3 className="sevices__title">
                Software Engineering
                <br /> Course <br /> by Ruangguru
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(16)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 16 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Software Engineering course by Ruangguru</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=1Q3D7YrgHXzOdM0N-bjvLEiaWsbPhkbWJ" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual course by Ruangguru Career Acceleration Bootcamp through Studi Independen, Kampus Merdeka, Kemendikbud</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Implement the software development process with using VSCode, Terminal, and Version Control</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Understand Project Management methods and tools</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Be Able to develop software with mindset a software engineer</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <div className="apa apaa">
                <i className="uil uil-html5 services__icon"></i>
                <i className="uil uil-html3 services__icon"></i>
              </div>

              <h3 className="sevices__title">
                HTML & CSS
                <br /> Course <br /> by Ruangguru
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(17)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 17 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Web Development With HTML & CSS course by Ruangguru</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=1lYVYGkg3xmcuFxbsgSkgZzv5uc2cBhNn" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual course by Ruangguru Career Acceleration Bootcamp through Studi Independen, Kampus Merdeka, Kemendikbud</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Implement the software development process with using VSCode, Terminal, and Version Control</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Understand Project Management methods and tools</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Be Able to develop software with mindset a software engineer</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <div className="apa apaa">
                <i className="bx bxl-javascript se services__icon"></i>
              </div>

              <h3 className="sevices__title">
                Javascript
                <br /> Course <br /> by Ruangguru
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(18)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 18 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Programming with Javascript course by Ruangguru</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=1h7zTk438WF-MW2dR4wyW74Byg4i6iYzt" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual course by Ruangguru Career Acceleration Bootcamp through Studi Independen, Kampus Merdeka, Kemendikbud</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Understand the general concepts contained in the language dynamic programming especially Javascript</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Understand the top-level features of the language JavaScript programming</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Able to use programming languages Javascript to solve a problem</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <div className="apa apaa">
                <i class="bx bxl-nodejs se services__icon"></i>
              </div>

              <h3 className="sevices__title">
                Node.js
                <br /> Course <br /> by Ruangguru
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(19)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 19 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Node.js course by Ruangguru</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=19EwaVOKM828Y7UXbZXq1e3Vhs6aqDz5y" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual course by Ruangguru Career Acceleration Bootcamp through Studi Independen, Kampus Merdeka, Kemendikbud</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Utilize the NodeJS development ecosystem to develop applications</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Be able to apply the use of package managers (NPM)</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Be able to manipulate package.json to configure information about applications and dependencies needed</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <div className="apa apaa">
                <i class="bx bx-code-alt se services__icon"></i>
              </div>

              <h3 className="sevices__title">
                Web APIs
                <br /> Course <br /> by Ruangguru
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(20)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 20 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Interacting with Web APIs course by Ruangguru</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=122xYwpvBrZjkvsXoCX5SkLXyohqcamDs" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual course by Ruangguru Career Acceleration Bootcamp through Studi Independen, Kampus Merdeka, Kemendikbud</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Understand how website applications run and are displayed from the client side</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Be able to understand and manipulate the Document Object Model</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Be able to utilize objects in browsers (Browser API), especially the Web</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <div className="apa apaa">
                <i class="bx bxl-react se services__icon"></i>
              </div>

              <h3 className="sevices__title">
                React Js
                <br /> Course <br /> by Ruangguru
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(21)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 21 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Frontend Web Development with React course by Ruangguru</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=1bZrmNtsgOqV3ICiKnTbVV_lcgFeJ7Tl3" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual course by Ruangguru Career Acceleration Bootcamp through Studi Independen, Kampus Merdeka, Kemendikbud</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Understand the fundamental ReactJS library (JSX, Component, Props, State, LifeCycle, Event Handling) and use ReactJS to create a Single Page Application</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Understand the concept of Single Page Application ReactJS and create Routing using the React Router DOM package</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">understand and use JSX on ReactJS Component</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <div className="apa apaa">
                <i className="uil uil-cloud-computing services__icon"></i>
              </div>

              <h3 className="sevices__title">
                RESTful API
                <br /> Course <br /> by Ruangguru
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(22)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 22 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Consuming RESTful API course by Ruangguru</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=1gYJsCigqWYFV_MOiCGPmJCwLgKSFUaEf" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual course by Ruangguru Career Acceleration Bootcamp through Studi Independen, Kampus Merdeka, Kemendikbud</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Understand the fundamental RESTful API architecture and apply it in website development on the frontend development side</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Able to understand and use HTTP Method in RESTful API architecture</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Understand the basic concepts of RESTful API architecture</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <div className="apa apaa">
                <i className="uil uil-github services__icon"></i>
              </div>

              <h3 className="sevices__title">
                Deploy to Web
                <br /> Course <br /> by Ruangguru
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(23)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 23 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Frontend Deployment To Production course by Ruangguru</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=1ohmM_Xv2tCVKgSFR5dvsc9UWhhmlH_XQ" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual course by Ruangguru Career Acceleration Bootcamp through Studi Independen, Kampus Merdeka, Kemendikbud</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Understand how to deploy a ReactJS application that has been created so that it can be accessed online using the Netlify / Vercel / Github Pages service</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Can do deployment to Netlify / Vercel / Github Pages services</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Able to understand the concept of building ReactJS (production) applications for deployment</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <div className="apa apaa">
                <i className="uil uil-monitor services__icon"></i>
              </div>

              <h3 className="sevices__title">
                Cloud Practitioner <br /> Essentials
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(24)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 24 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Cloud Practitioner Essentials</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=17uiT4nmjEJHXaplH3_4xYZxDC8EmckQe" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual course by Dicoding X DBS Foundation Coding Camp 2023</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Describe and explain the shared responsibility model (shared responsibility model).</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Describes the basics of AWS Cloud migration.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Describes the financial benefits of the AWS Cloud for organizational/enterprise cost management.</p>
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
                <h3 className="services__modal-title">Hukum Bisnis Course, Universitas Indonesia</h3>
                <div className="about__images">
                  <img src={AH4N} alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in learning activities with business law courses at the University of Indonesia</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Participate in classroom and learn about business law especially for corporate</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Got a score of 88</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Convert 2 SKS</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-book-open services__icon"></i>
              <h3 className="sevices__title">
                SME <br /> Course
                <br /> Microsoft Berpijar
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(6)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 6 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">SME Course Microsoft Berpijar </h3>
                <div className="about__images">
                  <img src={AH2O} alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participate in Small Medium Enterprise at Microsoft Berpijar</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Regional potential-based and market-oriented business development in accordance with business competencies</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to manage small medium enterprises</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Got a score of A and convert into 3 SKS</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-book-open services__icon"></i>
              <h3 className="sevices__title">
                Social Entrepreneur-
                <br />
                ship Course <br /> Future Skill
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(61)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 61 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Social Entrepreneurship Course at Future Skill by smeshub</h3>
                <div className="about__images">
                  <img src={AH21O} alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participate in Social Entrepreneurship Course at Future Skill by Smeshub x Gadjah Mada University</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Create a new business idea or concept for social benefits</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to pitch a business idea well</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Understand the function of social entrepreneurship and the impact</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-book-open services__icon"></i>
              <h3 className="sevices__title">
                Business marketing <br />
                strategy and <br /> product optimization
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(7)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 7 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h5 className="khusus">Business marketing strategy and product optimization course by Grab at Indonesian Ministry of Communication and Informatics</h5>
                <div className="about__images">
                  <img src={AH3O} alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual learning of Business marketing strategy and product optimization by Grab</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to find the best form of marketing activities for products/services</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn to use Google Ads tools to analyze consumer interest in products</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to expand marketing reach through the use of digital media</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-book-open services__icon"></i>
              <h3 className="sevices__title">
                Digital <br /> Entrepreneurship
                <br /> Program
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(8)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 8 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="khusus">Digital Entrepreneurship Program by Google at Indonesian Ministry of Communication and Informatics</h3>
                <div className="about__images">
                  <img src={AH4O} alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual Digital Entrepreneurship Program by Google at Indonesian Ministry of Communication and Informatics</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn to create opportunities for business collaboration</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to use digital marketing effectively</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn to use artificial intelligence for business development</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-monitor services__icon"></i>
              <h3 className="sevices__title">
                Project <br /> Management
                <br /> Program
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(10)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 10 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Project Management Course by Google</h3>
                <div className="about__images">
                  <img src={AH6O} alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual learning of Project Management at Coursera by Google</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how important project management in corporate</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn some skills for project manager such as leadership, communication, time management, negotiation, etc</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to increase productivity and work performance</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-book-open services__icon"></i>
              <h3 className="sevices__title">
                Product Management
                <br /> Course <br /> by MySkill.id
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(12)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 12 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Product Management Course by MySkill</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=1N1xONol73lRu2Y0cFN-6u9ytFnaNTsve" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual learning of Basic Product Management Course by MySkill</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to make and develop product</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how the product can be likely by consumers</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to make product innovations that consumers need</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <div className="apa apaa">
                <i className="uil uil-monitor services__icon"></i>
              </div>

              <h3 className="sevices__title">
                Digital Marketing <br /> by ai4impact
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(25)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 25 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Digital Marketing by ai4impact</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=15SQ5gEmHlRzha80jggvmd3gvSAWs1jRC" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual course of digital marketing: social media marketing & chatbot 101 by ai4impact 2023</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to indentify the audience, market, and analyze the opportunity of market.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to use social media for branding and advertising.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to use SEO for increasing search engine and also optimaze content</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={pilih === 4 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
        <div className="services__container container grid">
          <div className="services__content">
            <div>
              <i className="uil uil-head-side-cough services__icon"></i>
              <h3 className="sevices__title">
                <br />
                Speaker <br /> at
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
                    <p className="services__modal-info">Learn Business especially how to build startup idea</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Build team for startup</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Meet with professional mentor and startup practitioners</p>
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
              <i className="uil uil-monitor services__icon"></i>
              <h3 className="sevices__title">
                Certification
                <br /> Program <br /> by MySkill.id
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(9)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 9 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Microsoft Excel Basic Course by MySkill</h3>
                <div className="about__images">
                  <img src={AH5O} alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual learning of Microsoft Excel Basic Course by MySkill</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn basic tools in Microsoft Excel</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to clean, sort, and filter data in Microsoft Excel</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to use conditional if-else</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-monitor services__icon"></i>
              <h3 className="sevices__title">
                Certification
                <br /> Program <br /> by MySkill.id
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(911)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 911 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Microsoft Excel Lanjutan 1 Course by MySkill</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=1FeY7boZJrMAEjo3l6OO7DNAyoRTvJpQy" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual learning of Microsoft Excel Lanjutan 1 Course by MySkill</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to use Vlookup and Hlookup</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn basic data formating and types of data</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn basic Pivot Table</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-monitor services__icon"></i>
              <h3 className="sevices__title">
                Certification
                <br /> Program <br /> by MySkill.id
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(9111)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 9111 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Microsoft Excel Lanjutan 2 Course by MySkill</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=1Fb7aE4ZvQ24KMDYzlxC1e-LqLnIizVs1" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual learning of Microsoft Excel Lanjutan 2 Course by MySkill</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn advanced Pivot Table in Microsoft Excel</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to simulate table data 1 and 2 variable in Microsoft Excel</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn basic VBA in Microsoft Excel</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-book-open services__icon"></i>
              <h3 className="sevices__title">
                General Competencies
                <br /> Course <br /> by Ruangguru
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(15)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 15 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">General Competencies course by Ruangguru</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=1aNsptrOFC-XdrY3YwHTmWXYK-gK1XOFc" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual course by Ruangguru Career Acceleration Bootcamp through Studi Independen, Kampus Merdeka, Kemendikbud</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Study Communication and Presentations Skills, Analytical & Strategic Thinking Skills, and Project Management</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Understand the basic understanding of thinking as one of the basic human instincts</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Be able to understand basic thinking skills as one of self-development</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <div className="apa apaa">
                <i className="uil uil-book-open services__icon"></i>
              </div>

              <h3 className="sevices__title">
                Student Development <br /> Program 2023
              </h3>
            </div>

            <span className="services__button" onClick={() => togelTab(26)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={togel === 26 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Student Development Program 2023 by Edvisee</h3>
                <div className="about__images">
                  <img src="https://drive.google.com/uc?export=view&id=1y5-o5DVME2lqcxJj-nRt9J1SfRXcJEJW" alt="" className="imagesss" />
                </div>

                <p className="services__modal-description">Participating in virtual Student Development Program 2023 by Edvisee</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn how to build self branding in social media.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Learn what preparations are needed to work and continue their studies after graduating from a bachelor's degree.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Sharing experiences with students from the university of california.</p>
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
