import { useState } from "react";
import {
  IoIosArrowDroprightCircle,
  IoIosRemoveCircleOutline,
} from "react-icons/io";
import { useCreateOffer } from "../hooks/useOfferData";
import Button from "./Button";
import Input from "./Input";

export default function EmptyCompanyOfferCard({ setAddOffer }) {
  const [title, setTitle] = useState("");
  const [requirments, setRequirments] = useState([]);
  const [requirment, setRequirment] = useState("");
  const [description, setDescription] = useState("");

  const { mutate: createOffer } = useCreateOffer({ setAddOffer });

  return (
    <div className="offer-card">
      <div className="offer-card-body">
        <Input name="Job title" value={title} setValue={setTitle} />

        <textarea
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="offer-card-title">Requirments</div>
        <div className="offer-card-requirments">
          {requirments?.map((item, k) => (
            <div key={k} className="skill">
              <div className="skill-name">
                <div className="skill-icon">
                  <IoIosArrowDroprightCircle />{" "}
                </div>
                {item}
              </div>
              <div
                className="pointer"
                onClick={() =>
                  setRequirments(requirments.filter((s) => s !== item))
                }>
                <IoIosRemoveCircleOutline />
              </div>
            </div>
          ))}
          <div className="requirment-input-container">
            <Input
              name="Add a requirment"
              value={requirment}
              setValue={setRequirment}
              onKeyPress={(e) => {
                e.key === "Enter" &&
                  setRequirments([...requirments, requirment]);
                e.key === "Enter" && setRequirment("");
              }}
            />
          </div>
        </div>
        <div className="offer-card-btn-container">
          <Button
            text="Create the offer"
            font="1rem"
            onClick={() => {
              createOffer({
                title: title,
                requirments: requirments,
                description: description,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
