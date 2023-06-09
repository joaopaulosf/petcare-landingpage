import { ReactNode } from "react";
import "./styles.css";

interface CardProps<T> {
  renderItem: (item: T) => ReactNode;
  keyExtractor: (item: T) => string;
  data: T[];
}

export const GenericCard = <T extends unknown>({
  data,
  renderItem,
  keyExtractor,
}: CardProps<T>) => {
  return (
    <>
      {data.map((item) => (
        <div key={keyExtractor(item)}>{renderItem(item)}</div>
      ))}
    </>
  );
};
