import React from 'react';
import {Button} from 'antd';
import classes from './Button_registration.module.css';

const ButtonRegistration = () => {
    return (
        <Button className={classes.container}>
            <div className={classes.buttonWrapper}>
                <div className={classes.buttonText}>Зарегистрироваться</div>
            </div>
        </Button>
    );
};
export default ButtonRegistration;