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
                      <img src={pendidikan1} alt="sertifikat" className="imagesss" />
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
                      <img src={pendidikan2} alt="sertifikat" className="imagesss" />
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
                      <img src={kerja1} alt="sertifikat" className="imagesss" />
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
                      <img src={kerja2} alt="sertifikat" className="imagesss" />
                    </div>

                    <p className="services__modal-description">Has completed internship at KPPN Serang (September - Oktober 2022)</p>

                    <ul className="services__modal-services grid">
                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Approve of the SPM (Surat Pencairan Dana) submitted by Satker (Satuan Kerja) to KPPN Serang for disbrusement of funds</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Manage employee salary increase, mutation of employee, pension of worker such as TNI, Polri, PNS, and PPPK.</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Correct data about disbrusement of funds from Satker which submitted to KPPN.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Marketing Manager</h3>
                <span className="qualification__subtitle">OTOranger</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> May - Nov 2023
                </div>
                <button className="button edit_button aak" onClick={() => togelTab(5)}>
                  Detail
                </button>
                <div className={togel === 5 ? 'services__modal active-modal' : 'services__modal'}>
                  <div className="services__modal-content">
                    <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">CTO & Co-Founder</h3>
                    <div className="about__images">
                      <img src="https://drive.google.com/uc?export=view&id=1nuSg6gDMyZGPnzOmCEK8l8vd4Rq72OmW" alt="sertifikat" className="imagesss" />
                    </div>

                    <p className="services__modal-description">
                      Becoming CTO and Co-Founder of OTOranger which is a pre-startup tenant of UNS Innovation HUB. <a href="uns.id/PenugasanInovasi2023">SK Rektor Download Here!!</a>
                    </p>

                    <ul className="services__modal-services grid">
                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Lead the technology team in designing, developing, and implementing technology solutions that support company goals.</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Lead the team in the creation of web-based applications</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Design ideas and business opportunities that can be developed to overcome problems</p>
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
                <h3 className="qualification__title">CEO & Founder</h3>
                <span className="qualification__subtitle">Space Education</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - Now
                </div>
                <button className="button edit_button aak" onClick={() => togelTab(6)}>
                  Detail
                </button>
                <div className={togel === 6 ? 'services__modal active-modal' : 'services__modal'}>
                  <div className="services__modal-content">
                    <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">CEO & Founder</h3>
                    <div className="about__images">
                      <img src="https://drive.google.com/uc?export=view&id=1MsX_wDvu080XB3f6KDDKCV_YULt97d8S" alt="gambar" className="imagesss" />
                    </div>

                    <p className="services__modal-description">Becoming CEO and Founder of Space Education</p>

                    <ul className="services__modal-services grid">
                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Have the responsibility to carry out the vision, mission and goals of Space Education</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">As the initiator and prime mover of business ideas</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Expand business opportunities and ideas to customers</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">E-commerce Expert</h3>
                <span className="qualification__subtitle">Perfumery</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Aug - Nov 2023
                </div>
                <button className="button edit_button aak" onClick={() => togelTab(7)}>
                  Detail
                </button>
                <div className={togel === 7 ? 'services__modal active-modal' : 'services__modal'}>
                  <div className="services__modal-content">
                    <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">E-commerce Expert</h3>
                    <div className="about__images">
                      <img src="https://drive.google.com/uc?export=view&id=1th31tAC9fNfcLz0AUvOLm7ZCMRDU_Q1J" alt="sertifikat" className="imagesss" />
                    </div>

                    <p className="services__modal-description">Becoming an E-commerce Expert in Perfumery.</p>

                    <ul className="services__modal-services grid">
                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Create and implement strategies that make online transactions possible.</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Organize, develop, and execute website marketing plans.</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Set standards, systems, and best practices for new product listings, content creation, distribution, and maintenance.</p>
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
                      <img src={org1} alt="sertifikat" className="imagesss" />
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
                <h3 className="qualification__title">
                  Marketing <br />
                  Campaign Volunteer
                </h3>
                <span className="qualification__subtitle">
                  Harisenin.com <br /> (PT. Karya Kaya Bahagia)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 1 Month
                </div>
                <button className="button edit_button aak" onClick={() => togelTab(6)}>
                  Detail
                </button>
                <div className={togel === 6 ? 'services__modal active-modal' : 'services__modal'}>
                  <div className="services__modal-content">
                    <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Marketing Campaign Volunteer</h3>
                    <div className="about__images">
                      <img src={vol1} alt="sertifikat" className="imagesss" />
                    </div>

                    <p className="services__modal-description">Has participated in volunteer marketing campaigns for 1 month at Harisenin.com</p>

                    <ul className="services__modal-services grid">
                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Promote events and services offered by Harisenin.com with enhancements Visitors as much as 3%.</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Uploading Harisenin.com content to personal social media accounts according to creativity each and the direction of the person in charge of the team.</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Invite youth to take a part in events which organized by Harisenin.com.</p>
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
                <h3 className="qualification__title">Marketing Event Volunteer</h3>
                <span className="qualification__subtitle">
                  SponsorKu <br /> (PT Tarumanagara Solusi Indonesia)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 1 Month
                </div>
                <button className="button edit_button aak" onClick={() => togelTab(7)}>
                  Detail
                </button>
                <div className={togel === 7 ? 'services__modal active-modal' : 'services__modal'}>
                  <div className="services__modal-content">
                    <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Marketing Event Volunteer</h3>
                    <div className="about__images">
                      <img src={vol2} alt="sertifikat" className="imagesss" />
                    </div>

                    <p className="services__modal-description">Has participated in marketing event volunteer (Gerakan Promosi Ragam Pesona Kuningan 2022) for 1 month at SponsorKu (PT Tarumanagara Solusi Indonesia)</p>

                    <ul className="services__modal-services grid">
                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Holding discussions with tourism activists regarding the topics being discussed.</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Promote existing tourism in Kuningan and provide an increase in visitors tourism by 10%.</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Perform the campaign to engage visiting Kota Kuningan 2022 for youth.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Marketing Event Volunteer</h3>
                <span className="qualification__subtitle">Commfiesta HMIK Universitas Andalas</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 1 Month
                </div>
                <button className="button edit_button aak" onClick={() => togelTab(8)}>
                  Detail
                </button>
                <div className={togel === 8 ? 'services__modal active-modal' : 'services__modal'}>
                  <div className="services__modal-content">
                    <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Marketing Event Volunteer</h3>
                    <div className="about__images">
                      <img src={vol3} alt="sertifikat" className="imagesss" />
                    </div>

                    <p className="services__modal-description">Has participated in marketing event volunteer Commfiesta 2022 for 1 month at HMIK Universitas Andalas, Sumatera Barat, Indonesia</p>

                    <ul className="services__modal-services grid">
                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Promote the competition event held by Commfiesta HMIK Unand to media accounts social.</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Create a creative content and uploading on personal social media accounts and boosting There are 18 candidates for the Unand competition.</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Invite student participants to take part in the competition held by Commfiesta HMIK Unand.</p>
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
                <h3 className="qualification__title">Campaign Volunteer</h3>
                <span className="qualification__subtitle">Character Matters Indonesia</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - 1 Month
                </div>
                <button className="button edit_button aak" onClick={() => togelTab(9)}>
                  Detail
                </button>
                <div className={togel === 9 ? 'services__modal active-modal' : 'services__modal'}>
                  <div className="services__modal-content">
                    <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Campaign Volunteer</h3>
                    <div className="about__images">
                      <img src={vol4} alt="sertifikat" className="imagesss" />
                    </div>

                    <p className="services__modal-description">Has participated in campaign volunteer 2023 for 1 month at Character Matter Indonesia</p>

                    <ul className="services__modal-services grid">
                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Supports the campaign manager in executing marketing and outreach duties.</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Campaign in the campaign application by uploading photos respecting cultural ethnic differences.</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Campaign on social media with the theme of erasing differences and negative stigma between ethnic groups.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Finance Volunteer</h3>
                <span className="qualification__subtitle">Bursaku.id</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - 1 Month
                </div>
                <button className="button edit_button aak" onClick={() => togelTab(10)}>
                  Detail
                </button>
                <div className={togel === 10 ? 'services__modal active-modal' : 'services__modal'}>
                  <div className="services__modal-content">
                    <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Finance Volunteer</h3>
                    <div className="about__images">
                      <img src={vol5} alt="sertifikat" className="imagesss" />
                    </div>

                    <p className="services__modal-description">Has participated in finance volunteer 2023 for 1 month at Bursaku.id</p>

                    <ul className="services__modal-services grid">
                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Promote financial programs from bursaku.id in social media Instagram.</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Educate financial knowledge in social media.</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Campaign how to save and manage money in long-term.</p>
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
                <h3 className="qualification__title">Campaign Volunteer</h3>
                <span className="qualification__subtitle">Campaign Indonesia</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - 1 Month
                </div>
                <button className="button edit_button aak" onClick={() => togelTab(11)}>
                  Detail
                </button>
                <div className={togel === 11 ? 'services__modal active-modal' : 'services__modal'}>
                  <div className="services__modal-content">
                    <i onClick={() => togelTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Campaign Volunteer</h3>
                    <div className="about__images">
                      <img src="https://drive.google.com/uc?export=view&id=1nNNRmVCnlG-TBfgrnPt0UXCembo3tfaZ" alt="sertifikat" className="imagesss" />
                    </div>

                    <p className="services__modal-description">Has participated in campaign volunteer 2023 for 1 month at Campaign Indonesia</p>

                    <ul className="services__modal-services grid">
                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Increase public awareness of the importance of maintaining holistic health while considering cultural and environmental factors.</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Promote healthy lifestyles that are culturally appropriate so that people can maintain their health without compromising their cultural values and traditions.</p>
                      </li>

                      <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                          Emphasize the importance of appreciating cultural diversity in health efforts by promoting the integration of modern medical knowledge and effective local traditional practices.
                        </p>
                      </li>
                    </ul>
                  </div>
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
