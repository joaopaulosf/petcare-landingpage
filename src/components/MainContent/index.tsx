import { AgencyInfo } from "./components/AgencyInfo";
import { FirstCards } from "./components/FirstCards";
import { FirstText } from "./components/FirstText";
import { ShopPets } from "./components/ShopPets";
import "./styles.css";

export const MainContent = () => {
  return (
    <div className="main-content">
      <FirstText />
      <FirstCards />
      <AgencyInfo />
      <ShopPets />
    </div>
  );
};
