import { useState } from "react";
import ApplicantsPage from "./ApplicantsPage";
import CompanyMainPage from "./CompanyMainPage";
import ProfilePage from "./ProfilePage";

export default function CompanyPage() {
  const [main, setMain] = useState(true);
  const [offerId, setOfferId] = useState([]);
  const [user, setUser] = useState("");

  const handleOpenProfile = (user) => {
    console.log(user);
    setUser(user);
  };

  return (
    <>
      {main ? (
        <CompanyMainPage setMain={setMain} setOfferId={setOfferId} />
      ) : !!user ? (
        <ProfilePage currentUser={user} setUser={setUser} />
      ) : (
        <ApplicantsPage
          setMain={setMain}
          offerId={offerId}
          handleOpenProfile={handleOpenProfile}
        />
      )}
    </>
  );
}
