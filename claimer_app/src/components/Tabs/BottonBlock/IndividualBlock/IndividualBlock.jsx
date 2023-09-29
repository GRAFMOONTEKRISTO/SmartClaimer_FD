import React from 'react';
import classes from './IndividualBlock.module.css'
import ButtonTryIndividual from "./ButtonTryIndividual/ButtonTryIndividual";
import ellipseInduvidual from "./EllipseIndividual.svg";

const InternalInformation = () => {
    return (
        <div className={classes.gridContainer}>
            <div className={classes.title}>Сервис SmartClaimer поможет вам:</div>
            <div className={classes.generalDiscription}>
                <img src={ellipseInduvidual} alt="Элипс" className={classes.image}/>
                <div className={classes.description}>
                    сократить время, которое затрачивают юристы на составление и подготовку юридических документов
                </div>
                <img src={ellipseInduvidual} alt="Элипс" className={classes.image}/>
                <div className={classes.description}>
                    повысить лояльность клиентов за счет решения конфликтных/спорных ситуаций в режиме одного окна
                </div>
            </div>
            <ButtonTryIndividual/>

        </div>
    );
};

export default InternalInformation;