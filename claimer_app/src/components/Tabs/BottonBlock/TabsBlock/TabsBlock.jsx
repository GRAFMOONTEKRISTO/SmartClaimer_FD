import React, {useState} from 'react';
import {Tabs} from 'antd';
import classes from './TabsBlock.module.css';
import InternalInformation from "../IndividualBlock/IndividualBlock";
import LegalBlock from "../LegalBlock/LegalBlock";

const TabsBlock = () => {
    const [activeTab, setActiveTab] = useState('1');
    const onChange = (key) => {
        setActiveTab(key);
    };
    return (
        <Tabs
            defaultActiveKey="1"
            onChange={onChange}
            type="card"
            className={classes.tabs}
        >
            <Tabs.TabPane
                tab={
                    <div className={`${classes.tab1} ${classes.custom_tab} ${activeTab === '1' ? classes.active : ''}`}>
                        Для юридических лиц
                    </div>
                }
                key="1"
            >
                <InternalInformation />
            </Tabs.TabPane>
            <Tabs.TabPane
                tab={
                    <div className={`${classes.tab2} ${classes.custom_tab} ${activeTab === '2' ? classes.active : ''}`}>
                        Для физических лиц
                    </div>
                }
                key="2"
            >
                <LegalBlock />
            </Tabs.TabPane>
        </Tabs>
    );
};
export default TabsBlock;