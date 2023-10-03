import React from 'react';
import classes from './IndividualBlock.module.css'
import ButtonTryIndividual from "./ButtonTryIndividual/ButtonTryIndividual";
import ellipseInduvidual from "./EllipseIndividual.svg";
import InnerImageIndividual from "./InnerImageIndividualBlock/InnerImageIndividual";

const InternalInformation = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.gridContainer}>
                <div className={classes.title}>Сервис SmartClaimer поможет вам:</div>
                <div className={classes.generalDiscription}>
                    <div>
                        <img src={ellipseInduvidual} alt="Элипс" className={classes.image}/>
                    </div>
                    <div className={classes.description}>
                        сократить время, которое затрачивают юристы на составление и подготовку юридических документов
                    </div>
                    <div>
                        <img src={ellipseInduvidual} alt="Элипс" className={classes.image}/>
                    </div>
                    <div className={classes.description}>
                        повысить лояльность клиентов за счет решения конфликтных/спорных ситуаций в режиме одного окна
                    </div>
                </div>
                <ButtonTryIndividual/>
                <InnerImageIndividual/>
            </div>
        </div>
    );
};

export default InternalInformation;