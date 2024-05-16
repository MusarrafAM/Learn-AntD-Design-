import React from "react";
import TabPane from "antd/es/tabs/TabPane";
import { Tabs } from "antd";

const AntTabs = () => {
  return (
    <div>
      <h1>AntTabs</h1>
      <Tabs defaultActiveKey="1">
        <TabPane tab="First" key="1">
          <h1>First Tab</h1>
        </TabPane>
        <TabPane tab="Second" key="2">
          <h1>Second Tab</h1>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default AntTabs;
