import React from 'react';
import {Button} from "antd";
import classes from './ButtonTry.module.css';

const ButtonTry = () => {
    return (
        <Button className={classes.buttonTry}>
            <div className={classes.textstyle}>
                Попробовать
            </div>
        </Button>
    );
}
export default ButtonTry;