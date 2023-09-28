import './App.css';
import styles from './header.module.css'
import Logo from "./components/Header/Title/Logo/Logo";
import Name from './components/Header/Title/Name/Name'
import ButtonLogin from "./components/Header/Title/Button_login/Button_login";
import NameMiddle from "./components/Header/Midle/NameMiddle/NameMiddle";
import TextMiddle from "./components/Header/Midle/TextMiddle/TextMiddle";
import ButtonTryFree from "./components/Header/Midle/ButtonTryFree/ButtonTryFree";
import ImageMagician from "./components/Header/Midle/ImageMagician/ImageMagician";
import TitleOpportunities from "./components/Opportunities/Title/Title";
import Square1 from "./components/Opportunities/Square1/Square1";
import Square3 from "./components/Opportunities/Square3/Square3";
import Square2 from "./components/Opportunities/Square2/Square2";
import Square4 from "./components/Opportunities/Square4/Square4";
import ButtonRegistration from "./components/Header/Title/Buttom_registration/Button_registration";
import ImageMiddle from "./components/Opportunities/Image/Image";
import ButtonLegal from "./components/Tabs/BottonBlock/ButtonLegal/ButtonLegal";
import ButtonIndividual from "./components/Tabs/BottonBlock/ButtonIndividual/ButtonIndividual";
import InternalInformation from "./components/Tabs/BottonBlock/IndividualBlock/IndividualBlock";
// import {Logo,ButtomRegistration,Name,ButtonLogin,NameMiddle,TextMiddle,ButtonTryFree,ImageMagician} from "./components"
const App = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.content}>
                    <div className={styles.titleBlock}>
                        <Name/>
                        <Logo/>
                    </div>
                    <div className={styles.buttonBlock}>
                        <ButtonRegistration/>
                        <ButtonLogin/>
                    </div>
                </div>
            </header>

            <div className={styles.middle}>
                <div className={styles.content}>
                    <div className={styles.midleBlock}>
                        <NameMiddle/>
                        <TextMiddle/>
                        <ButtonTryFree/>
                    </div>
                    <div className={styles.imageContainer}>
                        <ImageMagician/>
                    </div>
                </div>
            </div>

            <div className={styles.opportunities}>
                <div className={styles.content}>
                    <div className={styles.title_opportunities}>
                        <TitleOpportunities/>
                        <div className={styles.container}>
                            <div className={styles.column}>
                                <Square1/>
                                <Square3/>
                                <ImageMiddle/>
                            </div>
                            <div className={styles.column}>
                                <Square2/>
                                <Square4/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.tabs}>
                <ButtonLegal/>
                <ButtonIndividual/>
                <div className={styles.contentTabs}>

                    <div>
                        <InternalInformation/>
                    </div>

                    <div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default App;
