import { GenericCard } from "../../../../components/GenericCard";
import { CardRender, cardData } from "./utils";
import "./styles.css";

export const FirstCards = () => {
  return (
    <div className="first-cards">
      <GenericCard
        data={cardData}
        keyExtractor={({ id }) => id}
        cardClass="animal-card"
        renderItem={CardRender}
      />
    </div>
  );
};
