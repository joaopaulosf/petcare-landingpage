import check from "../../../../assets/svg/check-circle.svg";
import { RenderProps } from "../../../models";

export const checkData: RenderProps[] = [
  { id: "1", image: check, text: "Certified Grommer" },
  { id: "2", image: check, text: "Animal Lover" },
  { id: "3", image: check, text: "10+ Years of Exp" },
  { id: "4", image: check, text: "Pet Parents" },
];

export const AgencyRender = ({ image, text }: RenderProps) => {
  return (
    <>
      <img className="icon" src={image} alt="check-icon" />
      <span>{text}</span>
    </>
  );
};
