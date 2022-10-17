import Input from "./Input";
import {
  IoIosArrowDroprightCircle,
  IoIosRemoveCircleOutline,
} from "react-icons/io";
import { useState } from "react";

export default function Skills({ skills, setSkills, editMode }) {
  const [skill, setSkill] = useState("");

  return (
    <>
      <div className="profile-section-container">
        <div className="profile-abilities-title">Skills</div>
        <div className="skills-list">
          {skills?.map((skill, k) => (
            <div key={k} className="skill">
              <div className="skill-name">
                <div className="skill-icon">
                  <IoIosArrowDroprightCircle />{" "}
                </div>
                {skill}
              </div>
              {editMode && (
                <div
                  className="pointer"
                  onClick={() => setSkills(skills.filter((s) => s !== skill))}>
                  <IoIosRemoveCircleOutline />
                </div>
              )}
            </div>
          ))}
        </div>
        {editMode && (
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
        )}
      </div>
    </>
  );
}
