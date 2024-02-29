import ThemeButton from "./ThemeButton";

export default function TitleBar() {
  return (
    <div className=" flex items-center justify-between w-full">
      <h1 className="text-2xl font-bold text-VeryLightGray">TODO</h1>
      <ThemeButton />
    </div>
  );
}
