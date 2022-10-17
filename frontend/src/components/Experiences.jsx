import Button from "./Button";
import Input from "./Input";
import { IoIosRemoveCircleOutline, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

export default function Experiences({ experiences, setExperiences, editMode }) {
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [startedDate, setStartedDate] = useState("");
  const [endedDate, setEndedDate] = useState("");

  return (
    <>
      <div className="profile-section-container">
        <div className="profile-abilities-title">Experiences</div>
        <div className="educations-container">
          {experiences?.map((experience, i) => (
            <div key={i} className="profile-education-card">
              <div className="profile-education-card-title">
                {experience.title}
              </div>
              <div className="profile-education-card-school">
                {experience.company}
              </div>
              <div className="profile-education-card-date">
                <span>{experience.started_date}</span>
                <IoIosArrowForward />
                <span>{experience.ended_date}</span>
              </div>
              {editMode && (
                <div
                  className="edu-remove pointer"
                  onClick={() =>
                    setExperiences(experiences?.filter((e) => e !== experience))
                  }>
                  <IoIosRemoveCircleOutline />
                </div>
              )}
            </div>
          ))}
        </div>
        {editMode && (
          <div className="profile-education-inputs">
            <Input name="Title" value={title} setValue={setTitle} />
            <Input name="Company name" value={company} setValue={setCompany} />
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
                setExperiences([
                  ...experiences,
                  {
                    company,
                    title,
                    started_date: startedDate,
                    ended_date: endedDate,
                  },
                ]);
                setCompany("");
                setTitle("");
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
