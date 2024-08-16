import "./DrinkStyle.css";
import { useState } from "react";

function Drink() {
  const [weight, setWeight] = useState(0);
  const [drinkML, setDrinkML] = useState(0);

  const onChangeWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = +event.target.value;
    setWeight(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const drink = (weight * 2.2 * 30) / 2;
    setDrinkML(drink);
  };

  return (
    <div>
      <h1 className="drinkHead">ควรดื่มน้ำวันละเท่าไหร่?</h1>
      <h1 className="drinkValue">{drinkML.toFixed(2)} มล.</h1>
      <form onSubmit={onSubmit} className="formDrink">
        <input
          type="number"
          id="weight"
          name="weight"
          onChange={onChangeWeight}
          placeholder="น้ำหนัก (กก.)"
          className="inputDrink"
        />
        <button type="submit" className="calculateBtn">
          คำนวณ
        </button>
      </form>
    </div>
  );
}

export default Drink;
