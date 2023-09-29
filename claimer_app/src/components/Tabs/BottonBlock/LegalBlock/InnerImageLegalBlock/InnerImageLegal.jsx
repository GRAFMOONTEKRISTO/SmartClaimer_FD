import React from 'react';
import classes from './InnerImageLegal.module.css';
import MenFromIndividualBlock from './ManFromLegalBlock.png'

const InnerImageLegal = () => {
    return (
        <div className={classes.container}>
            <div className={classes.image}>
                <img src={MenFromIndividualBlock} alt="Man"/>
            </div>
        </div>
    );
};
export default InnerImageLegal;