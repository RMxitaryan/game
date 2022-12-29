import React, { useState } from "react";
import "./App.css";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";

function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [openSecond, setOpenSecond] = useState(false);

  const onChange1 = (event) => {
    setValue1(event.target.value);
  };
  const onChange2 = (event) => {
    setValue2(event.target.value);
  };
  const openSecondPage = () => {
    setOpenSecond(true);
  };

  return (
    <>
      {!openSecond && (
        <FirstPage
          onChange1={onChange1}
          value1={value1}
          onChange2={onChange2}
          value2={value2}
          openSecondPage={openSecondPage}
        />
      )}
      {openSecond && <SecondPage value1={value1} value2={value2} />}
    </>
  );
}

export default App;
