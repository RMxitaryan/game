import React, { useState } from "react";
import { createUseStyles } from "react-jss";

const useStylesCage = createUseStyles({
  cage: {
    backgroundColor: "rgb(213, 216, 213)",
    borderStyle: "solid",
    borderRadius: 5,
    borderColor: "black",
    width: 130,
    height: 130,
    textAlign: "center",
    cursor: "pointer",
    color: ({ BooleanForColor }) => (BooleanForColor ? "blue" : "red"),
    fontSize: 80,
  },
});

function Cage(props) {
  const [value, setValue] = useState(null);
  const [classNamecolor, setClassNameColor] = useState(null);
  const { data, cageUpdate, numPlus, value1, value2 } = props;
  const classes = useStylesCage({ BooleanForColor: classNamecolor });
  const clickOnCage = () => {
    if (cageUpdate % 2 === 0) {
      numPlus();
      setClassNameColor(true);
      setValue("X");
      data.value = value1;
    } else {
      numPlus();
      setClassNameColor(false);
      setValue("O");
      data.value = value2;
    }
  };

  return (
    <div
      className={classes.cage}
      onClick={() => {
        if (!value) {
          clickOnCage();
        }
      }}
    >
      {value}
    </div>
  );
}

export default Cage;
