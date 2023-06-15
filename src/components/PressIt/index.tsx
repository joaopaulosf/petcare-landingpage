import { FC } from "react";

type btnProps = {
  text: string;
  handleClick?: () => void;
  btnIcon?: string;
};

export const PressIt: FC<btnProps> = ({ text, handleClick, btnIcon }) => {
  return (
    <>
      <button className="press-it" onClick={handleClick}>
        {text}
        {btnIcon && <img className="btn-icon" src={btnIcon} alt="btn-icon" />}
      </button>
    </>
  );
};
