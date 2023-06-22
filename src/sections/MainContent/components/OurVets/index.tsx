import { GenericCard } from "../../../../components/GenericCard";
import { VetsRender, vetsData } from "./utils";
import "./styles.css";

export const OurVets = () => {
  return (
    <div className="our-vets">
      <h1 className="title">Our Vets</h1>
      <GenericCard
        data={vetsData}
        keyExtractor={({ id }) => id}
        cardClass="vets-info"
        renderItem={VetsRender}
      />
    </div>
  );
};
