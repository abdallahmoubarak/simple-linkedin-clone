import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Skills from "../Skills";
import Button from "../Button";
import Input from "../Input";
import UploadImage from "../UploadImage";
import Education from "../Education";
import Experiences from "../Experiences";
import { authApi } from "../../util/axiosInstance";
import { client } from "../..";

export default function ProfilePage({ setProfile, currentUser }) {
  const [name, setName] = useState(currentUser?.name || "");
  const [phone, setPhone] = useState(currentUser?.phone || "");
  const [bio, setBio] = useState(currentUser?.bio || "");
  const [skills, setSkills] = useState(currentUser?.skills || []);
  const [educations, setEducations] = useState(currentUser?.educations || []);
  const [experiences, setExperiences] = useState(
    currentUser?.experiences || [],
  );

  return (
    <>
      <div className="profile-container">
        <div className="profile-personal-container">
          <div
            className="back-to-home pointer"
            onClick={() => setProfile(false)}>
            <IoIosArrowBack />
            <span>Back to home</span>
          </div>
          <UploadImage />
          <div className="inputs-container">
            <Input name="Name" value={name} setValue={setName} />
            <Input name="Phone" value={phone} setValue={setPhone} />
            <textarea
              placeholder="Bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
            <div className="profile-btn-container">
              <Button text="Save" />
            </div>
          </div>
        </div>
        <div className="profile-abilities-container">
          <Skills skills={skills} setSkills={setSkills} />
          <Education educations={educations} setEducations={setEducations} />
          <Experiences
            experiences={experiences}
            setExperiences={setExperiences}
          />

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
