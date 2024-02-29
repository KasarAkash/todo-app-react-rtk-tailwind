import { useSelector } from "react-redux";
import bgDark from "../assets/bg-mobile-dark.jpg";
import bgLight from "../assets/bg-mobile-light.jpg";

export default function BgDesktop() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <img
      src={theme ? bgDark : bgLight}
      className="w-full object-contain block sm:hidden"
    />
  );
}
