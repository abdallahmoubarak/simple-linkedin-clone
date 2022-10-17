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
import Strategy from "../Strategy";

export default function ProfilePage({ setProfile, currentUser, setUser }) {
  const [name, setName] = useState(currentUser?.name || "");
  const [phone, setPhone] = useState(currentUser?.phone || "");
  const [bio, setBio] = useState(currentUser?.bio || "");
  const [skills, setSkills] = useState(currentUser?.skills || []);
  const [educations, setEducations] = useState(currentUser?.educations || []);
  const [image, setImage] = useState();
  const [img64, setImg64] = useState();
  const [experiences, setExperiences] = useState(
    currentUser?.experiences || [],
  );
  const [editMode, setEditMode] = useState(false);
  const { mutate: updateUser } = useUpdateUser(setEditMode);

  const handleSaveBtn = () => {
    updateUser({
      name,
      bio,
      phone,
      skills,
      educations,
      experiences,
      image: img64,
    });
  };

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
            <span>Back to applicants</span>
          </div>
        )}
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
            currentUser={currentUser}
            image={image}
            setImage={setImage}
            setImg64={setImg64}
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

          {currentUser.type === "Company" && (
            <>
              <Strategy name="Vision" editMode={editMode} />
              <Strategy name="Mission" editMode={editMode} />
              <Strategy name="Goals" editMode={editMode} />
              <Strategy name="Address" editMode={editMode} />
            </>
          )}

          <div className="profile-btn-container">
            {!!setProfile && (
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
            )}
          </div>
        </div>
      </div>
    </>
  );
}
