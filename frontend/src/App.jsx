import "./app.css";
import CompanyPage from "./components/Pages/CompanyPage";
import PersonalPage from "./components/Pages/PersonalPage";
import Sign from "./components/Sign";
import TopBar from "./components/TopBar";
import { useCurrentUser } from "./hooks/useSign";

function App() {
  console.log(Boolean(localStorage.getItem("JWT")));
  const { data: currentUser, isLoading } = useCurrentUser({
    enabled: Boolean(localStorage.getItem("JWT")),
  });

  return (
    <div className="app">
      <TopBar currentUser={currentUser} />
      {isLoading ? (
        <div className="fill-back"></div>
      ) : (
        <Sign currentUser={currentUser} />
      )}
      <div className="app-body">
        {currentUser?.type === "Company" && <CompanyPage />}
        {currentUser?.type === "Personal" && <PersonalPage />}
      </div>
    </div>
  );
}

export default App;
