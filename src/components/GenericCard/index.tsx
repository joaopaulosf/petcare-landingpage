import { CardProps } from "../../sections/models";

export const GenericCard = <T,>({
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
