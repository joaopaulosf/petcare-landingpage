import brand from "../../../../assets/images/pet-brand.png";
import "./styles.css";

export const PetBrand = () => {
  return (
    <div>
      <a href="#">
        <img className="brand-icon" src={brand} alt="brand" />
      </a>
    </div>
  );
};
