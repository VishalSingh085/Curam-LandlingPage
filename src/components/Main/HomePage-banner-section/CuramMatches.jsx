import React from 'react'
import './home-page.css'

const CuramMatches = () => {
  return (
    <div>
     {/*---------------- Curam Matches start --------------------------*/}
      <div className="curam-matches-wrapper">
        <div className="container">
          <h2>How Curam matches you with care professionals</h2>
          <h5>Get started by selecting how you want to make your choice</h5>
          {/* --------- get started -------- */}
          <div className="get-started-wrapper">
            <a href="#" className="get-started-block">
              <div className="get-started-banner">
                <div className="banner-lt">
                  <div className="get-started-row">
                    <div className="get-started-col-lt"><img src="curam/assets/images/home-page/curam-meet.webp" alt="Curam meet" /></div>
                    <div className="get-started-col-rt">
                      <div className="how-to-use-row">
                        <div className="how-to-use-col">
                          <img src="curam/assets/images/home-page/bullet-right.svg" alt="Arrow img" />
                          <span>Select postcode <br />and preferences</span>
                        </div>
                        <div className="how-to-use-col">
                          <img src="curam/assets/images/home-page/bullet-right.svg" alt="Arrow img" />
                          <span>Connect via <br />messages or video</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h4>1. Personalise your search</h4>
              <p>to locate experienced Care Professionals available near you. From these, choose the ones who match with the specific care you want. </p>
              <p className="mb-0">Then simply call them to explain what you need, video call them for a chat on CuramMeet, or message them on the app.</p>
            </a>
            <a href="#" className="get-started-block">
              <div className="get-started-banner">
                <div className="banner-rt">
                  <div className="get-started-row">
                    <div className="get-started-col-lt">
                      <div className="tell-us-block">
                        <p>Tell Us</p>
                        <div className="num-block">
                          <span className="num-circle">1</span>
                          <p>Where</p>
                        </div>
                        <div className="num-block">
                          <span className="num-circle">2</span>
                          <p>What</p>
                        </div>
                        <div className="num-block">
                          <span className="num-circle">3</span>
                          <p>When</p>
                        </div>
                      </div>
                    </div>
                    <div className="get-started-col-rt">
                      <div className="how-to-use-row">
                        <div className="how-to-use-col">
                          <img src="curam/assets/images/home-page/bullet-right.svg" alt="Arrow img" />
                          <span>Share your care <br />requirements</span>
                        </div>
                        <div className="how-to-use-col">
                          <img src="curam/assets/images/home-page/bullet-right.svg" alt="Arrow img" />
                          <span>Get carers at a <br />fast speed</span>
                        </div>
                        <div className="how-to-use-col">
                          <img src="curam/assets/images/home-page/bullet-right.svg" alt="Arrow img" />
                          <span>When you need a break, on holidays or you are sick</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h4>2. Or we will match you with our expert carers</h4>
              <p>It delivers what you need fast, in fact at express speed, often in real time.* Just give it a try to see for yourself.</p>
              <p className="mb-0">*Dependent on UK location and time of day.</p>
            </a>
          </div>
          {/* --------- cost calculator -------- */}
          <div className="cost-calculator-wrapper">
            <div className="cost-calculator_block">
              <div className="cost-calculator_info">
                <h3>Check average rates in your postcode</h3>
                <form className="curam-banner-search">
                  <label htmlFor="locationfield2" className="disappear">Postcode</label>
                  <div className="field__wrapper">
                    <svg aria-label="Graphics Symbol" role="graphics-symbol" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="normalstate">
                      <path d="M12.9902 21.902C15.1764 20.0074 20.2234 15.0354 20.2234 9.50914C20.2234 4.96743 16.5417 1.28564 12 1.28564C7.45828 1.28564 3.77649 4.96743 3.77649 9.50914C3.77649 15.0354 8.82355 20.0074 11.0098 21.902C11.5844 22.3998 12.4156 22.3998 12.9902 21.902Z" fill="#E5E5E5" stroke="#616161" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 12.3946C13.8602 12.3946 15.3682 10.8866 15.3682 9.0264C15.3682 7.16619 13.8602 5.6582 12 5.6582C10.1398 5.6582 8.63184 7.16619 8.63184 9.0264C8.63184 10.8866 10.1398 12.3946 12 12.3946Z" fill="white" stroke="#616161" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg aria-label="Graphics Symbol" role="graphics-symbol" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hoverstate">
                      <g clipPath="url(#clip0_1416_99002_23123)">
                        <path d="M12.9902 21.943C15.1764 20.0484 20.2234 15.0764 20.2234 9.55016C20.2234 5.00845 16.5417 1.32666 12 1.32666C7.45828 1.32666 3.77649 5.00845 3.77649 9.55016C3.77649 15.0764 8.82355 20.0484 11.0098 21.943C11.5844 22.4408 12.4156 22.4408 12.9902 21.943Z" fill="#D7E0FF" stroke="#494FC9" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 12.4356C13.8602 12.4356 15.3682 10.9276 15.3682 9.06741C15.3682 7.20721 13.8602 5.69922 12 5.69922C10.1398 5.69922 8.63184 7.20721 8.63184 9.06741C8.63184 10.9276 10.1398 12.4356 12 12.4356Z" fill="white" stroke="#494FC9" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1416_99002_23123">
                          <rect width={24} height={24} fill="white" transform="translate(0 0.0410156)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <input id="locationfield2" autoComplete="off" type="text" className="form-control__custom dropdown" placeholder="Enter your postcode" />
                    <ul className="dropdown-menu" aria-labelledby="locationfield2">
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
                    <span className="error-msg">Please enter your postcode</span>
                  </div>
                  {/* <button
                      type="submit"
                      class="btn filled txt-search-btn"
                      aria-label="Search"
                    >
                      Search
                    </button> */}
                  <a href="#" className="btn filled cost-calculate-modal-open home-postcode-submit6 txt-search-btn">Check care rates</a>
                </form>
                <p>
                  Clients on the Curam platform pay on average 22% less than the current suggested UK Home Care Association hourly rate of £25.95
                </p>
              </div>
              <div className="cost-calculator_img">
                <div className="cost-calculator-app" />
                <img src="curam/assets/images/home-page/app_image.webp" alt="Curam app" />
              </div>
            </div>
          </div>
          {/* --------- keep connected -------- */}
          <div className="keep-connected-wrapper">
            <div className="keep-connected-lt"><img src="curam/assets/images/home-page/keep-connected.webp" alt="Download app" /></div>
            <div className="keep-connected-rt">
              <h3>Keep your family connected</h3>
              <p>On our app, Family Circle keeps you and your family in the loop.</p>
              <p>So even you're away at work, or taking a break, you'll know what's happening at nome.</p>
              <p>Care Notes shares the client's up-to-date health information with key medical specialists such as GPs, nurses and social workers.</p>
              <div className="download-app-block">
                <h6>Download the Curam app</h6>
                <div className="download-app-btns">
                  <a href="#" aria-label="Download App from Google Play Store"><img src="curam/assets/images/home-page/store-google.svg" alt="Google Play Store" /></a>
                  <a href="#" aria-label="Download App from App Store"><img src="curam/assets/images/home-page/store-ios.svg" alt="iOS App Store" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*---------------- Curam Matches end --------------------------*/}
    
    </div>
  )
}

export default CuramMatches