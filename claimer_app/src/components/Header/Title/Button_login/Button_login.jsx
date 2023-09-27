import React from 'react';
import {Button} from 'antd';
import classes from './Button_login.module.css';

const ButtonLogin = () => {
    return (
        <Button className={classes.container}>
            <div className={classes.buttonWrapper}>
                <div className={classes.buttonText}>Войти</div>
            </div>
        </Button>
    );
};
export default ButtonLogin;