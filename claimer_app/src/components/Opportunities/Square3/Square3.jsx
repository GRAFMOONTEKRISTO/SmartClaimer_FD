import React from 'react';
import classes from './Square3.module.css'
import Ellipse from './Ellipse3.svg'
import Image from '../../../images/file.svg'
const Square3 = () => {
    return (
        <div className={classes.square}>
            <div className={classes.content}>

                <div className={classes.imageUp}>
                    <img src={Ellipse} alt='Ellipse'/>
                </div>

                <div className={classes.title}>
                    <p>Извлечение информации</p>
                </div>

                <div className={classes.imageDown}>
                    <img src={Image} alt="LogoFile"/>
                </div>

                <div className={classes.description}>
                    <p>С помощью передовых технологий искусственного интеллекта извлекайте с легкостью информацию из загруженных документов, ускоряйте процессы и принимайте обоснованные решения быстрее.</p>
                </div>

            </div>
        </div>
    );
}
export default Square3;