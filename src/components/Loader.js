import { useEffect, useState } from "react";

function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader-screen ${hide ? "hide-loader" : ""}`}>
      <h1>JB.</h1>
      <p>Initializing Portfolio...</p>
    </div>
  );
}

export default Loader;