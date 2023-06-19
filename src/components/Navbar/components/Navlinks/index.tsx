import { FC } from "react";
import "./styles.css";

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
        <li className="log-in link">
          <a href="#">Log in</a>
        </li>
        <li className="sign-up link">
          <a href="#">Sign up</a>
        </li>
      </ul>
    </nav>
  );
};
