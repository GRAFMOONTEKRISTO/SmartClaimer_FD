import React from 'react';
import {Tabs} from 'antd';
import classes from "./TabsBlock.module.css";

const {TabPane} = Tabs;
const onChange = (key) => {
    console.log(key);
};
const TabsBlock = () => (
    <Tabs
        onChange={onChange}
        type="card"
        defaultActiveKey="1"
    >
        <div className={classes.buttonIndividual}>
            <TabPane tab="Для юридических лиц" key="1">

            </TabPane>
        </div>
        <div className={classes.buttonLegal}>
            <TabPane tab="Для физических лиц" key="2">

            </TabPane>
        </div>
    </Tabs>
);
export default TabsBlock;