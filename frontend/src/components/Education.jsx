import Button from "./Button";
import Input from "./Input";
import { IoIosRemoveCircleOutline, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

export default function Education({ educations, setEducations, editMode }) {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startedDate, setStartedDate] = useState("");
  const [endedDate, setEndedDate] = useState("");

  return (
    <>
      <div className="profile-section-container">
        <div className="profile-abilities-title">Educations</div>
        <div className="educations-container">
          {educations?.map((education, i) => (
            <div key={i} className="profile-education-card">
              <div className="profile-education-card-title">
                {education.degree}
              </div>
              <div className="profile-education-card-school">
                {education.school}
              </div>
              <div className="profile-education-card-date">
                <span>{education.started_date}</span>
                <IoIosArrowForward />
                <span>{education.ended_date}</span>
              </div>
              <div
                className="edu-remove pointer"
                onClick={() =>
                  setEducations(educations.filter((e) => e !== education))
                }>
                <IoIosRemoveCircleOutline />
              </div>
            </div>
          ))}
        </div>
        {editMode && (
          <div className="profile-education-inputs">
            <Input name="Degree" value={degree} setValue={setDegree} />
            <Input
              name="School or university"
              value={school}
              setValue={setSchool}
            />
            <div className="profile-education-date">
              <Input
                name="Started date"
                type={"date"}
                value={startedDate}
                setValue={setStartedDate}
              />
              <Input
                name="Ended date"
                type={"date"}
                value={endedDate}
                setValue={setEndedDate}
              />
            </div>
            <Button
              dark={true}
              text="Add"
              onClick={() => {
                setEducations([
                  ...educations,
                  {
                    school,
                    degree,
                    started_date: startedDate,
                    ended_date: endedDate,
                  },
                ]);
                setSchool("");
                setDegree("");
                setStartedDate("");
                setEndedDate("");
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}
