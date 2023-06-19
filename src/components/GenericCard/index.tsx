import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps<T> {
  renderItem: (item: T) => ReactNode;
  keyExtractor: (item: T) => string;
  data: T[];
  cardClass?: string;
  hasMotion?: boolean;
}

export const GenericCard = <T extends unknown>({
  data,
  renderItem,
  keyExtractor,
  cardClass,
  hasMotion = false,
}: CardProps<T>) => {
  const CardComponent = hasMotion ? motion.div : "div";

  return (
    <>
      {data.map((item) => (
        <CardComponent className={cardClass} key={keyExtractor(item)}>
          {renderItem(item)}
        </CardComponent>
      ))}
    </>
  );
};
