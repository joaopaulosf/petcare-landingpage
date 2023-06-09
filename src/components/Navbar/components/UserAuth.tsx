import { FC } from "react";

export const UserAuth: FC = () => {
  return (
    <div>
      <ul className="nav-auth">
        <li className="link">
          <a href="#">Log in</a>
        </li>
        <li className="sign-up link">
          <a href="#">Sign up</a>
        </li>
      </ul>
    </div>
  );
};
