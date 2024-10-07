import React from 'react'
import './footer-component-new.css'
const FooterSection = () => {
  return (
  <>
      <footer className="footer">
        <div className="container footer-wrapper">
          <div className="footer-block">
            <div className="footer-block-lt">
              <img src="curam/assets/images/footer/curam_logo.svg" alt="Curam" className="logo-img" />
              <p className="app-title">Download Curam app</p>
              <div className="app-block">
                <img src="curam/assets/images/footer/store-google.svg" alt="store-google" />
                <img src="curam/assets/images/footer/store-ios.svg" alt="store-ios" />
              </div>
            </div>
            <div className="footer-block-rt">
              <div className="footer-links-block">
                <div className="footer__details">
                  <div className="footer__nav-links">
                    <div className="footer__nav-links-col">
                      <p className="footer-nav-links__title">
                        Find a carer
                        <svg aria-label="Graphics Symbol" role="graphics-symbol" width={20} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.56935 9.19238C5.28191 8.89413 5.29068 8.41933 5.58893 8.1319C5.88717 7.84446 6.36197 7.85323 6.6494 8.15148L10.5331 12.1813C10.8206 12.4795 10.8118 12.9543 10.5135 13.2418C10.2153 13.5292 9.7405 13.5204 9.45306 13.2222L5.56935 9.19238Z" fill="black" />
                          <path d="M9.46636 12.1812C9.17892 12.4795 9.18769 12.9543 9.48594 13.2417C9.78419 13.5291 10.259 13.5204 10.5464 13.2221L14.4301 9.19233C14.7176 8.89408 14.7088 8.41928 14.4106 8.13185C14.1123 7.84441 13.6375 7.85318 13.3501 8.15142L9.46636 12.1812Z" fill="black" />
                        </svg>
                      </p>
                      <div className="footer__nav-links-inner">
                        <ul className="footer-navlinks__link">
                          <li className="footer__link">
                            <a href="#" aria-label="Hourly care">Hourly care </a>
                          </li>
                          <li className="footer__link">
                            <a href="#" aria-label="Overnight care">Overnight care</a>
                          </li>
                          <li className="footer__link">
                            <a href="#" aria-label="Live-in care">Live-in care</a>
                          </li>                                  
                          <li className="footer__link">
                            <a href="#" aria-label="Live-in care">All care services</a>
                          </li>
                          <li className="footer__link">
                            <a href="#" aria-label="Search for a carer">Search for a carer</a>
                          </li>
                          <li className="footer__link">
                            <a href="#" aria-label="How it works">How it works</a>
                          </li>
                          <li className="footer__link">
                            <a href="#" aria-label="Cost calculator">Cost calculator</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="footer__nav-links-col">
                      <p className="footer-nav-links__title">
                        Find care jobs
                        <svg aria-label="Graphics Symbol" role="graphics-symbol" width={20} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.56935 9.19238C5.28191 8.89413 5.29068 8.41933 5.58893 8.1319C5.88717 7.84446 6.36197 7.85323 6.6494 8.15148L10.5331 12.1813C10.8206 12.4795 10.8118 12.9543 10.5135 13.2418C10.2153 13.5292 9.7405 13.5204 9.45306 13.2222L5.56935 9.19238Z" fill="black" />
                          <path d="M9.46636 12.1812C9.17892 12.4795 9.18769 12.9543 9.48594 13.2417C9.78419 13.5291 10.259 13.5204 10.5464 13.2221L14.4301 9.19233C14.7176 8.89408 14.7088 8.41928 14.4106 8.13185C14.1123 7.84441 13.6375 7.85318 13.3501 8.15142L9.46636 12.1812Z" fill="black" />
                        </svg>
                      </p>
                      <div className="footer__nav-links-inner">
                        <ul className="footer-navlinks__link">
                          <li className="footer__link">
                            <a href="#" aria-label="Why work with us?">Why work with us?</a>
                          </li>
                          <li className="footer__link">
                            <a href="#" aria-label="Find care jobs">Find care jobs</a>
                          </li>
                          <li className="footer__link">
                            <a href="#" aria-label="Earnings calculator">Earnings calculator</a>
                          </li>
                          <li className="footer__link">
                            <a href="#" aria-label="Training courses">Training courses</a>
                          </li>
                          <li className="footer__link">
                            <a href="#" aria-label="Perks & benefits">Perks &amp; benefits</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="footer__nav-links-col">
                      <p className="footer-nav-links__title">
                        For business partners
                        <svg aria-label="Graphics Symbol" role="graphics-symbol" width={20} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.56935 9.19238C5.28191 8.89413 5.29068 8.41933 5.58893 8.1319C5.88717 7.84446 6.36197 7.85323 6.6494 8.15148L10.5331 12.1813C10.8206 12.4795 10.8118 12.9543 10.5135 13.2418C10.2153 13.5292 9.7405 13.5204 9.45306 13.2222L5.56935 9.19238Z" fill="black" />
                          <path d="M9.46636 12.1812C9.17892 12.4795 9.18769 12.9543 9.48594 13.2417C9.78419 13.5291 10.259 13.5204 10.5464 13.2221L14.4301 9.19233C14.7176 8.89408 14.7088 8.41928 14.4106 8.13185C14.1123 7.84441 13.6375 7.85318 13.3501 8.15142L9.46636 12.1812Z" fill="black" />
                        </svg>
                      </p>
                      <div className="footer__nav-links-inner">
                        <ul className="footer-navlinks__link">
                          <li className="footer__link">
                            <a href="#" aria-label="Why partner with us?">Why partner with us?</a>
                          </li>
                          <li className="footer__link">
                            <a href="#" aria-label="Get a demo">Get a demo</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="footer__nav-links-col">
                      <p className="footer-nav-links__title">
                        Resources
                        <svg aria-label="Graphics Symbol" role="graphics-symbol" width={20} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.56935 9.19238C5.28191 8.89413 5.29068 8.41933 5.58893 8.1319C5.88717 7.84446 6.36197 7.85323 6.6494 8.15148L10.5331 12.1813C10.8206 12.4795 10.8118 12.9543 10.5135 13.2418C10.2153 13.5292 9.7405 13.5204 9.45306 13.2222L5.56935 9.19238Z" fill="black" />
                          <path d="M9.46636 12.1812C9.17892 12.4795 9.18769 12.9543 9.48594 13.2417C9.78419 13.5291 10.259 13.5204 10.5464 13.2221L14.4301 9.19233C14.7176 8.89408 14.7088 8.41928 14.4106 8.13185C14.1123 7.84441 13.6375 7.85318 13.3501 8.15142L9.46636 12.1812Z" fill="black" />
                        </svg>
                      </p>
                      <div className="footer__nav-links-inner">
                        <ul className="footer-navlinks__link">
                          <li className="footer__link">
                            <a href="#" aria-label="Blog">Blog</a>
                          </li>
                          <li className="footer__link">
                            <a href="#" aria-label="FAQs">FAQs</a>
                          </li>                                  
                          <li className="footer__link">
                            <a href="#" aria-label="FAQs">Curam in media</a>
                          </li>
                          <li className="footer__link">
                            <a href="#" aria-label="Our policies">Our policies</a>
                          </li>
                          <li className="footer__link">
                            <a href="#" aria-label="Terms & conditions">Terms &amp; conditions</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-contacts">
            <div className="contacts-block">
              <h6>Contact us</h6>
              <div className="contacts-row">
                <span className="contacts-col">
                  <img src="curam/assets/images/footer/email.svg" alt="Email" />
                  <span>client@curamcare.com</span>
                </span>
                <span className="contacts-col">
                  <img src="curam/assets/images/footer/Phone.svg" alt="Phone" />
                  <span>01387 730 766</span>
                </span>
                <span className="contacts-col">
                  <img src="curam/assets/images/footer/location.svg" alt="Location" />
                  <span>18 Ashwin Street London E8 3DL</span>
                </span>
              </div>
            </div>
            <div className="reviews-block">
              <img src="curam/assets/images/footer/trustpilot.svg" alt="Trustpilot reviews" />
              <img src="curam/assets/images/footer/doctify.svg" alt="Doctify reviews" />
            </div>
          </div>
        </div>
        <div className="container footer-rights">
          <span>© 2024 Curam - All rights reserved.</span>
          <div className="social-block">
            <a href="#" target="_blank"><img src="curam/assets/images/footer/facebook.svg" alt="Facebook" /></a>
            <a href="#" target="_blank"><img src="curam/assets/images/footer/twitter.svg" alt="Twitter" /></a>
            <a href="#" target="_blank"><img src="curam/assets/images/footer/instagram.svg" alt="Instagram" /></a>
            <a href="#" target="_blank"><img src="curam/assets/images/footer/linkedin.svg" alt="Linkedin" /></a>
          </div>
        </div>
      </footer>
    
  </>
  )
}

export default FooterSection