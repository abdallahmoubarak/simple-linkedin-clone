import { useState } from "react";
import "./app.css";
import CompanyPage from "./components/Pages/CompanyPage";
import PersonalPage from "./components/Pages/PersonalPage";
import ProfilePage from "./components/Pages/ProfilePage";
import Sign from "./components/Sign";
import TopBar from "./components/TopBar";
import { useCurrentUser } from "./hooks/useSign";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [profile, setProfile] = useState(false);

  const { data: currentUser, isLoading } = useCurrentUser({
    enabled: Boolean(localStorage.getItem("JWT")),
  });

  return (
    <div className="app">
      <TopBar
        currentUser={currentUser}
        setOpenModal={setOpenModal}
        setProfile={setProfile}
      />
      {isLoading ? (
        <div className="fill-back"></div>
      ) : (
        <Sign currentUser={currentUser} />
      )}
      <div className="app-body">
        {profile ? (
          <ProfilePage setProfile={setProfile} currentUser={currentUser} />
        ) : (
          <>
            {currentUser?.type === "Company" && (
              <CompanyPage currentUser={currentUser} />
            )}
            {currentUser?.type === "Personal" && (
              <PersonalPage currentUser={currentUser} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
