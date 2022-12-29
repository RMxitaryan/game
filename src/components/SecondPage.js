import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import Cage from "./Cage";
import DialogComp from "./DialogComp";

const useStylesSecondPage = createUseStyles({
  h1: {
    textAlign: "center",
    fontSize: 50,
  },
  line: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});

const arr = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
  { value: 5 },
  { value: 6 },
  { value: 7 },
  { value: 8 },
  { value: 9 },
];
function SecondPage(props) {
  const { value1, value2 } = props;
  const [cageUpdate, setCageUpdate] = useState(0);
  const classes = useStylesSecondPage();
  const [open, setOpen] = useState(false);
  const [nameOfWinner, setNameOfWinner] = useState(null);
  const numPlus = () => {
    setCageUpdate(cageUpdate + 1);
  };

  const closeDialog = () => {
    setOpen(false);
  };
  const openDialog = (name) => {
    setTimeout(() => {
      setOpen(true);
      setNameOfWinner(name);
    }, 0);
  };

  useEffect(() => {
    if (arr[0].value === arr[1].value && arr[0].value === arr[2].value) {
      openDialog(arr[0].value);
    } else if (arr[3].value === arr[4].value && arr[3].value === arr[5].value) {
      openDialog(arr[3].value);
    } else if (arr[6].value === arr[7].value && arr[6].value === arr[8].value) {
      openDialog(arr[6].value);
    } else if (arr[0].value === arr[3].value && arr[0].value === arr[6].value) {
      openDialog(arr[0].value);
    } else if (arr[1].value === arr[4].value && arr[1].value === arr[7].value) {
      openDialog(arr[1].value);
    } else if (arr[2].value === arr[5].value && arr[2].value === arr[8].value) {
      openDialog(arr[2].value);
    } else if (arr[0].value === arr[4].value && arr[0].value === arr[8].value) {
      openDialog(arr[0].value);
    } else if (arr[2].value === arr[4].value && arr[2].value === arr[6].value) {
      openDialog(arr[2].value);
    } else if (
      !Number(arr[0].value) &&
      !Number(arr[1].value) &&
      !Number(arr[2].value) &&
      !Number(arr[3].value) &&
      !Number(arr[4].value) &&
      !Number(arr[5].value) &&
      !Number(arr[6].value) &&
      !Number(arr[7].value) &&
      !Number(arr[8].value)
    ) {
      openDialog("No one");
    }
  }, [cageUpdate]);

  return (
    <>
      <h1 className={classes.h1}>X and O</h1>
      <div className={classes.line}>
        <Cage
          data={arr[0]}
          cageUpdate={cageUpdate}
          numPlus={numPlus}
          value1={value1}
          value2={value2}
        />
        <Cage
          data={arr[1]}
          cageUpdate={cageUpdate}
          numPlus={numPlus}
          value1={value1}
          value2={value2}
        />
        <Cage
          data={arr[2]}
          cageUpdate={cageUpdate}
          numPlus={numPlus}
          value1={value1}
          value2={value2}
        />
      </div>
      <div className={classes.line}>
        <Cage
          data={arr[3]}
          cageUpdate={cageUpdate}
          numPlus={numPlus}
          value1={value1}
          value2={value2}
        />
        <Cage
          data={arr[4]}
          cageUpdate={cageUpdate}
          numPlus={numPlus}
          value1={value1}
          value2={value2}
        />
        <Cage
          data={arr[5]}
          cageUpdate={cageUpdate}
          numPlus={numPlus}
          value1={value1}
          value2={value2}
        />
      </div>
      <div className={classes.line}>
        <Cage
          data={arr[6]}
          cageUpdate={cageUpdate}
          numPlus={numPlus}
          value1={value1}
          value2={value2}
        />
        <Cage
          data={arr[7]}
          cageUpdate={cageUpdate}
          numPlus={numPlus}
          value1={value1}
          value2={value2}
        />
        <Cage
          data={arr[8]}
          cageUpdate={cageUpdate}
          numPlus={numPlus}
          value1={value1}
          value2={value2}
        />
      </div>
      {open && (
        <DialogComp nameOfWinner={nameOfWinner} closeDialog={closeDialog} />
      )}
    </>
  );
}

export default SecondPage;
