import React from 'react'
import './footer-component-new.css'
const ModalFooter = () => {
  return (
    <>

      <div>
        <div id="postcode-bottom-sheet-drawer" className="modal desktop-open">
          <div className="modal__overlay" />
          {/* Modal content */}
          <div className="modal-content large-modal">
            <div className="modal-header">
              <h4>Enter your postcode</h4>
              <span className="close">
                <svg aria-label="Graphics Symbol" role="graphics-symbol" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_3241_6754)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#9E9E9E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_3241_6754">
                      <rect width={24} height={24} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
            <div className="modal-body">
              <div className="field__wrapper">
                <span className="prefix-img">
                  <svg role="graphics-symbol" aria-label="Location Symbol" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="normalstate">
                    <path d="M12.9902 21.902C15.1764 20.0074 20.2234 15.0354 20.2234 9.50914C20.2234 4.96743 16.5417 1.28564 12 1.28564C7.45828 1.28564 3.77649 4.96743 3.77649 9.50914C3.77649 15.0354 8.82355 20.0074 11.0098 21.902C11.5844 22.3998 12.4156 22.3998 12.9902 21.902Z" fill="#E5E5E5" stroke="#616161" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 12.3946C13.8602 12.3946 15.3682 10.8866 15.3682 9.0264C15.3682 7.16619 13.8602 5.6582 12 5.6582C10.1398 5.6582 8.63184 7.16619 8.63184 9.0264C8.63184 10.8866 10.1398 12.3946 12 12.3946Z" fill="white" stroke="#616161" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg aria-label="Graphics Symbol" role="graphics-symbol" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hoverstate">
                    <g clipPath="url(#clip0_1416_99002)">
                      <path d="M12.9902 21.943C15.1764 20.0484 20.2234 15.0764 20.2234 9.55016C20.2234 5.00845 16.5417 1.32666 12 1.32666C7.45828 1.32666 3.77649 5.00845 3.77649 9.55016C3.77649 15.0764 8.82355 20.0484 11.0098 21.943C11.5844 22.4408 12.4156 22.4408 12.9902 21.943Z" fill="#D7E0FF" stroke="#494FC9" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 12.4356C13.8602 12.4356 15.3682 10.9276 15.3682 9.06741C15.3682 7.20721 13.8602 5.69922 12 5.69922C10.1398 5.69922 8.63184 7.20721 8.63184 9.06741C8.63184 10.9276 10.1398 12.4356 12 12.4356Z" fill="white" stroke="#494FC9" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1416_99002_3">
                        <rect width={24} height={24} fill="white" transform="translate(0 0.0410156)" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <input id="phonenumber-field2" aria-label="Enter your Postcode" autoComplete="off" type="text" className="form-control__custom dropdown" placeholder="Enter your Postcode" />
                <ul className="dropdown-menu" aria-labelledby="phonenumber-field2">
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
              </div>
            </div>
            <div className="modal-footer">
              <a href="#" id="confirmBtn" className="btn filled close" style={{display: 'flex'}}>
                Confirm
              </a>
            </div>
          </div>
        </div>
        <div id="cost-calculate-modal" className="modal cost-calculate-modal">
          <div className="modal__overlay" />
          {/* Modal content */}
          <div className="modal-content large-modal average-care-rates-content">
            <div className="modal-header">
              <h4>Average care rates in SN11 8LW, Calne UK</h4>
              <span className="close">
                <svg aria-label="Graphics Symbol" role="graphics-symbol" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_3241_6754)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#9E9E9E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_3241_6754">
                      <rect width={24} height={24} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
            <div className="modal-body">
              <div className="care-rate-type">
                <div className="care-rate-type-col">
                  <p className="title-txt">Hourly care</p>
                  <div className="care-rate-type-rt">                
                    <h5>£18.45</h5>
                    <p className="title-ft">per hour</p>
                  </div>
                </div>
                <div className="care-rate-type-col">
                  <p className="title-txt">Overnight care</p>
                  <div className="care-rate-type-rt">
                    <h5>£14.25</h5>
                    <p className="title-ft">per hour</p></div>
                </div>
                <div className="care-rate-type-col">
                  <p className="title-txt">Live-in care</p>
                  <div className="care-rate-type-rt">
                    <h5>£1,000</h5>
                    <p className="title-ft">per hour</p>
                  </div>
                </div>
                <div className="care-rate-type-col">
                  <p className="title-txt">Live-in care</p>
                  <div className="care-rate-type-rt">
                    <h5>£1,000</h5>
                    <p className="title-ft">per hour</p>
                  </div>
                </div>
              </div>
              <p className="txt-sm average-rate">For hourly care <span>you will pay £7.50 less</span> than the average agency rate.</p>
              <div className="care-rate-info">
                <div className="care-rate-info-col">
                  <img src="curam/assets/images/icons/care-rate-icon1.webp" alt="Care Rate icon 1" />
                  <p className="search-result-terms-n-condition-element__text">All rates are negotiable.</p>
                </div>
                <div className="care-rate-info-col">
                  <img src="curam/assets/images/icons/care-rate-icon2.webp" alt="Care Rate icon 2" />
                  <p className="search-result-terms-n-condition-element__text">Carers set their own rates.</p>
                </div>
                <div className="care-rate-info-col">
                  <img src="curam/assets/images/icons/care-rate-icon3.webp" alt="Care Rate icon 3" />
                  <p className="search-result-terms-n-condition-element__text">10% Curam fees</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <a href="#" id="confirmBtn" className="btn filled close w-auto">
                View carer in  Calne UK
              </a>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default ModalFooter