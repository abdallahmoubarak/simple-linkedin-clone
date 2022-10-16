import dateConvertor from "../util/dateConvertor";
import Button from "./Button";

export default function CompanyOfferCard({ offer }) {
  return (
    <div className="offer-card">
      <div className="offer-card-head">
        <div className="offer-card-title">Job title: {offer?.title}</div>
        <div className="offer-card-date">
          Posted at: {dateConvertor(offer?.created_at)}
        </div>
      </div>
      <div className="offer-card-body">
        <div className="offer-card-description">{offer?.description}</div>
        <div className="offer-card-title">Requirments</div>
        <div className="offer-card-requirments">
          {offer?.requirments?.map((item, k) => (
            <li key={k}>{item}</li>
          ))}
        </div>
        <div className="offer-card-btn-container">
          <Button
            text={`Applicants : ${offer?.applicants?.length}`}
            font="1rem"
          />
        </div>
        {offer?.open && <Button text={"close"} font="1rem" />}
      </div>
    </div>
  );
}
