import "./styles.css";
import { LeftContent } from "./components/LeftContent";
import { RightContent } from "./components/RightContent";

export const FooterContent = () => {
  return (
    <div className="footer-content" id="contact">
      <div className="container content">
        <LeftContent />
        <RightContent />
      </div>
    </div>
  );
};
