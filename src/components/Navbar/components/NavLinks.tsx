import { FC } from "react";

export const NavLinks: FC = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li className="link">
          <a href="#">Home</a>
        </li>
        <li className="link">
          <a href="#">About us</a>
        </li>
        <li className="link">
          <a href="#">Contact us</a>
        </li>
        <li className="link">
          <a href="#">Blog</a>
        </li>
      </ul>
    </nav>
  );
};
