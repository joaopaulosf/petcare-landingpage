import { GenericCard } from "../../../components/GenericCard";
import check from "../../../assets/svg/check-circle.svg";
import woman from "../../../assets/images/woman-with-dog.png";
import { FC } from "react";

export const AgencyInfo: FC = () => {
  return (
    <div className="agency-info" id="about">
      <img className="main-woman" src={woman} alt="woman-with-dog" />
      <div className="agency-text">
        <h1 className="title">Best Agency For Your Pet.</h1>
        <p className="text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          rerum dolorem atque temporibus quas!
        </p>
        <div className="agency-check">
          <GenericCard
            data={[
              {
                id: "1",
                icon: check,
                text: "Certified Grommer",
              },
              {
                id: "2",
                icon: check,
                text: "Animal Lover",
              },
              {
                id: "3",
                icon: check,
                text: "10+ Years of Experience",
              },
              {
                id: "4",
                icon: check,
                text: "Pet Parents",
              },
            ]}
            keyExtractor={({ id }) => id}
            cardClass="check"
            renderItem={({ icon, text }) => (
              <>
                <img className="icon" src={icon} alt="check-icon" />
                <span>{text}</span>
              </>
            )}
          />
        </div>
      </div>
    </div>
  );
};
