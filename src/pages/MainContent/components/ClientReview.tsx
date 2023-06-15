import { GenericCard } from "../../../components/GenericCard";
import firstClient from "../../../assets/images/client-review.png";
import secondClient from "../../../assets/images/client-review-01.png";
import thirdClient from "../../../assets/images/client-review-02.png";
import starReview from "../../../assets/svg/star-review.svg";

export const ClientReview = () => {
  return (
    <div className="client-review container">
      <h1 className="title">What Client Say</h1>
      <GenericCard
        data={[
          {
            id: "1",
            client: firstClient,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            clientName: "Laiba Smith",
          },
          {
            id: "2",
            client: secondClient,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            clientName: "Laiba Smith",
          },
          {
            id: "3",
            client: thirdClient,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            clientName: "Laiba Smith",
          },
        ]}
        keyExtractor={({ id }) => id}
        cardClass="feed-back"
        renderItem={({ client, text, clientName }) => (
          <>
            <img className="client" src={client} alt="client" />
            <div className="content">
              <p className="text">{text}</p>
              <img src={starReview} alt="star-review" />
              <p className="name">{clientName}</p>
            </div>
          </>
        )}
      />
    </div>
  );
};
