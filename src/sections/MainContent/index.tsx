import { BackToTop } from "../../components/BackTop";
import { AgencyInfo } from "./components/AgencyInfo";
import { ClientReview } from "./components/ClientReview";
import { FirstCards } from "./components/FirstCards";
import { FirstText } from "./components/FirstText";
import { OurServices } from "./components/OurServices";
import { OurVets } from "./components/OurVets";
import { PetFoods } from "./components/PetFoods";
import { ShopPets } from "./components/ShopPets";
import "./styles.css";

export const MainContent = () => {
  return (
    <div className="main-content">
      <FirstText />
      <FirstCards />
      <AgencyInfo />
      <ShopPets />
      <PetFoods />
      <OurVets />
      <OurServices />
      <ClientReview />
      <BackToTop />
    </div>
  );
};
