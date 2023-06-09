import { FC } from "react";
import "./styles.css";

type btnProps = {
  text: string;
  handleClick?: () => void;
  btnIcon: string;
};

export const PressIt: FC<btnProps> = ({ text, handleClick, btnIcon }) => {
  return (
    <div>
      <button className="press-it" onClick={handleClick}>
        {text}
        <img className="btn-icon" src={btnIcon} alt="btn-icon" />
      </button>
    </div>
  );
};
