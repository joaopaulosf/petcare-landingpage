import { GenericCard } from "../../../../components/GenericCard";
import catshop from "../../../../assets/images/cat-shop.png";
import dogshop from "../../../../assets/images/dog-shop.png";
import rabbitshop from "../../../../assets/images/rabbit-shop.png";
import "./styles.css";
import { RenderProps } from "../../../models";

export const ShopPets = () => {
  return (
    <div className="shop-pets container ">
      <h1 className="title">Shop By Pets</h1>
      <GenericCard
        data={[
          {
            id: "1",
            title: "CATS",
            image: catshop,
            text: "307 PRODUCTS",
          },
          {
            id: "2",
            title: "DOGS",
            image: dogshop,
            text: "307 PRODUCTS",
          },
          {
            id: "3",
            title: "RABBITS",
            image: rabbitshop,
            text: "307 PRODUCTS",
          },
        ]}
        keyExtractor={({ id }) => id}
        cardClass="pet-card"
        renderItem={({ image, title, text }: RenderProps) => (
          <>
            <img className="image" src={image} alt="pet-image" />
            <div className="content">
              <p className="name">{title}</p>
              <p className="text">{text}</p>
            </div>
          </>
        )}
      />
    </div>
  );
};
