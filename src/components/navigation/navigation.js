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
import TankInactive from '../../assets/images/menu_option_tank_gray.png';
import AllActive from '../../assets/images/menu_option_all.png';
import AllInactive from '../../assets/images/menu_option_all_gray.png';
import HealerActive from '../../assets/images/menu_option_healer.png';
import HealerInactive from '../../assets/images/menu_option_healer_gray.png';
import RangedActive from '../../assets/images/menu_option_ranged_dps.png';
import RangedInactive from '../../assets/images/menu_option_ranged_dps_gray.png';
import MeleeActive from '../../assets/images/menu_option_dps_melee.png';
import MeleeInactive from '../../assets/images/menu_option_dps_melee_gray.png';

const Navigation = React.memo(props => {

    const { gameMode, navChoiceHandler, gameData } = props;
    const [animationDirection, setAnimationDirection] = useState("");
    const chosenGameMode = gameMode ? gameMode : gameModeClassic;


    const getResourceImage = (name, isActive) => {
        switch(name){
            case NAVIGATION_ITEM_ALL: return isActive ? AllActive : AllInactive;
            case NAVIGATION_ITEM_TANK_ONLY: return isActive ? TankActive : TankInactive;
            case NAVIGATION_ITEM_HEALER_ONLY: return isActive ? HealerActive : HealerInactive;
            case NAVIGATION_ITEM_RANGED_DPS_ONLY: return isActive ? RangedActive : RangedInactive;
            case NAVIGATION_ITEM_MELEE_DPS_ONLY: return isActive ? MeleeActive : MeleeInactive;
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
                    <div className='navigation-logo-icon-wrapper'>
                        <img src={getResourceImage(item.name, item.isActive)} alt={item.name}></img>
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