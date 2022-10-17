import Logo from "./Logo";
import { FaBell } from "react-icons/fa";

export default function TopBar({ currentUser, setOpenModal, setProfile }) {
  return (
    <>
      <div className="top-bar">
        <div className="logo-container">
          <Logo />
        </div>

        <div className="user-options-container">
          {currentUser && (
            <>
              <div className="bell pointer" onClick={() => setOpenModal(true)}>
                {currentUser.type === "Personal" && <FaBell />}
              </div>
              <div
                className="profile-img pointer"
                onClick={() => setProfile(true)}>
                <img src={currentUser?.profile_url} alt="" />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
