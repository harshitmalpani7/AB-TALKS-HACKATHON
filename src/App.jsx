import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import ChallengeDay from "./pages/ChallengeDay";

function App() {
  useEffect(() => {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    const moveGlow = (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveGlow);

    return () => {
      window.removeEventListener("mousemove", moveGlow);
      glow.remove();
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/day/:day"
          element={<ChallengeDay />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;