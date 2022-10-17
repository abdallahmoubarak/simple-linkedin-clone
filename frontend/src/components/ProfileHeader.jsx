import { IoIosArrowBack } from "react-icons/io";
import Button from "./Button";

export default function ProfileHeader({
  setProfile,
  setEditMode,
  editMode,
  setUser,
  backTo,
}) {
  return (
    <>
      <div className="profile-header">
        {!!setProfile ? (
          <>
            <div
              className="back-to-home pointer"
              onClick={() => setProfile(false)}>
              <IoIosArrowBack />
              <span>Back to home</span>
            </div>

            <div className="edit-mode">
              <Button
                text={editMode ? "Cancel" : "Edit"}
                dark={true}
                onClick={() => setEditMode(!editMode)}
              />
            </div>
          </>
        ) : (
          <div className="back-to-home pointer" onClick={() => setUser(false)}>
            <IoIosArrowBack />
            <span>Back to {backTo}</span>
          </div>
        )}
      </div>
    </>
  );
}
