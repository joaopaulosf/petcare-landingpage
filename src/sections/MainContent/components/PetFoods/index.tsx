import { GenericCard } from "../../../../components/GenericCard";
import { PressIt } from "../../../../components/PressIt";
import catFood from "../../../../assets/images/cat-food.png";
import dogFood from "../../../../assets/images/dog-food.png";
import { ReactNode } from "react";
import "./styles.css";

interface FoodItemProps {
  id: string;
  image: string;
  foodName: string;
  foodPrice: string;
  buyBtn: ReactNode;
  cartBtn: ReactNode;
}

export const PetFoods = () => {
  const catFoodData = {
    foodName: "Cat Food",
    foodPrice: "$ 300,00",
    buyBtn: <PressIt text="Buy now" />,
    cartBtn: <PressIt text="Add to Cart" />,
  };

  const dogFoodData = {
    foodName: "Dog Food",
    foodPrice: "$ 300,00",
    buyBtn: <PressIt text="Buy now" />,
    cartBtn: <PressIt text="Add to Cart" />,
  };

  const foodItems = [
    { id: "1", image: catFood, ...catFoodData },
    { id: "2", image: dogFood, ...dogFoodData },
    { id: "3", image: catFood, ...catFoodData },
    { id: "4", image: dogFood, ...dogFoodData },
    { id: "5", image: catFood, ...catFoodData },
    { id: "6", image: dogFood, ...dogFoodData },
    { id: "7", image: catFood, ...catFoodData },
    { id: "8", image: dogFood, ...dogFoodData },
  ];

  const FoodItem = ({
    image,
    foodName,
    foodPrice,
    buyBtn,
    cartBtn,
  }: FoodItemProps) => (
    <>
      <img className="image" src={image} alt="pet-food" />
      <div className="price">
        <p>{foodName}</p>
        <p>{foodPrice}</p>
      </div>
      <div className="btns">
        {buyBtn}
        {cartBtn}
      </div>
    </>
  );

  return (
    <div className="pet-foods container">
      <h1 className="title">New Arrival</h1>
      <div className="cards">
        <GenericCard
          data={foodItems}
          keyExtractor={({ id }) => id}
          renderItem={FoodItem}
          cardClass="card"
        />
      </div>
    </div>
  );
};
