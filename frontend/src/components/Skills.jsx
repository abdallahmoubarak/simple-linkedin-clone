import Input from "./Input";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { useState } from "react";

export default function Skills({ skills, setSkills }) {
  const [skill, setSkill] = useState("");

  return (
    <>
      <div className="profile-section-container">
        <div className="profile-abilities-title">Skills</div>
        <div className="skills-list">
          {skills?.map((skill, k) => (
            <li key={k} className="skill">
              <div>{skill}</div>
              <div
                className="pointer"
                onClick={() => setSkills(skills.filter((s) => s !== skill))}>
                <IoIosRemoveCircleOutline />
              </div>
            </li>
          ))}
        </div>
        <div className="skill-input-container">
          <Input
            name="Add a skill"
            value={skill}
            setValue={setSkill}
            onKeyPress={(e) => {
              e.key === "Enter" && setSkills([...skills, skill]);
              e.key === "Enter" && setSkill("");
            }}
          />
        </div>
      </div>
    </>
  );
}
