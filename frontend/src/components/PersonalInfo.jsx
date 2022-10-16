import Button from "./Button";
import Input from "./Input";
import InputGost from "./InputGost";
import UploadImage from "./UploadImage";

export default function PersonalInfo({
  name,
  setName,
  phone,
  setPhone,
  bio,
  setBio,
  setEditMode,
  editMode,
}) {
  return (
    <>
      <UploadImage />
      {editMode ? (
        <div className="inputs-container">
          <Input name="Name" value={name} setValue={setName} />
          <Input name="Phone" value={phone} setValue={setPhone} />
          <textarea
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <div className="profile-btn-container">
            <Button text="Save" onClick={() => setEditMode(false)} />
          </div>
        </div>
      ) : (
        <div className="inputs-container">
          <InputGost name="Name" value={name} />
          <InputGost name="Phone" value={phone} />
          <InputGost name="Bio" value={bio} />
        </div>
      )}
    </>
  );
}
