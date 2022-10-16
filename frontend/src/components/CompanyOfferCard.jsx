import Button from "./Button";

export default function CompanyOfferCard({ title, description, requirments }) {
  return (
    <div className="offer-card">
      <div className="offer-card-head">
        <div className="offer-card-title">Job title: {title}</div>
      </div>
      <div className="offer-card-body">
        <div className="offer-card-description">{description}</div>
        <div className="offer-card-title">Requirments</div>
        <div className="offer-card-requirments">
          {requirments?.map((item, k) => (
            <li key={k}>{item}</li>
          ))}
        </div>
        <div className="offer-card-btn-container">
          <Button text="Applicants" font="1rem" />
        </div>
      </div>
    </div>
  );
}
