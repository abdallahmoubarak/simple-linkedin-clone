import { useState } from "react";

export default function Strategy({ name, editMode, currentUser }) {
  const [strategy, setStrategy] = useState(currentUser?.skills || []);

  return (
    <>
      <div className="profile-section-container">
        <div className="profile-abilities-title">{name}</div>
        <div className="skills-list"></div>
        {editMode && (
          <div className="skill-input-container">
            <textarea
              placeholder={`Set a ${name}`}
              onChange={(e) => setStrategy(e.target.value)}>
              {strategy}
            </textarea>
          </div>
        )}
      </div>
    </>
  );
}
