import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkmode, setDarkmode } from "./redux/actions/theme";

function App() {
  const dispatch = useDispatch();
  const darkmode = useSelector((state) => state.theme.darkmode);

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

  const handleToggleTheme = () => {
    dispatch(toggleDarkmode());
  };

  return (
    <div className={`App ${!darkmode ? "theme-light" : "theme-dark"}`}>
      <div className="pageContainer centerer">
        <p id="logo">
          Sara<span id="dot">.</span>cb
        </p>
        <button className="btnGreen" onClick={handleToggleTheme}>
          click me
        </button>
      </div>
    </div>
  );
}

export default App;
