import { GenericCard } from "../../../components/GenericCard";
import firstDoctor from "../../../assets/images/doctor-01.png";
import secondDoctor from "../../../assets/images/doctor-02.png";
import thirdDoctor from "../../../assets/images/doctor-03.png";

export const OurVets = () => {
  return (
    <div className="our-vets">
      <h1 className="title">Our Vets</h1>
      <GenericCard
        data={[
          {
            id: "1",
            drName: "Dr Victor",
            image: firstDoctor,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          },
          {
            id: "2",
            drName: "Dr Sara",
            image: secondDoctor,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          },
          {
            id: "3",
            drName: "Dr Brian",
            image: thirdDoctor,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          },
        ]}
        keyExtractor={({ id }) => id}
        cardClass="vets-info"
        renderItem={({ image, drName, text }) => (
          <>
            <img className="image" src={image} alt="" />
            <div className="content">
              <h1 className="name">{drName}</h1>
              <p className="text">{text}</p>
            </div>
          </>
        )}
      />
    </div>
  );
};
