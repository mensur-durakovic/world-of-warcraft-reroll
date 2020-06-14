import React from 'react';
import {
    FOOTER_ITEM_BUT_WHY,
    FOOTER_ITEM_ABOUT,
    FOOTER_ITEM_CONTACT_US,
} from '../../constants/localizations';

const Footer = React.memo(props => {

    const { overlayMode } = props;

    return <>
        <footer className='footer'>
            <ul>
                <li>
                    <div>
                        <a href="/">{FOOTER_ITEM_BUT_WHY}</a>
                    </div>
                    {overlayMode && <div className="after"></div>}
                </li>
                <li >
                    <div className='footer-divider'> </div>
                    {overlayMode && <div className="after"></div>}
                </li>
                <li>
                    <div>
                        <a href="/">{FOOTER_ITEM_ABOUT}</a>
                    </div>
                    {overlayMode && <div className="after"></div>}
                </li>
                <li>
                    <div className='footer-divider'> </div>
                    {overlayMode && <div className="after"></div>}
                </li>
                <li>
                    <div>
                        <a href="/">{FOOTER_ITEM_CONTACT_US}</a>
                    </div>
                    {overlayMode && <div className="after"></div>}
                </li>
            </ul>
        </footer>
    </>
});

export default Footer;