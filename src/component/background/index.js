import React , {useContext}  from 'react';
import { useIntl } from 'react-intl';
import './background.scss'
import {FormattedMessage} from 'react-intl';


const Background = props => {
const locale = useIntl().locale;
return (
        <section className="hero">
            <div className="container">
                <div className={locale === "en" ? "hero__image" : "hero__image hero__arabic"}></div>

                <div className="hero__text container--pall">
                    <h1>
                        <FormattedMessage id="background.title"/>

                    </h1>
                    <p>
                        <FormattedMessage id="background.subtitle"/>

                    </p>
                    <a href="#" className="button hero__cta">
                        <FormattedMessage id="background.btn"/>
                    </a>
                </div>
            </div>
        </section>
    )
}


export default Background ;