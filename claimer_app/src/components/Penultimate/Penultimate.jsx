import React from 'react';
import classes from './Penultimate.module.css'
import ButtonPenultimate from "./ButtonPenultimate/ButtonPenultimate";

const Penultimate = () => {
    return (
        <div className={classes.grid}>
            <div className={classes.title}>
                Начните упрощать себе жизнь со SmartClaimer
            </div>

            <div className={classes.centerbutton}>
                <ButtonPenultimate/>
            </div>
        </div>
    );
};

export default Penultimate;