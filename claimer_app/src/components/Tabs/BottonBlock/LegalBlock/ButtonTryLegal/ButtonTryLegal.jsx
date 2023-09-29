import React from 'react';
import {Button} from "antd";
import classes from './ButtonTryLegal.module.css';

const ButtonTryLegal = () => {
    return (
        <Button className={classes.buttonTryLegal}>
            <div className={classes.textstyle}>
                Попробовать
            </div>
        </Button>
    );
}
export default ButtonTryLegal;