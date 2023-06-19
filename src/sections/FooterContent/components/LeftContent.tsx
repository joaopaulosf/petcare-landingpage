import face from "../../../assets/svg/facebook.svg";
import insta from "../../../assets/svg/instagram.svg";
import twitter from "../../../assets/svg/twitter.svg";
import { PetBrand } from "../../../components/Navbar/components/PetBrand";

export const LeftContent = () => {
  return (
    <div className="left-content">
      <PetBrand />
      <div className="sociais">
        <a href="#contact">
          <img src={face} alt="facebook" />
        </a>
        <a href="#contact">
          <img src={insta} alt="instagram" />
        </a>
        <a href="#contact">
          <img src={twitter} alt="twitter" />
        </a>
      </div>
      <a href="#contact">pet.care@hotmail.com</a>
    </div>
  );
};
