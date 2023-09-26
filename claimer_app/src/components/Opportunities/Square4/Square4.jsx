import React from 'react';
import classes from './Square4.module.css'
import Ellipse from './Ellipse4.svg'
import Image from '../../../images/dir.svg'
const Square4 = () => {
    return (
        <div className={classes.square}>
            <div className={classes.content}>

                <div className={classes.imageUp}>
                    <img src={Ellipse} alt='Ellipse'/>
                </div>

                <div className={classes.title}>
                    <p>Маршрутизация документов</p>
                </div>

                <div className={classes.imageDown}>
                    <img src={Image} alt="LogoFile"/>
                </div>

                <div className={classes.description}>
                    <p>Создавайте юридические обращения и отправляйте в нужные инстанции, а мы поможем отследить статус выполнения обращения.</p>
                </div>

            </div>
        </div>
    );
}
export default Square4;