import Input from "./Input";

export default function UploadResume() {
  return (
    <>
      <div className="profile-section-container">
        <div className="profile-abilities-title">Upload resume</div>
        <div className="profile-education-inputs">
          <Input type="file" accept={"application/pdf"} />
        </div>
      </div>
    </>
  );
}
