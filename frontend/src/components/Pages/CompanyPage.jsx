import { useState } from "react";
import ApplicantsPage from "./ApplicantsPage";
import CompanyMainPage from "./CompanyMainPage";
import ProfilePage from "./ProfilePage";

export default function CompanyPage() {
  const [main, setMain] = useState(true);
  const [offerId, setOfferId] = useState([]);
  const [viewProfile, setViewProfile] = useState(true);

  const handleOpenProfile = (id) => {
    alert(id);
  };

  return (
    <>
      {main ? (
        <CompanyMainPage setMain={setMain} setOfferId={setOfferId} />
      ) : viewProfile ? (
        <ProfilePage />
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
