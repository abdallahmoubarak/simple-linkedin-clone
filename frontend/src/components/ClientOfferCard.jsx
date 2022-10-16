import Button from "./Button";

export default function ClientOfferCard({
  title,
  description,
  companyName,
  requirments,
}) {
  return (
    <div className="offer-card">
      <div className="offer-card-head flex">
        <div className="flex">
          <div className="profile-img">img</div>
          <div className="offer-card-name">{companyName}</div>
        </div>
        <div className="pointer">Follow</div>
      </div>
      <div className="offer-card-body">
        <div className="offer-card-title">Job title: {title}</div>
        <div className="offer-card-description">{description}</div>
        <div className="offer-card-title">Requirments</div>
        <div className="offer-card-requirments">
          {requirments?.map((item, k) => (
            <li key={k}>{item}</li>
          ))}
        </div>
        <div className="offer-card-btn-container">
          <Button text="Easy apply" font="1rem" />
        </div>
      </div>
    </div>
  );
}
