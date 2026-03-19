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
      className="group inline-flex h-7 w-15 items-center bg-slate-300 dark:bg-slate-600 p-0.5 transition-colors"
    >
      <span className="h-6 w-6 translate-x-0 bg-white transition-transform group-data-checked:translate-x-8 flex items-center justify-center shadow-sm">
        {isDark ? (
          <MdDarkMode className="h-3 w-3 text-slate-500" />
        ) : (
          <MdLightMode className="h-3 w-3 text-slate-500" />
        )}
      </span>
    </Switch>
  );
};

export default ToggleMode;
