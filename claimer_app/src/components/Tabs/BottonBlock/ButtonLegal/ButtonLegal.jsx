import React from 'react';
import {Button} from "antd";
import classes from './ButtonLegal.module.css';

const ButtonLegal = () => {
    return (
        <Button className={classes.buttonlegal}>
            <div className={classes.textstyle}>
                Для юридических лиц
            </div>
        </Button>
    );
}
export default ButtonLegal;