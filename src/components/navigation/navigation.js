import React, { useState } from 'react';
import {
    NAVIGATION_ITEM_ALL,
    NAVIGATION_ITEM_TANK_ONLY,
    NAVIGATION_ITEM_HEALER_ONLY,
    NAVIGATION_ITEM_RANGED_DPS_ONLY,
    NAVIGATION_ITEM_MELEE_DPS_ONLY,
} from '../../constants/localizations';

import { gameModeClassic } from '../../constants/gameModes'

import TankActive from '../../assets/images/menu_option_tank.png';
import AllActive from '../../assets/images/menu_option_all.png';
import HealerActive from '../../assets/images/menu_option_healer.png';
import RangedActive from '../../assets/images/menu_option_ranged_dps.png';
import MeleeActive from '../../assets/images/menu_option_dps_melee.png';

const Navigation = React.memo(props => {

    const { gameMode, navChoiceHandler, gameData } = props;
    const [animationDirection, setAnimationDirection] = useState("");
    const chosenGameMode = gameMode ? gameMode : gameModeClassic;


    const getResourceImage = (name) => {
        switch(name){
            case NAVIGATION_ITEM_ALL: return AllActive;
            case NAVIGATION_ITEM_TANK_ONLY: return TankActive;
            case NAVIGATION_ITEM_HEALER_ONLY: return HealerActive;
            case NAVIGATION_ITEM_RANGED_DPS_ONLY: return RangedActive;
            case NAVIGATION_ITEM_MELEE_DPS_ONLY: return MeleeActive;
            default: return AllActive;
        }
    }

    const handleAnimationDirection = (itemName) => {
        const currentActive = gameData[chosenGameMode].navigationClasses.findIndex(item => item.isActive);
        const newActive = gameData[chosenGameMode].navigationClasses.findIndex(item => item.name === itemName);
        setAnimationDirection(newActive > currentActive ? 'left' : 'right');
        navChoiceHandler(itemName);
    }

    const mappedNavItems = gameData ? gameData[chosenGameMode].navigationClasses.map(item => 
        <li key={`navigation-item-${Math.random()}`}>
            <div className='navigation-logo-container' onClick={() => handleAnimationDirection(item.name)}>
                <a href="/">{item.name}</a>
                <div className='navigation-logo-wrapper'>
                    <div className={`navigation-logo ${item.isActive 
                        ? `navigation-logo-active navigation-logo-active-${animationDirection}` : ''}`}>
                    </div>
                    <div className={`navigation-logo-icon-wrapper ${!item.isActive ? 'navigation-logo-icon-wrapper-gray' : ''}`}>
                        <img src={getResourceImage(item.name)} alt={item.name}></img>
                    </div>
                </div>
                
            </div>
        </li>
    ) : null;

    return <>
        <nav className='navigation'>
            <ul>
                {mappedNavItems}
            </ul>
        </nav>
    </>
});

export default Navigation;