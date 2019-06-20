import React from 'react';
import { Logo } from '../utils/icons';

const Footer = () => {
    return (
        <footer>
            <div>
                <Logo
                    link="true"
                    linkTo="/"
                    width="70px"
                    height="70px"
                    add={{ backgroundSize: '70px 70px' }}
                />
            </div>
            <div className="footer_disc">
                &copy; League Champions 2019. All Rights Reserved<br/>
                <a href="https://virtus.pro/en/" target="_blank" rel="noopener noreferrer">Resources and data from VirtusPro page was used</a>
            </div>
        </footer>
    );
};

export default Footer;