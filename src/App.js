import React, { useState, useEffect } from "react";
import FirstPage from "./pages/firstPage/firstPage";
import SecondPage from "./pages/secondPage/secondPage";
import ThirdPage from "./pages/thirdPage/thirdPage";
import FourthPage from "./pages/fourthPage/fourthPage";
import { fetchGameData } from "./api/index";
import { gameModeClassic } from "./constants/gameModes";

function App() {
  const [page, setPage] = useState(1);
  const [gameMode, setGameMode] = useState(gameModeClassic);
  const [navChoice, setNavChoice] = useState("");
  const [gameData, setGameData] = useState(null);
  const [finalGameData, setFinalGameData] = useState(null);
  const [winner, setWinner] = useState({
    "name": "Warlock",
    "isActive": true,
    "characteristics": [
        "Warlock - 2 ranged and 1 melee specs",
        "Warlock - Can have a pet companion",
        "Warlock - Very mobile character",
        "Warlock - Can not be interrupted"
    ]
});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchGameData();
      setGameData(response);
    };
    fetchData();
  }, []);

  const navChoiceHandler = (itemName) => {
    setNavChoice(itemName);
    const newGameData = { ...gameData };
    newGameData[gameMode].navigationClasses.forEach((element) => {
      element.isActive = element.name === itemName;
    });
    setGameData(newGameData);
  };

  const choiceHandler = (prevActive, newActive) => {
    const newGameData = { ...gameData }; 
    newGameData[gameMode].pickingClasses.forEach((element) => {
      if(element.name === prevActive){ element.isActive = false }
      else if(element.name === newActive) {element.isActive = true }
    });
    setGameData(newGameData);
  }



  const activePage = () => {
    switch (page) {
      case 1:
        return (
          <FirstPage
            setPage={setPage}
            gameMode={gameMode}
            setGameMode={setGameMode}
            navChoiceHandler={navChoiceHandler}
            gameData={gameData}
          />
        );
      case 2:
        return (
          <SecondPage
            setPage={setPage}
            gameMode={gameMode}
            navChoice={navChoice}
            gameData={gameData}
            overlayMode={true}
          />
        );
      case 3:
        return (
          <ThirdPage
            setPage={setPage}
            gameMode={gameMode}
            navChoice={navChoice}
            gameData={gameData}
            finalGameData={finalGameData}
            setFinalGameData={setFinalGameData}
            choiceHandler={choiceHandler}
            setWinner={setWinner}
          />
        );
      case 4:
        return <FourthPage setPage={setPage} 
        gameMode={gameMode}
        navChoice={navChoice}
        winner={winner}/>;
      default:
        return null;
    }
  };

  return activePage();
}

export default App;
