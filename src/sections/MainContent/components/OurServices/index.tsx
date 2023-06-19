import { FC } from "react";
import { GenericCard } from "../../../../components/GenericCard";
import truck from "../../../../assets/svg/truck-delivery.svg";
import cash from "../../../../assets/svg/cash-delivery.svg";
import hours from "../../../../assets/svg/hour-delivery.svg";
import "./styles.css";

export const OurServices: FC = () => {
  return (
    <div className="our-services container">
      <h1 className="first-title">Our Services</h1>
      <GenericCard
        data={[
          {
            id: "1",
            svg: truck,
            title: "QUICK DELIVERY",
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            id: "2",
            svg: cash,
            title: "CASH ON DELIVERY",
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            id: "3",
            svg: hours,
            title: "24/7 SUPPORT",
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
        ]}
        keyExtractor={({ id }) => id}
        cardClass="content"
        renderItem={({ svg, title, content }) => (
          <>
            <img className="icon" src={svg} alt="services-icon" />
            <div className="text-content">
              <h1 className="title">{title}</h1>
              <p className="text">{content}</p>
            </div>
          </>
        )}
      />
    </div>
  );
};
