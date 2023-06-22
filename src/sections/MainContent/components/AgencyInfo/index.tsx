import { GenericCard } from "../../../../components/GenericCard";
import woman from "../../../../assets/images/woman-with-dog.png";
import { AgencyRender, checkData } from "./utils";
import "./styles.css";

export const AgencyInfo = () => {
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
            data={checkData}
            keyExtractor={({ id }) => id}
            cardClass="check"
            renderItem={AgencyRender}
          />
        </div>
      </div>
    </div>
  );
};
