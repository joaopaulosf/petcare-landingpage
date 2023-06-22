import { ReactNode } from "react";

export interface CardProps<T> {
  renderItem: (item: T) => ReactNode;
  keyExtractor: (item: T) => string;
  data: T[];
  cardClass?: string;
  hasSwiper?: boolean;
}

export interface clientProps {
  id: string;
  client: string;
  text: string;
  clientName: string;
}

export interface btnProps {
  text: string;
  handleClick?: () => void;
  btnIcon?: string;
}

export interface RenderProps {
  id: string;
  image?: string;
  title?: string;
  text?: string;
}

export interface FoodItemProps {
  id: string;
  image?: string;
  foodName: string;
  foodPrice: string;
  buyBtn: ReactNode;
  cartBtn: ReactNode;
}
