import React from 'react';
import classes from './Image.module.css';
import logoImage1 from '../../../images/middleimage1.png'
import logoImage2 from '../../../images/middleimage2.png'

const ImageMiddle = () => {
    return (
        <div className={classes.img2}>
            <img src={logoImage2} alt="Логотип2"/>
            <div className={classes.img}>
                <img src={logoImage1} alt="Логотип"/>
            </div>
        </div>


    );
};
export default ImageMiddle;