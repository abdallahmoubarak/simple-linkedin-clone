import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Skills from "../Skills";
import Button from "../Button";
import Input from "../Input";
import UploadImage from "../UploadImage";
import Education from "../Education";

export default function ProfilePage({ setProfile }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState(["React"]);
  const [educations, setEducations] = useState(defaultEducations);

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
          </div>
        </div>
        <div className="profile-abilities-container">
          <Skills skills={skills} setSkills={setSkills} />
          <Education educations={educations} setEducations={setEducations} />

          <div className="profile-btn-container">
            <Button text="Save" />
          </div>
        </div>
      </div>
    </>
  );
}

const defaultEducations = [
  {
    school: "University of Isfahan",
    degree: "Masters degree of Medical Information Systems",
    started_date: "12-5-2017",
    ended_date: "20-7-2020",
  },
];
