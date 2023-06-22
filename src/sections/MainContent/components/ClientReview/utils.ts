import firstClient from "../../../../assets/images/client-review.png";
import secondClient from "../../../../assets/images/client-review-01.png";
import thirdClient from "../../../../assets/images/client-review-02.png";
import { clientProps } from "../../../models";

const defaultData: { text: string; clientName: string } = {
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  clientName: "Laiba Smith",
};

export const clientData: clientProps[] = [
  { id: "1", client: firstClient, ...defaultData },
  { id: "2", client: secondClient, ...defaultData },
  { id: "3", client: thirdClient, ...defaultData },
  { id: "4", client: firstClient, ...defaultData },
  { id: "5", client: secondClient, ...defaultData },
  { id: "6", client: thirdClient, ...defaultData },
];
