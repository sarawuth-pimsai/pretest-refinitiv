import { useEffect } from "react";
import useAnswer from "./hooks/useAnswer";

function App() {
  const {
    state,
    inputValue,
    selectedValue,
    handleInputOnChange,
    handleSelectOnChange,
  } = useAnswer();
  const handleInputOnFocus = () => {
    const inputEl = document.getElementById("number");
    inputEl?.focus();
  };
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <main>
        <section className="section1">
          <div className="inputNumber" onClick={handleInputOnFocus}>
            {inputValue}
          </div>
          <div className="wrapper">
            <input
              id="number"
              name="number"
              type="number"
              defaultValue={inputValue}
              onChange={(e) => handleInputOnChange(e.target.value)}
              onKeyDown={(e) =>
                ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault()
              }
              autoFocus
            />
          </div>
        </section>
        <section className="section2">
          <div>
            <select
              name="type"
              defaultValue={selectedValue}
              onChange={(e) => handleSelectOnChange(e.target.value)}
            >
              <option value="isPrime">isPrime</option>
              <option value="isFibanacci">isFibanacci</option>
            </select>
          </div>
        </section>
        <section className="section3">{state ? "true" : "false"}</section>
      </main>
    </>
  );
}

export default App;
