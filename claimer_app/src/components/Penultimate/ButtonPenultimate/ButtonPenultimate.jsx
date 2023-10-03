import React from 'react';
import {Button} from 'antd';
import classes from './ButtonPenultimate.module.css';

const ButtonPenultimate = () => {
    return (
        <Button className={classes.container}>
            <div className={classes.buttonWrapper}>
                <div className={classes.buttonText}>Попробовать бесплатно</div>
            </div>
        </Button>
    );
};
export default ButtonPenultimate;