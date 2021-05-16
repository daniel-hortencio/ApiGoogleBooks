import PulseLoader from "react-spinners/PulseLoader";
import theme from "styles/theme";

const Spinner = () => {
  return <PulseLoader color={theme.colors.primary} size={12} />;
};

export default Spinner;
