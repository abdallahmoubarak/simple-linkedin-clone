import Logo from "./Logo";

export default function TopBar({ currentUser }) {
  return (
    <div className="top-bar">
      <div className="logo-container">
        <Logo />
      </div>

      <div className="user-options-container">
        {currentUser && (
          <>
            <div>{currentUser.type === "Personal" && <span>🔔</span>}</div>
            <div className="profile-img"></div>
          </>
        )}
      </div>
    </div>
  );
}
