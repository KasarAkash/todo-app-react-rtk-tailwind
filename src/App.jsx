import { useSelector } from "react-redux";
import BgDesktop from "./components/BgDesktop";
import BgMobile from "./components/BgMobile";
import TitleBar from "./components/TitleBar";
import InputBox from "./components/InputBox";

export default function App() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <main className={`${theme ? "dark" : ""}`}>
      <div className="min-h-screen  dark:bg-VeryDarkBlue">
        <BgDesktop />
        <BgMobile />
        <div className="w-full flex flex-col items-center">
          <div className="absolute top-[2rem] sm:top-[4rem] max-w-[580px] w-[92vw] sm:w-3/5">
            <TitleBar />
            <InputBox />
          </div>
        </div>
      </div>
    </main>
  );
}
