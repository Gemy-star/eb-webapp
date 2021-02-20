import React from "react";
import '../../containers/Features/_Features.scss';

const Feature = ({icon , title , description}) =>  {
    return(
        <div className="feature__item">
            <div className="feature__icon"><img src={icon}/></div>
            <div className="feature__title">
                {title}
            </div>
            <div className="feature__description">
                {description}
            </div>
        </div>
    )
}

export default Feature;