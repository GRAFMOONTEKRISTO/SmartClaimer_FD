import React from 'react';
import classes from './Image.module.css';
import logoImage from '../../../images/middleimage.png'
const ImageMiddle = () => {
    return (
        <div className={classes.img}>
            <img src={logoImage} alt="Логотип" />
        </div>
    );
}
export default ImageMiddle;