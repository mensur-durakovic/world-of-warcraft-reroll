import React from 'react';
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
import Logo from '../../assets/images/re_roll_logotyp.svg';
import ClassicActive from '../../assets/images/wow_classic_logo.png';
import AzerothActive from '../../assets/images/wow_bfa_logo.png';

const NavigationSecondary = React.memo(props => {

    const { gameMode, navChoice, overlayMode } = props;

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

    return <>
        <nav className='navigation-secondary'>
            <div className='navigation-secondary-left' onClick={() => {window.location.href = '/'}}>
                <img src={Logo} alt='Re Roll logo'></img>
                {overlayMode && <div className="after"></div>}
            </div>
            <div className='navigation-secondary-central'>
                <img src={gameMode === gameModeClassic ? ClassicActive : AzerothActive} alt='Game mode'></img>
                {overlayMode && <div className="after"></div>}
            </div>
            <div className='navigation-secondary-right'>
                <span>{navChoice ? navChoice : NAVIGATION_ITEM_ALL}</span>
                <img src={getResourceImage(navChoice)} alt='Class choice'></img>
                {overlayMode && <div className="after"></div>}
            </div>
        </nav>
    </>
});

export default NavigationSecondary;