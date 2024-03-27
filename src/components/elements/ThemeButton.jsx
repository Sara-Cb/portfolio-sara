import { useDispatch, useSelector } from "react-redux";
import { toggleDarkmode } from "../../redux/actions/theme";

function ThemeButton({ size }) {
  const dispatch = useDispatch();

  const darkmode = useSelector((state) => state.theme.darkmode);

  const handleToggleTheme = () => {
    dispatch(toggleDarkmode());
  };
  return (
    <button
      variant="toggle"
      aria-pressed={darkmode}
      className={`themeBtn ${darkmode ? "dark" : "light"} ${
        size === "xs" ? "xs" : "m"
      }`}
      onClick={handleToggleTheme}
    >
      <div className="handle centerer">
        {size === "xs" &&
          (darkmode ? (
            <i className="bi bi-moon-stars-fill" />
          ) : (
            <i className="bi bi-sun-fill" />
          ))}
      </div>
    </button>
  );
}

export default ThemeButton;
