import truck from "../../../../assets/svg/truck-delivery.svg";
import cash from "../../../../assets/svg/cash-delivery.svg";
import hours from "../../../../assets/svg/hour-delivery.svg";
import { RenderProps } from "../../../models";

export const servicesData: RenderProps[] = [
  {
    id: "1",
    image: truck,
    title: "QUICK DELIVERY",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: "2",
    image: cash,
    title: "CASH ON DELIVERY",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: "3",
    image: hours,
    title: "24/7 SUPPORT",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export const ServicesRender = ({ image, title, text }: RenderProps) => {
  return (
    <>
      <img className="icon" src={image} alt="services-icon" />
      <div className="text-content">
        <h1 className="title">{title}</h1>
        <p className="text">{text}</p>
      </div>
    </>
  );
};
