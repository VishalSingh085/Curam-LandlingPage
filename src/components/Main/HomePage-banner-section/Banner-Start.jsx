import React from 'react'
// import './home-page.css'
import './home-page-component.css'

const BannerStart = () => {
  return (
    <>
     
      <div style={{background:'#f2f3ff' }} className="main-banner-wrapper w-full h-72 ">
        <div className="container">
          <div className="main-banner-block ml-64">
            <div className="main-banner-container">
              <h2 className='text-4xl font-extrabold text-blue-800 mb-12 ml-5 mt-5'>Our care professionals are here to help</h2>
              <div className="home-banner-filter-block">
                <div className="home-banner-filter-container">
                  <div className="home-banner-filter-row">
                    <div className="filter-care-type">
                      <div className="form-group dropdownMenu">
                        <label htmlFor="care-type">Care type</label>
                        <input className="form-control has-child" type="text" name id="care-type" placeholder="Select" />
                      </div>
                      <div className="home-banner-care-type-wrapper-inputs home-banner-radio-buttons d-none">
                        <div>
                          <input type="radio" name="home_banner_care_type" id="home_banner_all" defaultValue="all" />
                          <label htmlFor="home_banner_all">All</label>
                        </div>
                        <div>
                          <input type="radio" name="home_banner_care_type" id="home_banner_hourly" defaultValue="hourly" />
                          <label htmlFor="home_banner_hourly">Hourly</label>
                        </div>
                        <div>
                          <input type="radio" name="home_banner_care_type" id="home_banner_live_in" defaultValue="live_in" />
                          <label htmlFor="home_banner_live_in">Live-in</label>
                        </div>
                        <div>
                          <input type="radio" name="home_banner_care_type" id="home_banner_overnight" defaultValue="overnight" />
                          <label htmlFor="home_banner_overnight">Overnight</label>
                        </div>
                      </div>
                    </div>
                    <span className="middle-section-border-one" />
                    <div className="filter-where">
                      <form className="form-group">
                        <label htmlFor="locationfield">Where</label>
                        <input id="locationfield" autoComplete="off" type="text" className="form-control dropdown" placeholder="Start with your postcode" />
                        <ul className="dropdown-menu" aria-labelledby="locationfield">
                          <li className="dropdown-item">
                            <span className="highlight-text">SW10 0AA</span>
                            <span className="help-text">London, UK</span>
                          </li>
                          <li className="dropdown-item">
                            <span className="highlight-text">SW10 0AB</span>
                            <span className="help-text">London, UK</span>
                          </li>
                          <li className="dropdown-item">
                            <span className="highlight-text">SW10 AD</span>
                            <span className="help-text">London, UK</span>
                          </li>
                          <li className="dropdown-item">
                            <span className="highlight-text">SW10 0AE</span>
                            <span className="help-text">London, UK</span>
                          </li>
                          <li className="dropdown-item">
                            <span className="highlight-text">SW10 0AA</span>
                            <span className="help-text">London, UK</span>
                          </li>
                          <li className="dropdown-item">
                            <span className="highlight-text">SW10 0AB</span>
                            <span className="help-text">London, UK</span>
                          </li>
                          <li className="dropdown-item">
                            <span className="highlight-text">SW10 AD</span>
                            <span className="help-text">London, UK</span>
                          </li>
                          <li className="dropdown-item">
                            <span className="highlight-text">SW10 0AE</span>
                            <span className="help-text">London, UK</span>
                          </li>
                        </ul>
                        {/* <span class="error-msg">Please enter your postcode</span> */}
                      </form>
                    </div>
                  </div>
                </div>
                <div className="home-banner-filter-btn">
                  <a href className="btn filled bg-blue-800 rounded-full text-white font-bold"><img src="curam/assets/images/home-page/search_icon.svg" alt="Search Carer" /><span>Search</span></a>
                </div>
              </div>
              <div className="banner-widget-wrapper">
                <div className="doctify-widget-block">
                  <img src="curam/assets/images/home-page/doctify-star.svg" alt="Star rate" />
                  <img src="curam/assets/images/home-page/doctify.svg" alt="Doctify" />
                </div>
                <div className="other-widget-block">
                  <img src="curam/assets/images/home-page/Care_Quality.svg" alt="Care Quality Commission" />
                  <span className="saparator-line" />
                  <img src="curam/assets/images/home-page/homecare-association.svg" alt="Homecare Association" />
                  <span className="saparator-line" />
                  <img src="curam/assets/images/home-page/IR35-compliant.svg" alt="IR35-compliant" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  
    </>
  )
}

export default BannerStart