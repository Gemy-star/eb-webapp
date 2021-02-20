import React, {useState, useContext} from 'react';
import './_header.scss';
import logo from '../../assets/images/logo.svg';
import {FormattedMessage} from 'react-intl';
import {LocalizationContext} from "../../context/LocalizationContext";
import {useHistory} from "react-router";
import hamburger from '../../assets/images/icon-hamburger.svg';
import iconClose from '../../assets/images/icon-close.svg';


const Header = props => {
    const [open , setOpen] = useState(false)
    const [locale, setLocale] = useContext(LocalizationContext);
    const history = useHistory();
    const handleClick = () => {
        setOpen(!open)
        const btnHamburger = document.querySelector('#btnHamburger');
        const body = document.querySelector('body');
        const header = document.querySelector('.header');
        const overlay = document.querySelector('.overlay');
        const fadeElems = document.querySelectorAll('.has-fade');
        if (header.classList.contains('open')) {
            body.classList.remove('noscroll');
            header.classList.remove('open');
            fadeElems.forEach(function (element) {
                element.classList.remove('fade-in');
                element.classList.add('fade-out');
            });

        } else {
            body.classList.add('noscroll');
            header.classList.add('open');
            fadeElems.forEach(function (element) {
                element.classList.remove('fade-out');
                element.classList.add('fade-in');
            });

        }
    }
    return (

        <header className="header">
            <div className="overlay has-fade"></div>

            <nav className="container container--pall flex flex-jc-sb flex-ai-c">
                <a onClick={() =>  history.push('/')} className="header__logo">
                    <img src={logo} alt="Easybank"/>
                </a>

                <img src={open ? iconClose : hamburger} onClick={handleClick} className="header__toggle hide-for-desktop" />

                <div className="header__links hide-for-mobile">
                    <a href="#">
                        <FormattedMessage id="header.home"/>
                    </a>
                    <a href="#">
                    <FormattedMessage id="header.about"/>
                </a>
                    <a href="#">
                    <FormattedMessage id="header.contact"/>
                </a>
                    <a href="#">
                    <FormattedMessage id="header.blog"/>
                </a>
                    {locale ==  "en" ?
                        <a href="#">
                            <FormattedMessage id="header.careers"/>
                        </a> : <div></div>
                    }
                </div>

                <a onClick={(e) =>  locale ==  "en" ? setLocale('ar') : setLocale('en')} className="button header__cta hide-for-mobile">                      <FormattedMessage id="header.btn" /></a>
            </nav>

            <div className="header__menu has-fade">
                <a href=""> <FormattedMessage id="header.home"/></a>
                <a href=""> <FormattedMessage id="header.about"/>
                </a>
                <a href=""> <FormattedMessage id="header.contact"/>
                </a>
                <a href="">
                    <FormattedMessage id="header.blog"/>

                </a>
                <a href=""> <FormattedMessage id="header.careers"/>
                </a>
            </div>

        </header>
    )
};


export default Header;