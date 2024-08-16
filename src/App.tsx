import "./App.css";
import Drink from "./components/Drink";
import Toggle from "./components/toggle";
import useLocalStorage from "use-local-storage";

function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Toggle handleChange={() => setIsDark(!isDark)} isChecked={isDark} />
      <Drink />
    </div>
  );
}

export default App;
