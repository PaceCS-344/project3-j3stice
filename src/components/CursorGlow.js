import { useEffect, useState } from "react";

function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveGlow = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveGlow);
    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{
        left: position.x - 100,
        top: position.y - 100,
      }}
    ></div>
  );
}

export default CursorGlow;