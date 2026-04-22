import { useState, useEffect } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.className = dark ? "dark" : "light";
  }, [dark]);

  return (
    <button className="btn" onClick={() => setDark(!dark)}>
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default ThemeToggle;