const CustomerDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [userProfile, setUserProfile] = useState({
    name: "Rahul Patel",
    email: "rahul.patel@example.com",
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Header userProfile={userProfile} />
      <div className="max-w-6xl mx-auto mt-6 px-4">
        <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <DashboardContent activeTab={activeTab} userProfile={userProfile} />
      </div>
    </div>
  );
};

export default CustomerDashboard;