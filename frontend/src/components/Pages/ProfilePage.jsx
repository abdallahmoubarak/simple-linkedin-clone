import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Skills from "../Skills";
import Button from "../Button";
import Education from "../Education";
import Experiences from "../Experiences";
import { authApi } from "../../util/axiosInstance";
import { client } from "../..";
import PersonalInfo from "../PersonalInfo";
import { useUpdateUser } from "../../hooks/useUserData";

export default function ProfilePage({ setProfile, currentUser }) {
  const [name, setName] = useState(currentUser?.name || "");
  const [phone, setPhone] = useState(currentUser?.phone || "");
  const [bio, setBio] = useState(currentUser?.bio || "");
  const [skills, setSkills] = useState(currentUser?.skills || []);
  const [educations, setEducations] = useState(currentUser?.educations || []);
  const [experiences, setExperiences] = useState(
    currentUser?.experiences || [],
  );
  const [editMode, setEditMode] = useState(false);
  const { mutate: updateUser } = useUpdateUser(setEditMode);

  const handleSaveBtn = () => {
    updateUser({ name, bio, phone, skills, educations, experiences });
  };

  return (
    <>
      <div className="profile-header">
        <div className="back-to-home pointer" onClick={() => setProfile(false)}>
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
      </div>
      <div className="profile-container">
        <div className="profile-personal-container">
          <PersonalInfo
            name={name}
            setName={setName}
            phone={phone}
            setPhone={setPhone}
            bio={bio}
            setBio={setBio}
            editMode={editMode}
            handleSaveBtn={handleSaveBtn}
          />
        </div>
        <div className="profile-abilities-container">
          {currentUser.type === "Personal" && (
            <>
              <Skills
                skills={skills}
                setSkills={setSkills}
                editMode={editMode}
              />
              <Education
                educations={educations}
                setEducations={setEducations}
                editMode={editMode}
              />
              <Experiences
                experiences={experiences}
                setExperiences={setExperiences}
                editMode={editMode}
              />
            </>
          )}

          <div className="profile-btn-container">
            <Button
              text="Logout"
              dark={true}
              onClick={() => {
                localStorage.removeItem("JWT");
                authApi.defaults.headers.Authorization = null;
                client.setQueryData(["User"], null);
                setProfile(false);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
