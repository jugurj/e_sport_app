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
                />
            </div>
            <div className="footer_disc">
                &copy; VirtusPro League 2019. All Right Reserved
            </div>
        </footer>
    );
};

export default Footer;