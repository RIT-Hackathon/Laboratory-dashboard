const Sidebar = ({ activeTab, setActiveTab }) => {
    return (
      <div className="flex border-b border-gray-200 mb-6">
        {["dashboard", "reports", "history", "profile", "guide"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-6 font-medium ${
              activeTab === tab ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
    );
  };
  
  export default Sidebar;