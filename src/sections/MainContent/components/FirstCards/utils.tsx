import catanddog from "../../../../assets/images/cat-and-dog.png";
import cat from "../../../../assets/images/cat.jpg";
import dog from "../../../../assets/images/dog.png";
import { RenderProps } from "../../../models";

export const cardData: RenderProps[] = [
  {
    id: "1",
    image: cat,
    title: "Pet Health",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: "2",
    image: dog,
    title: "Pet Health",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: "3",
    image: catanddog,
    title: "Pet Health",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export const CardRender = ({ image, title, text }: RenderProps) => {
  return (
    <>
      <img className="animal-image" src={image} alt="pet-image" />
      <div className="card-content">
        <h1 className="card-title">{title}</h1>
        <p className="card-text">{text}</p>
      </div>
    </>
  );
};
