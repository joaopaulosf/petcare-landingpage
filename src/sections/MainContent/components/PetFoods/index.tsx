import { GenericCard } from "../../../../components/GenericCard";
import "./styles.css";
import { FoodRender, foodData } from "./utils";

export const PetFoods = () => {
  return (
    <div className="pet-foods container">
      <h1 className="title">New Arrival</h1>
      <div className="cards">
        <GenericCard
          data={foodData}
          keyExtractor={({ id }) => id}
          renderItem={FoodRender}
          cardClass="card"
        />
      </div>
    </div>
  );
};
