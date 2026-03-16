import { FiMoon, FiSun } from "react-icons/fi";

function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      aria-pressed={isDark}
      title="Toggle color theme"
    >
      {isDark ? <FiSun /> : <FiMoon />}
    </button>
  );
}

export default ThemeToggle;
