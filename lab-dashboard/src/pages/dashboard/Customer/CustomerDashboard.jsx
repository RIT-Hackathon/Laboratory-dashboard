import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import DashboardTabs from "./DashboardTabs";
import DashboardTab from "./DashboardTab";
import ReportsTab from "./ReportsTab";
import ProfileTab from "./ProfileTab";
import GuideTab from "./GuideTab";

const CustomerDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [userProfile] = useState({
    name: "rahul",
    email: "rahul.patel@example.com",
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Header userProfile={userProfile} />
      <div className="max-w-6xl mx-auto mt-6 px-4">
        <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="mt-4">
          {activeTab === "dashboard" && <DashboardTab userProfile={userProfile} />}
          {activeTab === "reports" && <ReportsTab />}
          {activeTab === "profile" && <ProfileTab userProfile={userProfile} />}
          {activeTab === "guide" && <GuideTab />}
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
