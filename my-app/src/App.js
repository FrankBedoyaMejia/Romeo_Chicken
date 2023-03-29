import { React, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { GlobalContext } from "./utilities/globalContext";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  });
  return (
    <GlobalContext>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </GlobalContext>
  );
}

export default App;
