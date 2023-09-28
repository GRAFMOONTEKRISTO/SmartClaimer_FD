import React from 'react';
import classes from './IndividualBlock.module.css'
import ButtonTry from "./ButtonTry/ButtonTry";
import ellipse from "./Ellipse.svg";

const InternalInformation = () => {
    return (
        <div className={classes.gridContainer}>
            <div className={classes.title}>Сервис SmartClaimer поможет вам:</div>
            <div className={classes.generalDiscription}>
                <img src={ellipse} alt="Элипс"/>
                <div className={classes.description}>сократить время, которое затрачивают юристы на составление и подготовку юридических документов</div>
                <div className={classes.description}>повысить лояльность клиентов за счет решения конфликтных/спорных ситуаций в режиме одного окна</div>
            </div>
            <ButtonTry/>

        </div>
    );
};

export default InternalInformation;