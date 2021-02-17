import React from "react";
import './Footer.scss';
import Logo from '../../assets/images/logo.svg'
import Facebook from '../../assets/images/icon-facebook.svg'
import Instagram from '../../assets/images/icon-instagram.svg'
import Youtube from '../../assets/images/icon-youtube.svg';
import Pinterest from '../../assets/images/icon-pinterest.svg'
import Twitter from '../../assets/images/icon-twitter.svg';
import {FormattedMessage} from 'react-intl';


import {useHistory} from "react-router";

const Footer = props => {
  const history = useHistory();
    return(
        <footer className="footer">
            <div className="container">

                <a className="footer__logo" onClick={() => history.push('/')}>
                    <img src={Logo}/>
                </a>

                <div className="footer__social">
                    <a href="#">
                        <img src={Facebook} width="20" height="20" alt="facebook"/>

                    </a>
                    <a href="#">
                        <img src={Youtube} width="20" height="20" alt="youtube"/>

                    </a>
                    <a href="#">
                        <img src={Twitter} width="20" height="20" alt="twitter"/>

                    </a>
                    <a href="#">
                        <img src={Pinterest} width="20" height="20" alt="pinterest"/>

                    </a>
                    <a href="#">
                        <img src={Instagram} width="20" height="20" alt="instagram"/>

                    </a>
                </div>

                <div className="footer__links col1">
                    <a href="#"><FormattedMessage id="footer.links.about"/></a>
                    <a href="#"><FormattedMessage id="footer.links.contact"/></a>
                    <a href="#"><FormattedMessage id="footer.links.blog"/></a>
                </div>

                <div className="footer__links col2">
                    <a href="#"><FormattedMessage id="footer.links.blog"/></a>
                    <a href="#"><FormattedMessage id="footer.links.support"/></a>
                    <a href="#"><FormattedMessage id="footer.links.privacy"/></a>
                </div>

                <div className="footer__cta">
                    <a href="#" className="button"><FormattedMessage id="background.btn"/></a>
                </div>

                <div className="footer__copyright">
                    &copy; <FormattedMessage id="footer.links.rights"/>
                </div>

            </div>
        </footer>
    )
}


export default Footer;