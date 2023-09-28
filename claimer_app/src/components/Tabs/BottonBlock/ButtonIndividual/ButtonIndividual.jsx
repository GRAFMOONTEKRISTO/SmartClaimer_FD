import React from 'react';
import {Button} from "antd";
import classes from './ButtonIndividual.module.css';

const ButtonIndividual = () => {
    return (
        <Button className={classes.buttonlegal}>
            <div className={classes.textstyle}>
                Для физических лиц
            </div>
        </Button>
    );
}
export default ButtonIndividual;