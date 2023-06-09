import { GenericCard } from "../../GenericCard";
import cat from "../../../assets/images/cat.jpg";
import dog from "../../../assets/images/dog.png";
import catanddog from "../../../assets/images/cat-and-dog.png";
import { FC } from "react";

export const FirstCards: FC = () => {
  return (
    <div className="first-cards">
      <GenericCard
        keyExtractor={({ id }) => id}
        data={[
          {
            id: "1",
            image: cat,
            title: "Pet Health",
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            id: "2",
            image: dog,
            title: "Pet Health",
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            id: "3",
            image: catanddog,
            title: "Pet Health",
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
        ]}
        renderItem={({ image, title, content }) => (
          <div className="animal-card">
            <img className="animal-image" src={image} alt="pet-image" />
            <div className="card-content">
              <h1 className="card-title">{title}</h1>
              <p className="card-text">{content}</p>
            </div>
          </div>
        )}
      />
    </div>
  );
};
