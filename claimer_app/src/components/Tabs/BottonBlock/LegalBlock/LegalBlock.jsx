import React from 'react';
import classes from './LegalBlock.module.css'
import ButtonTryLegal from "./ButtonTryLegal/ButtonTryLegal";
import ellipseLegal from "./EllipseLegal.svg";
import InnerImageLegal from "./InnerImageLegalBlock/InnerImageLegal";

const LegalBlock = () => {
    return (
        <div className={classes.gridContainer}>
            <div className={classes.title}>Сервис SmartClaimer поможет вам:</div>
            <div className={classes.generalDiscription}>
                <img src={ellipseLegal} alt="Элипс" className={classes.image}/>
                <div className={classes.description}>
                    отстоять свои права и интересы при взаимодействии с госорганами и компаниями
                </div>
                <img src={ellipseLegal} alt="Элипс" className={classes.image}/>
                <div className={classes.description}>
                    составить и подать жалобу/претензию без специальных юридических знаний, временных затрат и бюрократии
                </div>
            </div>
            <ButtonTryLegal/>


        </div>
    );
};

export default LegalBlock;