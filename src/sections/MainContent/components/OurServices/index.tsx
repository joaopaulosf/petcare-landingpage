import { GenericCard } from "../../../../components/GenericCard";
import { ServicesRender, servicesData } from "./utils";
import "./styles.css";

export const OurServices = () => {
  return (
    <div className="our-services container">
      <h1 className="first-title">Our Services</h1>
      <GenericCard
        data={servicesData}
        keyExtractor={({ id }) => id}
        cardClass="content"
        renderItem={ServicesRender}
      />
    </div>
  );
};
