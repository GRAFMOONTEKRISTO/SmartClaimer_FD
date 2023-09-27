import React from 'react';
import classes from './Square1.module.css'
import Ellipse from './Ellipse1.svg'
// import ImageMiddle from "../Image/Image";

const Square1 = () => {
    return (
        <div className={classes.square}>
            <div className={classes.content}>

                <div className={classes.imageUp}>
                    <img src={Ellipse} alt='Ellipse'/>
                </div>

                <div className={classes.title}>
                    <p>Определение запросов</p>
                </div>
                {/*<div>*/}
                {/*    <ImageMiddle/>*/}
                {/*</div>*/}
                {/*<div className={classes.imageDown}>*/}
                {/*    <img src={Image} alt="LogoLaptop"/>*/}
                {/*</div>*/}

                <div className={classes.description}>
                    <p>Описывайте произошедшую с вами ситуацию в чате и на основе вашего запроса будет предложено
                        составление определенного юридического документа, который вы сможете скачать или отправить.</p>
                </div>

            </div>
        </div>
    );
}
export default Square1;