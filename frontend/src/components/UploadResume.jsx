export default function UploadResume({ resume, setResume, editMode }) {
  return (
    <>
      <div className="profile-section-container">
        <div className="profile-abilities-title">Upload resume</div>
        {!!resume && "Uploaded resume "}
        {editMode && (
          <div className="profile-education-inputs">
            <input
              id="upload-img-input"
              type="file"
              accept="application/pdf"
              onChange={(e) => {
                var file = e.target.files[0];
                const reader = new FileReader();
                reader.onload = () => {
                  reader.readyState === 2 &&
                    setResume(
                      reader.result.split("data:application/pdf;base64,")[1],
                    );
                };
                if (file) {
                  reader.readAsDataURL(file);
                } else {
                  setResume();
                }
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}
