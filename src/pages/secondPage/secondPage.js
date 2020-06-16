import React from "react";
import NavigationSecondary from "../../components/navigation/navigationSecondary";
import Footer from "../../components/footer/footer";
import { gameModeClassic } from '../../constants/gameModes'
import { DRUID, SHAMAN } from '../../constants/localizations';
import DruidImg from '../../assets/images/druid.png';
import ShamanImg from '../../assets/images/shaman.png';

const SecondPage = React.memo((props) => {

  const { setPage, gameMode, navChoice, overlayMode } = props;

  setTimeout(()=>{
    setPage(3);
  }, 3000)

  return (
    <div className={`second-page ${gameMode === gameModeClassic ? 'second-page-classic' : 'second-page-azeroth'}`}>
        <NavigationSecondary gameMode={gameMode} navChoice={navChoice} overlayMode={overlayMode}/>
        <main >
          <div className='second-page-container'>
            <div className='second-page-container-left'>
              <div className='second-page-container-left-card second-page-container-left-card-special-sec' onClick={() => setPage(3)}>
                <img src={DruidImg} alt='Druid logo'></img>
                <div className='second-page-container-left-card-title'>{DRUID}</div>
              </div>
              <div className='second-page-container-left-card second-page-container-left-card-special' onClick={() => setPage(3)}>
                <img src={ShamanImg} alt='Shaman logo'></img>
                <div className='second-page-container-left-card-title'>{SHAMAN}</div>
              </div>
            </div>
            <div className='second-page-container-right '>
              <div className='second-page-container-right-shadow'></div>
            </div>
          </div>
        </main>
        <Footer overlayMode={overlayMode}/>
    </div>
  );
});

export default SecondPage;
