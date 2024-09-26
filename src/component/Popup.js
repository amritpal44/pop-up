import FocusTrap from 'focus-trap-react'
import React from 'react'
import "./styles/popup.css"

import ellipse from "../Assets/Images/Ellipse.png";
import discount from "../Assets/Images/Discount.png"

const Popup = ( {closePopup, onKeyDown, popup, updateShownPopup} ) => {

  const handleExploreClick = () => {
    // updateShownPopup("opened");
    window.open(popup?.action, '_blank');
  }

  // console.log("popup in popup: ", popup);

  const offerEndingTime = "14H : 56S"

  return (
    <FocusTrap>
      <aside
        role='dialog'
        aria-modal="true"
        onKeyDown={onKeyDown}
        className='h-full flex justify-center mx-auto items-center'
        > 

        <div class="popup-container">
          <div class="popup-content">
            <div class="popup-left">
              <img src={popup.icon} alt='' class="popup-left-icon" />
              <img src={ellipse} alt='' class="popup-left-ellipse"/>
              <div class="popup-time">
                <p >{offerEndingTime} <span>Left</span></p>
                <p >Offer ending Tonight</p>
              </div>
            </div>

            <div class="popup-right-container">
              <div class="popup-right">
                <div class="popup-header">
                  <p class="popup-heading">{popup.heading}</p>
                  <div class="popup-offer">
                    <div class="popup-offer-text">
                      <p>{popup.off}</p>
                      <p>OFF</p>
                    </div>
                    <img src={discount} alt='' class="popup-offer-icon" />
                  </div>
                </div>


                <div class="popup-curriculum">
                  {
                    popup?.curric?.map((course, index) => (
                      <div class="popup-course" key={index}>
                        <img src={course.icon} alt='' class="popup-course-icon" />
                        <p>{course.title}</p>
                      </div>
                    ))
                  }
                </div>

                <div class="popup-price-section">
                  <div class="popup-pricing">
                    <p class="popup-price">{popup.price}</p>
                    <p class="popup-discount">{popup.discount}</p>
                  </div>
                  <button onClick={handleExploreClick} class="popup-upgrade-button">Upgrade Now</button>
                </div>
              </div>
            </div>
          </div>

          <div class="popup-bottom">
            <p>Upgrade now to follow a proper roadmap for your career</p>
          </div>
        </div>

      </aside>
    </FocusTrap>
  )
}

export default Popup