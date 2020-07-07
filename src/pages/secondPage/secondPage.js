import React, { useState } from "react";
import NavigationSecondary from "../../components/navigation/navigationSecondary";
import Footer from "../../components/footer/footer";
import Switcher from "../../components/switcher/switcher";
import FinalSwitcher from "../../components/switcher/finalSwitcher";
import Coin from "../../assets/images/coin.svg";
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
import Shaman from "../../assets/images/shaman.png";
import Priest from "../../assets/images/priest.png";
import Mage from "../../assets/images/mage.png";
import Warlock from "../../assets/images/warlock.png";
import Hunter from "../../assets/images/hunter.png";

const SecondPage = React.memo((props) => {
  const {
    setPage,
    gameMode,
    gameData,
    finalGameData,
    setWinner,
    setFinalGameData,
    navChoice,
    choiceHandler,
  } = props;
  const [finalVisible, setFinalVisible] = useState(false);

  const getOptionImage = (name) => {
    switch (name) {
      case DRUID:
        return Druid;
      case SHAMAN:
        return Shaman;
      case PRIEST:
        return Priest;
      case MAGE:
        return Mage;
      case WARLOCK:
        return Warlock;
      case HUNTER:
        return Hunter;
      default:
        return Druid;
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
          firstOptionImageAltText={`logo ${firstOption.name}`}
          secondOptionTitle={secondOption.name}
          secondOptionImg={getOptionImage(secondOption.name)}
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
    const picks = gameData[gameMode].pickingClasses.filter(
      (item) => item.isActive
    );
    setFinalGameData(picks);
    setFinalVisible(true);
  };

  const generateFinalSwitcher = () => {
    if (!finalGameData) {
      return;
    }

    const firstPick = finalGameData[0],
      secondPick = finalGameData[1],
      thirdPick = finalGameData[2];

    return (
      <FinalSwitcher
        activeOption={firstPick.isActive ? 1 : 2}
        firstOptionTitle={firstPick.name}
        firstOptionImg={getOptionImage(firstPick.name)}
        firstOptionImageAltText={`logo ${firstPick.name}`}
        secondOptionTitle={secondPick.name}
        secondOptionImg={getOptionImage(secondPick.name)}
        secondOptionImageAltText={`logo ${secondPick.name}`}
        thirdOptionTitle={thirdPick.name}
        thirdOptionImg={getOptionImage(thirdPick.name)}
        thirdOptionImageAltText={`logo ${thirdPick.name}`}
        choiceHandler={choiceHandler}
      />
    );
  };

  const calculateWinner = () => {
    const finalPicks = gameData[gameMode].pickingClasses.filter(
      (item) => item.isActive
    );

    // min and max included
    const randomIntFromInterval = (min, max) =>
      Math.floor(Math.random() * (max - min + 1) + min);
    const winner = finalPicks[randomIntFromInterval(0, 1)];
    setWinner(winner);
    setPage(3);
  };

  return (
    <>
      <div
        className={`second-page ${
          gameMode === gameModeClassic
            ? "second-page-classic"
            : "second-page-azeroth"
        }`}
      >
        <div className="animated">
          <div className="animated-shadow"></div>
        </div>
        <NavigationSecondary gameMode={gameMode} navChoice={navChoice} />
        <main>
          <div className="second-page-title">{"Choose a role"}</div>
          <div className="second-page-container">{generateSwitchers()}</div>
          {!finalVisible && (
            <div className="second-page-toss-it" onClick={lockFinalPicks}>
              <div className="second-page-toss-it-image"></div>
            </div>
          )}
          {finalVisible && (
            <section className="second-page-final">
              <div className="second-page-final-divider"></div>
              <div className="second-page-final-container">
                {generateFinalSwitcher()}
              </div>
              <div className="second-page-final-button">
                <div
                  className="second-page-final-button-wrapper"
                  onClick={calculateWinner}
                >
                  <div className="second-page-final-button-image">
                    <img src={Coin} alt="coin"></img>
                  </div>
                  <div className="second-page-final-button-text">{"Check"}</div>
                </div>
              </div>
            </section>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
});

export default SecondPage;
