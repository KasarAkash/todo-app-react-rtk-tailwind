import { useDispatch, useSelector } from "react-redux";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
import { changeTheme } from "../redux/themeSlice";

export default function BgDesktop() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <img
      src={theme ? sun : moon}
      onClick={() => {
        dispatch(changeTheme(!theme));
      }}
    />
  );
}
