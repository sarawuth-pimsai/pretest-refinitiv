import { useEffect, useState } from "react";
import isFibonacci from "../utils/isFibonacci";
import isPrime from "../utils/isPrime";

const useAnswer = () => {
  const [state, setState] = useState(false);
  const [inputValue, setInputValue] = useState(1);
  const [selectedValue, setSelectedValue] = useState("isPrime");
  const handleInputOnChange = (value: string) => {
    let number;
    value = value.replace("e", "");
    if (parseFloat(value) < 0) {
      number = 1;
    } else if (value === "") {
      number = 0;
    } else {
      number = Math.round(parseFloat(value));
    }
    setInputValue(number);
  };
  const handleSelectOnChange = (value: string) => {
    setSelectedValue(value);
  };
  useEffect(() => {
    let result = false;
    switch (selectedValue) {
      case "isPrime":
        result = isPrime(inputValue);
        break;
      default:
        result = isFibonacci(inputValue);
        break;
    }
    setState(result);
    return () => {};
  }, [inputValue, selectedValue]);
  return {
    state,
    inputValue,
    selectedValue,
    handleInputOnChange,
    handleSelectOnChange,
  };
};
export default useAnswer;
