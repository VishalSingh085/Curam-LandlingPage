import React from 'react'

const PrioritySection = () => {
  return (
    <>
      <div>
        {/*---------------- priority section start --------------------------*/}
        <div className="priority-wrapper">
          <div className="container">
            <div className="priority-block">
              <div className="priority-block-lt">
                <h3>Your safety.  <br />Our #1 priority</h3>
                <p>We conduct the most comprehensive verification process of its kind in the UK. To be one of our Care Professionals, this is what we check.</p>
                <p>Biometric testing to the most stringent banking standards. Photo ID.The right to work in the UK. 
                  Qualifiactions. Two references.</p>
                <p>Then using our own experience, we review everything about them with a thorough interview. They are also fully insured.</p>
                <div className="widget-logo-block">
                  <img src="curam/assets/images/home-page/Care_Quality2.svg" alt="Care Quality Commission" />
                  <span className="saparator-line" />
                  <img src="curam/assets/images/home-page/homecare-association2.svg" alt="Homecare Association" />
                  <span className="saparator-line" />
                  <img src="curam/assets/images/home-page/IR35-compliant2.svg" alt="IR35-compliant" />
                </div>
                <a className="btn filled-white" aria-label="Get started">Get started</a>
              </div>
              <div className="priority-block-rt">
                <img src="curam/assets/images/home-page/priority.webp" alt="Your safety. Our #1 priority" />
              </div>
            </div>
          </div>
        </div>
        {/*---------------- priority section end --------------------------*/}
        {/*---------------- FQA section start --------------------------*/}
        <div className="home-faq-wrapper">
          <div className="container">
            <div className="home-faq-block">
              <div className="home-faq-lt"><img src="curam/assets/images/home-page/faq-img.webp" alt="Call now" /></div>
              <div className="home-faq-rt">
                <h3>Hello, how can we help you</h3>
                <p>We understand that hiring a carer is a big decision.</p>
                <p>Especially if this is your first time.</p>
                <p>We're here to help you get it right.</p>
                <p>Talk to us about your questions</p>
                <a href="#" className="btn filled">Call now</a>
              </div>
            </div>
          </div>
        </div>
        {/*---------------- FQA section end --------------------------*/}
      </div>
    
    </>
  )
}

export default PrioritySection