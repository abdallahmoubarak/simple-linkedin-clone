import Button from "./Button";

export default function ClientOfferCard({ offer }) {
  return (
    <div className="offer-card">
      <div className="offer-card-head flex">
        <div className="flex">
          <div className="profile-img">{offer.profile_url}</div>
          <div className="offer-card-name">{offer.company_name}</div>
        </div>
        <div className="pointer">Follow</div>
      </div>
      <div className="offer-card-body">
        <div className="offer-card-title">Job title: {offer.title}</div>
        <div className="offer-card-description">{offer.description}</div>
        <div className="offer-card-title">Requirments</div>
        <div className="offer-card-requirments">
          {offer?.requirments?.map((item, k) => (
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
