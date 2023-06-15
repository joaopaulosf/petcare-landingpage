import { GenericCard } from "../../../components/GenericCard";
import catshop from "../../../assets/images/cat-shop.png";
import dogshop from "../../../assets/images/dog-shop.png";
import rabbitshop from "../../../assets/images/rabbit-shop.png";

export const ShopPets = () => {
  return (
    <div className="shop-pets container ">
      <h1 className="title">Shop By Pets</h1>
      <GenericCard
        data={[
          {
            id: "1",
            image: catshop,
            pet: "CATS",
            text: "307 PRODUCTS",
          },
          {
            id: "2",
            pet: "DOGS",
            image: dogshop,
            text: "307 PRODUCTS",
          },
          {
            id: "3",
            pet: "RABBITS",
            image: rabbitshop,
            text: "307 PRODUCTS",
          },
        ]}
        keyExtractor={({ id }) => id}
        cardClass="pet-card"
        renderItem={({ image, text, pet }) => (
          <>
            <img className="image" src={image} alt="pet-image" />
            <div className="content">
              <p className="name">{pet}</p>
              <p className="text">{text}</p>
            </div>
          </>
        )}
      />
    </div>
  );
};
