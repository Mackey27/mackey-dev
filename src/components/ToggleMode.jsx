import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Switch } from "@headlessui/react";
import { useTheme } from "../hooks/use-theme";

const ToggleMode = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Switch
      checked={isDark}
      onChange={() => setTheme(isDark ? "light" : "dark")}
      className="group inline-flex h-4 w-8 items-center bg-slate-300 p-0.5 transition-colors dark:bg-slate-600 md:h-5 md:w-10"
    >
      <span className="flex h-3 w-3 translate-x-0 items-center justify-center bg-white shadow-sm transition-transform group-data-checked:translate-x-4 md:h-4 md:w-4 md:group-data-checked:translate-x-5">
        {isDark ? (
          <MdDarkMode className="h-2 w-2 text-slate-500 md:h-2.5 md:w-2.5" />
        ) : (
          <MdLightMode className="h-2 w-2 text-slate-500 md:h-2.5 md:w-2.5" />
        )}
      </span>
    </Switch>
  );
};

export default ToggleMode;
