import "./Toggle.css";

type ToggleProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
};

function Toggle({ handleChange, isChecked }: ToggleProps) {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor="check">{isChecked ? "Dark " : "Light"} Mode</label>
    </div>
  );
}

export default Toggle;
