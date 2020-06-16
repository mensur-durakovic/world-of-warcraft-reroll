import React from "react";
import Navigation from "../../components/navigation/navigation";
import Footer from "../../components/footer/footer";
import { gameModeClassic, gameModeAzeroth } from '../../constants/gameModes'

import Logo from '../../assets/images/re_roll_logotyp.svg';
import ClassicActive from '../../assets/images/wow_classic_logo.png';

import AzerothActive from '../../assets/images/wow_bfa_logo.png';

const FirstPage = React.memo((props) => {

  const { setPage, gameMode, setGameMode, navChoiceHandler, gameData } = props;

  return (
    <div className={`first-page ${gameMode === gameModeClassic ? 'first-page-classic' : 'first-page-azeroth'}`}>
        <Navigation gameMode={gameMode} navChoiceHandler={navChoiceHandler} gameData={gameData}/>
        <main>
          <div className='wrapper'>
            <img src={Logo} alt='Re Roll logo'></img>
            <div className='game-mode-chooser'>
              <div className={`game-mode-chooser-image ${!(gameMode === gameModeAzeroth) ? 'game-mode-chooser-image-gray' : ''}`} 
                onClick={() => setGameMode(gameModeAzeroth)}>
                <img alt={'WoW Azeroth logo'} src={AzerothActive}></img>
                <div className={`shadow-bottom ${gameMode === gameModeAzeroth ? 'shadow-bottom-active' : ''}`}></div>
              </div>
              <div className={`game-mode-chooser-image ${!(gameMode === gameModeClassic) ? 'game-mode-chooser-image-gray' : ''}`}   
                onClick={() => setGameMode(gameModeClassic)}>
                <img alt='WoW classic logo' 
                  src={ClassicActive}></img>
                <div className={`shadow-bottom ${gameMode === gameModeClassic ? 'shadow-bottom-active' : ''}`}></div>
              </div>
            </div>
            <div className={`toss-it`} onClick={() => setPage(2)}>
              <div className='toss-it-image'></div>
            </div>
          </div>
        </main>
        <Footer />
    </div>
  );
});

export default FirstPage;
