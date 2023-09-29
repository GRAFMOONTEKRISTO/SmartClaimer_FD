import React from 'react';
import classes from './InnerImageIndividual.module.css';
import ManFromBlockInf from './qwe.png'
import Flash_Individual from './Flash_Individual.png'
const InnerImageIndividual = () => {
    return (
        <div className={classes.container}>
            <div className={classes.image}>
                <img src={ManFromBlockInf} alt="Man"/>
            </div>

            {/*<div className={classes.flash}>*/}
            {/*    <img src={Flash_Individual} alt="Man"/>*/}
            {/*</div>*/}

        </div>
    );
};
export default InnerImageIndividual;