import React from 'react';
import {Button} from 'antd';
import classes from './ButtonTryFree.module.css';

const ButtonTryFree = () => {
    return (
        <Button className={classes.container}>
            <div className={classes.buttonWrapper}>
                <div className={classes.buttonText}>Попробовать бесплатно</div>
            </div>
        </Button>
    );
};
export default ButtonTryFree;