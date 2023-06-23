import { Navbar } from "../../components/Navbar";
import { FooterContent } from "../../sections/FooterContent";
import { HeaderContent } from "../../sections/HeaderContent";
import { MainContent } from "../../sections/MainContent";

export const Main = () => {
  return (
    <>
      <Navbar />
      <HeaderContent />
      <MainContent />
      <FooterContent />
    </>
  );
};
