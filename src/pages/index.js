import React, { useState } from "react";
import TabsRequest from "@/components/TabsRequest";

const MainScreen = () => {
  const [tabs, setTabs] = useState([
    { id: 1, title: "Tab 1", active: true, method: "GET", url: "" },
  ]);
  const [activeTabId, setActiveTabId] = useState(1);

  const handleTabClick = (tabId) => {
    setActiveTabId(tabId);
  };

  const handleAddTab = () => {
    const newTabId = tabs.length + 1;
    const newTab = { id: newTabId, title: `Tab ${newTabId}`, active: true, method: "GET", url: "" };
    setTabs([...tabs, newTab]);
    setActiveTabId(newTabId);
  };

  const handleCloseTab = (tabId) => {
    const newTabs = tabs.filter((tab) => tab.id !== tabId);
    setTabs(newTabs);
    if (activeTabId === tabId && newTabs.length > 0) {
      setActiveTabId(newTabs[newTabs.length - 1].id);
    }
  };

  const handleSubmit = (tabId, newData) => {
    dispatch(updateTab({ id: tabId, newData }));
  };

  const updateTabData = (tabId, data) => {
    setTabs(tabs.map(tab => (tab.id === tabId ? { ...tab, ...data } : tab)));
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-700">
      <div className="flex-grow flex flex-col">
        <main className="flex-grow">
          <TabsRequest
            tabs={tabs}
            activeTabId={activeTabId}
            handleTabClick={handleTabClick}
            handleAddTab={handleAddTab}
            handleCloseTab={handleCloseTab}
            updateTabData={updateTabData}
          />
        </main>
      </div>
    </div>
  );
};

export default MainScreen;
