import React from "react";
import './Features.scss';
import Feature from "../../component/Feature";
import Online from '../../assets/images/icon-online.svg';
import Budget from '../../assets/images/icon-budgeting.svg';
import Onboard from '../../assets/images/icon-onboarding.svg';
import Api from '../../assets/images/icon-api.svg';
import {FormattedMessage} from 'react-intl';


const Features = props => {
    return (
        <section className="feature">

            <div className="feature__content container container--pall">

                <div className="feature__intro">
                    <h2><FormattedMessage id="features.head.title"/></h2>
                    <p>
                        <FormattedMessage id="features.head.subtitle"/>
                    </p>
                </div>

            <div className="feature__grid">
                <Feature icon={Online} title={<FormattedMessage id="features.grid.firstItem.title"/>} description={<FormattedMessage id="features.grid.firstItem.subtitle"/>}/>
                <Feature icon={Budget} title={<FormattedMessage id="features.grid.secondItem.title"/>} description={<FormattedMessage id="features.grid.secondItem.subtitle"/>}/>
                <Feature icon={Onboard} title={<FormattedMessage id="features.grid.thirdItem.title"/>} description={<FormattedMessage id="features.grid.thirdItem.subtitle"/>}/>
                <Feature icon={Api} title={<FormattedMessage id="features.grid.fourthItem.title"/>} description={<FormattedMessage id="features.grid.fourthItem.subtitle"/>}/>
            </div>
            </div>
        </section>

    )
};



export default Features;