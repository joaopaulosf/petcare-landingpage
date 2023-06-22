import firstDoctor from "../../../../assets/images/doctor-01.png";
import secondDoctor from "../../../../assets/images/doctor-02.png";
import thirdDoctor from "../../../../assets/images/doctor-03.png";
import { RenderProps } from "../../../models";

export const vetsData: RenderProps[] = [
  {
    id: "1",
    title: "Dr Victor",
    image: firstDoctor,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    id: "2",
    title: "Dr Sara",
    image: secondDoctor,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    id: "3",
    title: "Dr Brian",
    image: thirdDoctor,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
];

export const VetsRender = ({ image, title, text }: RenderProps) => {
  return (
    <>
      <img className="image" src={image} alt="" />
      <div className="content">
        <h1 className="name">{title}</h1>
        <p className="text">{text}</p>
      </div>
    </>
  );
};
