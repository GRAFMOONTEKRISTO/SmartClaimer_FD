import React from 'react';
import classes from './Square2.module.css'
import Ellipse from './Ellipse2.svg'
import Image from '../../../images/mike.svg'
const Square2 = () => {
    return (
        <div className={classes.square}>
            <div className={classes.content}>

                <div className={classes.imageUp}>
                    <img src={Ellipse} alt='Ellipse'/>
                </div>

                <div className={classes.title}>
                    <p>Распознавание речи</p>
                </div>

                <div className={classes.imageDown}>
                    <img src={Image} alt="LogoFile"/>
                </div>

                <div className={classes.description}>
                    <p>Вы можете быстро создать нужный юридический документ с помощью голосовых сообщений в чате. Помимо этого есть возможность определения речи при обращении в колл-центр куда вы можете позвонить для помощи в составлении документа.</p>
                </div>

            </div>
        </div>
    );
}
export default Square2;