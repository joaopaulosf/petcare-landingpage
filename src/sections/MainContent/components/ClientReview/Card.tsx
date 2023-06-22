import starReview from "../../../../assets/svg/star-review.svg";
import { clientProps } from "../../../models";

export const Card = ({ client, text, clientName }: clientProps) => {
  return (
    <div className="feed-back">
      <img className="client" src={client} alt="client" />
      <div className="content">
        <p className="text">{text}</p>
        <img src={starReview} alt="star-review" />
        <p className="name">{clientName}</p>
      </div>
    </div>
  );
};
