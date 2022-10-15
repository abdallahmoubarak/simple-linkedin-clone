import Logo from "./Logo";

export default function TopBar({ currentUser, userType }) {
  return (
    <div className="top-bar">
      <div className="logo-container">
        <Logo />
      </div>

      <div className="user-options-container">
        {currentUser && (
          <>
            <div>{userType === "Individual" && <span>🔔</span>}</div>
            <div className="profile-img"></div>
          </>
        )}
      </div>
    </div>
  );
}
