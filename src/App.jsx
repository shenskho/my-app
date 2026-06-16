import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/Dashboard";
function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Sidebar />
        <DashboardPage />
      </div>
    </>
  );
}

export default App;
