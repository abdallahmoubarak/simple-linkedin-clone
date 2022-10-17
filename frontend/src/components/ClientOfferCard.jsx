import { useApply } from "../hooks/useOfferData";
import { useFollow } from "../hooks/useUserData";
import dateConvertor from "../util/dateConvertor";
import Button from "./Button";

export default function ClientOfferCard({
  offer,
  currentUser,
  handelOpenProfileById,
}) {
  const { mutate: apply } = useApply();
  const { mutate: follow } = useFollow();

  return (
    <div className="offer-card">
      <div className="offer-card-head flex">
        <div
          className="flex pointer"
          onClick={() => handelOpenProfileById(offer.company_id)}>
          <div className="profile-img">
            <img className="upload-img-img" src={offer.profile_url} alt="" />
          </div>
          <div className="offer-card-name">{offer.company_name}</div>
        </div>
        <div
          className="pointer"
          onClick={() => follow({ id: offer?.company_id })}>
          {currentUser?.follows?.includes(offer?.company_id)
            ? "Un Follow"
            : "Follow"}
        </div>
      </div>
      <div className="offer-card-body">
        <div>
          <div className="offer-card-title">Job title: {offer.title}</div>
          <div className="offer-card-date">
            Posted at: {dateConvertor(offer?.created_at)}
          </div>
        </div>
        <div className="offer-card-description">{offer.description}</div>
        <div className="offer-card-title">Requirments</div>
        <div className="offer-card-requirments">
          {offer?.requirments?.map((item, k) => (
            <li key={k}>{item}</li>
          ))}
        </div>
        <div className="offer-card-btn-container">
          <Button
            text={
              offer?.applicants.includes(currentUser?._id)
                ? "Applied"
                : "Easy apply"
            }
            dark={offer?.applicants.includes(currentUser?._id) ? true : false}
            font="1rem"
            onClick={() => apply({ id: offer?._id })}
          />
        </div>
      </div>
    </div>
  );
}
