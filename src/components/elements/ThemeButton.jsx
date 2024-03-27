import { useDispatch } from "react-redux";
import { toggleDarkmode } from "../../redux/actions/theme";

function ThemeButton() {
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleDarkmode());
  };
  return (
    <button className="btnGreen" onClick={handleToggleTheme}>
      Click me
    </button>
  );
}

export default ThemeButton;
