import React from 'react';
import {Button} from "antd";
import classes from './ButtonTryIndividual.module.css';

const ButtonTryIndividual = () => {
    return (
        <Button className={classes.buttonTry}>
            <div className={classes.textstyle}>
                Попробовать
            </div>
        </Button>
    );
}
export default ButtonTryIndividual;