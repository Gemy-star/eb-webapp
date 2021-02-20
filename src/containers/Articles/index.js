import React from "react";
import Article from "../../component/Article";
import './_Articles.scss';
import {FormattedMessage} from 'react-intl';
import Currency from '../../assets/images/image-currency.jpg'
import Restaurant from '../../assets/images/image-restaurant.jpg'
import Plane from '../../assets/images/image-plane.jpg'
import Confetti from '../../assets/images/image-confetti.jpg'

const Articles = props => {
  return (
      <section className="articles">

          <div className="article__content container container--pall">
              <h2> <FormattedMessage id="articles.title"/></h2>

              <div className="article__grid">
                  <Article image={Currency} author={ <FormattedMessage id="articles.items.firstItem.author"/>} title={ <FormattedMessage id="articles.items.firstItem.title"/>} desc={<FormattedMessage id="articles.items.firstItem.desc"/>}/>
                  <Article image={Restaurant} author={ <FormattedMessage id="articles.items.secondItem.author"/>} title={ <FormattedMessage id="articles.items.secondItem.title"/>} desc={<FormattedMessage id="articles.items.secondItem.desc"/>}/>
                  <Article image={Plane} author={ <FormattedMessage id="articles.items.thirdItem.author"/>} title={ <FormattedMessage id="articles.items.thirdItem.title"/>} desc={<FormattedMessage id="articles.items.thirdItem.desc"/>}/>
                  <Article image={Confetti} author={ <FormattedMessage id="articles.items.fourthItem.author"/>} title={ <FormattedMessage id="articles.items.fourthItem.title"/>} desc={<FormattedMessage id="articles.items.fourthItem.desc"/>}/>
              </div>

          </div>
      </section>

  );
};


export default Articles;