import React from "react";
import SwitcherArrows from '../../assets/images/arrows.svg';

const FinalSwitcher = React.memo((props) => {

  const {
    activeOption,

    firstOptionTitle,
    firstOptionImg,
    firstOptionImageAltText,

    secondOptionTitle,
    secondOptionImg,
    secondOptionImageAltText,

    thirdOptionTitle,
    thirdOptionImg,
    thirdOptionImageAltText,

    choiceHandler,
  } = props;

  const firstOptionActive = activeOption === 1;
  const secondOptionActive = activeOption === 2;

  const toggleChoiceHandler = () => {
    activeOption === 1 
    ? choiceHandler(firstOptionTitle, secondOptionTitle) 
    : choiceHandler(secondOptionTitle, firstOptionTitle);
  }

  return (
    <section className="final-switcher">
      <div className="final-switcher-head">
        <div className="final-switcher-card">
            <div className={`${firstOptionActive ? 'final-switcher-card-shadow-active' : 'final-switcher-card-shadow'}`}></div>
            <div className={`final-switcher-card-image ${!firstOptionActive ? 'final-switcher-card-image-gray' : ''}`}>
                <img src={firstOptionImg} alt={firstOptionImageAltText}></img>
            </div>
            <div className={`${firstOptionActive ? 'final-switcher-card-shadow-active' : 'final-switcher-card-shadow'}`}></div>
            <div className={`${firstOptionActive ? 'final-switcher-card-title-active' : 'final-switcher-card-title'}`}>
                {firstOptionTitle}
            </div>
        </div>
        <div className="final-switcher-card">
            <div className={`${secondOptionActive ? 'final-switcher-card-shadow-active' : 'final-switcher-card-shadow'}`}></div>
            <div className={`final-switcher-card-image ${!secondOptionActive ? 'final-switcher-card-image-gray' : ''}`}>
                <img src={secondOptionImg} alt={secondOptionImageAltText}></img>
            </div>
            <div className={`${secondOptionActive ? 'final-switcher-card-shadow-active' : 'final-switcher-card-shadow'}`}></div>
            <div className={`${secondOptionActive ? 'final-switcher-card-title-active' : 'final-switcher-card-title'}`}>
                {secondOptionTitle}
            </div>
        </div>
        <div className="final-switcher-card">
            <div className='final-switcher-card-shadow-active'></div>
            <div className="final-switcher-card-image">
                <img src={thirdOptionImg} alt={thirdOptionImageAltText}></img>
            </div>
            <div className='final-switcher-card-shadow-active'></div>
            <div className='final-switcher-card-title-active'>
                {thirdOptionTitle}
            </div>
        </div>
      </div>
      <div className="final-switcher-body">

          <div className="final-switcher-body-pickable">
                <div className="final-switcher-body-pickable-head">
                    <div className="final-switcher-body-pickable-head-left">
                        <div className={`${firstOptionActive ? 'final-switcher-body-pickable-head-left-vertical-active' : 'final-switcher-body-pickable-head-left-vertical'}`}></div>
                        <div className={`${firstOptionActive ? 'final-switcher-body-pickable-head-left-horizontal-active' : 'final-switcher-body-pickable-head-left-horizontal'}`}></div>
                    </div>
                    <div className="final-switcher-body-pickable-head-central" onClick={toggleChoiceHandler}>
                        <img src={SwitcherArrows} alt='final switcher arrows' className='final-switcher-body-pickable-head-central-arrows'></img>
                    </div>
                    <div className="final-switcher-body-pickable-head-right">
                        <div className={`${secondOptionActive ? 'final-switcher-body-pickable-head-right-horizontal-active' : 'final-switcher-body-pickable-head-right-horizontal'}`}></div>
                        <div className={`${secondOptionActive ? 'final-switcher-body-pickable-head-right-vertical-active' : 'final-switcher-body-pickable-head-right-vertical'}`}></div>
                    </div>
                </div> 
                <div className="final-switcher-body-pickable-middle">
                    <div className="final-switcher-body-pickable-middle-vertical"></div>
                </div>
                <div className="final-switcher-body-pickable-footer">
                    <div className="final-switcher-body-pickable-footer-card">
                        <div className="final-switcher-body-pickable-footer-card-image">
                            <img src={firstOptionActive ? firstOptionImg : secondOptionImg} 
                            alt={firstOptionActive ? firstOptionImageAltText : secondOptionImageAltText}></img>
                        </div>
                        <div className="final-switcher-body-pickable-footer-card-title">
                            {firstOptionActive ? firstOptionTitle : secondOptionTitle}
                        </div>
                        <div className="final-switcher-body-pickable-footer-card-shadow">
                            <div className="final-switcher-body-pickable-footer-card-shadow-image"></div>
                        </div>
                    </div>
                </div>
            
          </div>
          <div className="final-switcher-body-fixed"> 
            <div className="final-switcher-body-fixed-vertical"></div>
          </div>

      </div>
      <div className="final-switcher-footer">
        <div className="final-switcher-footer-top">
            <div className="final-switcher-footer-top-left">
                <div className="final-switcher-footer-top-left-vertical"></div>
                <div className="final-switcher-footer-top-left-horizontal"></div>
            </div>
            <div className="final-switcher-footer-top-right">
                <div className="final-switcher-footer-top-right-horizontal"></div>
                <div className="final-switcher-footer-top-right-vertical"></div>
            </div>
        </div>
        <div className="final-switcher-footer-bottom">
            <div className="final-switcher-footer-bottom-vertical"></div>
        </div>
      </div>
    </section>
  );
});

export default FinalSwitcher;
