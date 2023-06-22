import { btnProps } from "../../sections/models";

export const PressIt = ({ text, handleClick, btnIcon }: btnProps) => {
  return (
    <>
      <button className="press-it" onClick={handleClick}>
        {text}
        {btnIcon && <img className="btn-icon" src={btnIcon} alt="btn-icon" />}
      </button>
    </>
  );
};
