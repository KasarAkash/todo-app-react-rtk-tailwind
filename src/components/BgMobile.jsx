import { useSelector } from "react-redux";
import bgDark from "../assets/bg-mobile-dark.jpg";
import bgLight from "../assets/bg-mobile-light.jpg";
import { useState } from "react";

export default function BgDesktop() {
  const theme = useSelector((state) => state.theme.theme);
  const [anim, setAnim] = useState("opacity-0");

  setInterval(() => {
    setAnim("opacity-100");
  }, 100);

  return (
    <img
      src={theme ? bgDark : bgLight}
      className={`w-full ${anim} transition-opacity duration-300 object-contain block sm:hidden`}
    />
  );
}
