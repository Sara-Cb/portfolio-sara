import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDarkmode } from "./redux/actions/theme";
import MyNav from "./components/elements/MyNav";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Curriculum from "./components/pages/Curriculum";
import Contacts from "./components/pages/Contacts";
import PageNotFound from "./components/pages/PageNotFound";
import { updateScreen } from "./redux/actions/screen";

function App() {
  const dispatch = useDispatch();

  const darkmode = useSelector((state) => state.theme.darkmode);
  const size = useSelector((state) => state.screen.size);

  useEffect(() => {
    //al cambio della
    const handleResize = () => {
      dispatch(updateScreen(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  useEffect(() => {
    // Controlla se il browser ha una preferenza di tema
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Se il browser ha impostato il tema scuro per impostazione predefinita, aggiorna lo stato del tema
    if (prefersDarkMode) {
      setDarkmode(true);
    }
  }, []);

  return (
    <div className={`App ${darkmode ? "theme-dark" : "theme-light"} ${size}`}>
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
