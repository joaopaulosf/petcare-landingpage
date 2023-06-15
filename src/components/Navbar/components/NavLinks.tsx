import { FC } from "react";

export const NavLinks: FC = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li className="link">
          <a href="#home">Home</a>
        </li>
        <li className="link">
          <a href="#about">About us</a>
        </li>
        <li className="link">
          <a href="#contact">Contact us</a>
        </li>
        <li className="link">
          <a href="#blog">Blog</a>
        </li>
      </ul>
    </nav>
  );
};
