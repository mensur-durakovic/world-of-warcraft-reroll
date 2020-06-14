import React from "react";
import Navigation from "../../components/navigation/navigation";
import Footer from "../../components/footer/footer";
import { gameModeClassic, gameModeAzeroth } from '../../constants/gameModes'

import Logo from '../../assets/images/re_roll_logotyp.svg';
import ClassicActive from '../../assets/images/wow_classic_logo.png';
import ClassicInactive from '../../assets/images/wow_classic_logo_gray.png';

import AzerothActive from '../../assets/images/wow_bfa_logo.png';
import AzerothInactive from '../../assets/images/wow_bfa_logo_gray.png';

const FirstPage = React.memo((props) => {

  const { setPage, gameMode, setGameMode, navChoiceHandler, gameData } = props;

  return (
    <div className={`first-page ${gameMode === gameModeClassic ? 'first-page-classic' : 'first-page-azeroth'}`}>
        <Navigation gameMode={gameMode} navChoiceHandler={navChoiceHandler} gameData={gameData}/>
        <main>
          <div className='wrapper'>
            <img src={Logo} alt='Re Roll logo'></img>
            <div className='game-mode-chooser'>
              <div className='game-mode-chooser-image' onClick={() => setGameMode(gameModeAzeroth)}>
                <img alt={`${gameMode === gameModeAzeroth ? 'WoW Azeroth logo' : 'WoW Azeroth logo'} `} 
                  src={`${gameMode === gameModeAzeroth ? AzerothActive : AzerothInactive} `}></img>
                <div className={`shadow-bottom ${gameMode === gameModeAzeroth ? 'shadow-bottom-active' : ''}`}></div>
              </div>
              <div className='game-mode-chooser-image'  onClick={() => setGameMode(gameModeClassic)}>
                <img alt={`${gameMode === gameModeClassic ? 'WoW classic logo' : 'WoW classic logo gray'} `} 
                  src={`${gameMode === gameModeClassic ? ClassicActive : ClassicInactive} `}></img>
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
