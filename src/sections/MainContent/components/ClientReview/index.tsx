import { GenericCard } from "../../../../components/GenericCard";
import firstClient from "../../../../assets/images/client-review.png";
import secondClient from "../../../../assets/images/client-review-01.png";
import thirdClient from "../../../../assets/images/client-review-02.png";
import starReview from "../../../../assets/svg/star-review.svg";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./styles.css";

export const ClientReview = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const defaultData = {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    clientName: "Laiba Smith",
  };

  const clientData = [
    { id: "1", client: firstClient, ...defaultData },
    { id: "2", client: secondClient, ...defaultData },
    { id: "3", client: thirdClient, ...defaultData },
    { id: "4", client: firstClient, ...defaultData },
    { id: "5", client: secondClient, ...defaultData },
    { id: "6", client: thirdClient, ...defaultData },
  ];

  return (
    <motion.div ref={carousel} className="client-review container">
      <h1 className="title">What Client Say</h1>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        whileTap={{ cursor: "grabbing" }}
        className="carousel"
      >
        <GenericCard
          data={clientData}
          keyExtractor={({ id }) => id}
          cardClass="feed-back"
          hasMotion={true}
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
      </motion.div>
    </motion.div>
  );
};
