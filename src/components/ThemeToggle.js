import { useEffect, useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.className = dark ? "dark" : "light";
  }, [dark]);

  return (
    <button className="theme-btn" onClick={() => setDark(!dark)}>
      {dark ? "Light" : "Dark"}
    </button>
  );
}

export default ThemeToggle;