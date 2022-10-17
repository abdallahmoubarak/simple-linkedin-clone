import Button from "./Button";

export default function ClientOfferCard({ applicant, handleOpenProfile }) {
  return (
    <div className="offer-card">
      <div className="offer-card-head flex">
        <div
          className="flex pointer"
          onClick={() => handleOpenProfile(applicant)}>
          <div className="profile-img ">
            <img
              className="upload-img-img"
              src={applicant?.profile_url}
              alt=""
            />
          </div>
          <div className="offer-card-name ">{applicant?.name}</div>
        </div>
        <div className="offer-card-name pointer">X</div>
      </div>
      <div className="offer-card-body">
        <div className="pdf-container">
          <a href={applicant?.resume_url} download>
            <img className="pdf-img pointer" src="/img/pdf.svg" alt="" />
          </a>
        </div>

        <div className="offer-card-btn-container">
          <Button text={"Interview"} font="1rem" />
        </div>
      </div>
    </div>
  );
}
