import React from "react";
import '../../containers/Articles/Articles.scss';

const Article = ({image , author , title , desc }) => {

    return (
        <a href="#" className="article__item">
            <div className="article__image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="article__text">
                <div className="article__author">{author}</div>
                <div className="article__title">{title}</div>
                <div className="article__description">
                    {desc}
                </div>
            </div>
        </a>
    )
}


export default Article;