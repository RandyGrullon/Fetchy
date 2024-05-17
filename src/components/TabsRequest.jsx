import React from "react";
import RequestForm from "./RequestForm";

const TabsRequest = ({
  tabs,
  activeTabId,
  handleTabClick,
  handleAddTab,
  handleCloseTab,
  updateTabData,
}) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId);

  const handleMethodChange = (e) => {
    updateTabData(activeTabId, { method: e.target.value });
  };

  const handleUrlChange = (e) => {
    updateTabData(activeTabId, { url: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Método: ${activeTab.method}, URL: ${activeTab.url}`);
  };

  return (
    <div className="bg-gray-900 rounded-t-md h-full">
      <div className="flex overflow-x-auto">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`px-4 py-2 border-b-2 border-transparent text-gray-400 cursor-pointer transition-colors duration-200 ${
              tab.id === activeTabId
                ? "border-b-blue-500 text-white"
                : "hover:text-gray-100"
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            <span>{tab.method}</span>
            <button
              className="ml-1 text-gray-300 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                handleCloseTab(tab.id);
              }}
            >
              &#10006;
            </button>
          </div>
        ))}
        <div
          className="px-4 py-2 border-b-2 border-transparent text-gray-400 cursor-pointer transition-colors duration-200 hover:text-white"
          onClick={handleAddTab}
        >
          +
        </div>
      </div>
      <div className="p-4 h-full">
        {tabs.map((tab) => (
          <div key={tab.id} className={tab.id === activeTabId ? "" : "hidden"}>
            <RequestForm
              method={tab.method}
              url={tab.url}
              handleMethodChange={handleMethodChange}
              handleUrlChange={handleUrlChange}
              handleSubmit={handleSubmit}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsRequest;
