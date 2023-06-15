import { ReactNode } from "react";

interface CardProps<T> {
  renderItem: (item: T) => ReactNode;
  keyExtractor: (item: T) => string;
  data: T[];
  cardClass?: string;
}

export const GenericCard = <T extends unknown>({
  data,
  renderItem,
  keyExtractor,
  cardClass,
}: CardProps<T>) => {
  return (
    <>
      {data.map((item) => (
        <div className={cardClass} key={keyExtractor(item)}>
          {renderItem(item)}
        </div>
      ))}
    </>
  );
};
