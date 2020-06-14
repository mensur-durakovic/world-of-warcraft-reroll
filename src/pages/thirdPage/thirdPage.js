import React, { useState } from "react";
import NavigationSecondary from "../../components/navigation/navigationSecondary";
import Footer from "../../components/footer/footer";
import Switcher from "../../components/switcher/switcher";
import FinalSwitcher from "../../components/switcher/finalSwitcher";
import Coin from '../../assets/images/coin.svg';
import { gameModeClassic } from "../../constants/gameModes";

import {
  DRUID,
  SHAMAN,
  PRIEST,
  MAGE,
  WARLOCK,
  HUNTER,
} from "../../constants/localizations";
import Druid from "../../assets/images/druid.png";
import DruidGray from "../../assets/images/druid_gray.png";
import Shaman from "../../assets/images/shaman.png";
import ShamanGrey from "../../assets/images/shaman_gray.png";
import Priest from "../../assets/images/priest.png";
import PriestGrey from "../../assets/images/priest_gray.png";
import Mage from "../../assets/images/mage.png";
import MageGrey from "../../assets/images/mage_gray.png";
import Warlock from "../../assets/images/warlock.png";
import WarlockGrey from "../../assets/images/warlock_gray.png";
import Hunter from "../../assets/images/hunter.png";
import HunterGrey from "../../assets/images/hunter_gray.png";

const ThirdPage = React.memo((props) => {
  const { setPage, gameMode, gameData, finalGameData, setWinner, setFinalGameData, navChoice, choiceHandler } = props;
  const [finalVisible, setFinalVisible] = useState(false);

  const getOptionImage = (name, grayMode) => {
    switch (name) {
      case DRUID:
        return grayMode ? DruidGray : Druid;
      case SHAMAN:
        return grayMode ? ShamanGrey : Shaman;
      case PRIEST:
        return grayMode ? PriestGrey : Priest;
      case MAGE:
        return grayMode ? MageGrey : Mage;
      case WARLOCK:
        return grayMode ? WarlockGrey : Warlock;
      case HUNTER:
        return grayMode ? HunterGrey : Hunter;
      default:
        return grayMode ? DruidGray : Druid;
    }
  };

  const generateSwitchers = () => {
    if (!gameData) {
      return;
    }
    const switchers = [];
    for (let i = 0; i < gameData[gameMode].pickingClasses.length; i += 2) {
      const firstOption = gameData[gameMode].pickingClasses[i];
      const secondOption = gameData[gameMode].pickingClasses[i + 1];

      const newSwitcher = (
        <Switcher
          key={`switcher-${Math.random()}`}
          activeOption={firstOption.isActive ? 1 : 2}
          firstOptionTitle={firstOption.name}
          firstOptionImg={getOptionImage(firstOption.name)}
          firstOptionImgGray={getOptionImage(firstOption.name, true)}
          firstOptionImageAltText={`logo ${firstOption.name}`}
          secondOptionTitle={secondOption.name}
          secondOptionImg={getOptionImage(secondOption.name)}
          secondOptionImgGray={getOptionImage(secondOption.name, true)}
          secondOptionImageAltText={`logo ${secondOption.name}`}
          choiceHandler={choiceHandler}
          choiceHandlerDisabled={finalVisible}
        />
      );
      switchers.push(newSwitcher);
    }
    return switchers;
  };

  const lockFinalPicks = () => {
    const picks = gameData[gameMode].pickingClasses.filter(item => item.isActive);
    setFinalGameData(picks);
    setFinalVisible(true);
  }

  const generateFinalSwitcher = () => {
    if (!finalGameData) {
      return;
    }

    const firstPick = finalGameData[0], secondPick = finalGameData[1], thirdPick = finalGameData[2];

    return <FinalSwitcher
          activeOption={firstPick.isActive ? 1 : 2}

          firstOptionTitle={firstPick.name}
          firstOptionImg={getOptionImage(firstPick.name)}
          firstOptionImgGray={getOptionImage(firstPick.name, true)}
          firstOptionImageAltText={`logo ${firstPick.name}`}

          secondOptionTitle={secondPick.name}
          secondOptionImg={getOptionImage(secondPick.name)}
          secondOptionImgGray={getOptionImage(secondPick.name, true)}
          secondOptionImageAltText={`logo ${secondPick.name}`}

          thirdOptionTitle={thirdPick.name}
          thirdOptionImg={getOptionImage(thirdPick.name)}
          thirdOptionImageAltText={`logo ${thirdPick.name}`}

          choiceHandler={choiceHandler}
        />;
  };

  const calculateWinner = () => {
    const finalPicks = gameData[gameMode].pickingClasses.filter(item => item.isActive);

    // min and max included 
    const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    const winner = finalPicks[randomIntFromInterval(0, 1)];
    setWinner(winner);
    setPage(4);
  }


  return (
    <div
      className={`third-page ${
        gameMode === gameModeClassic
          ? "third-page-classic"
          : "third-page-azeroth"
      }`}
    >
      <NavigationSecondary gameMode={gameMode} navChoice={navChoice} />
      <main>
        <div className="third-page-title">{"Choose a role"}</div>
        <div className="third-page-container">{generateSwitchers()}</div>
        {!finalVisible && <div className="third-page-toss-it" onClick={lockFinalPicks}>
          <div className='third-page-toss-it-image'></div>
        </div>}
        {finalVisible && <section className="third-page-final">
          <div className="third-page-final-divider"></div>
          <div className="third-page-final-container">{generateFinalSwitcher()}</div>
          <div className="third-page-final-button">
            <div className='third-page-final-button-wrapper' onClick={calculateWinner}>
              <div className='third-page-final-button-image'>
                <img src={Coin} alt='coin'></img>
              </div>
              <div className='third-page-final-button-text'>
                {'Check'}
              </div>
            </div>
          </div>
        </section>}
      </main>
     
      <Footer />
    </div>
  );
});

export default ThirdPage;
