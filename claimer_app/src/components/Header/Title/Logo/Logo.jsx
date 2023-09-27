import React from 'react';
import classes from './Logo.module.css';
import logoImage from '../../../../images/logosber.svg'
const Logo = () => {
    return (
        <div className={classes.logo}>
            <img src={logoImage} alt="Логотип" />
        </div>
    );
}
export default Logo;