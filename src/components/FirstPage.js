import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createUseStyles } from "react-jss";

const useStylesFirstPage = createUseStyles({
  firsttextfield: {
    textAlign: "center",
    marginTop: 150,
  },
  secondtextfield: {
    textAlign: "center",
    margin: "10px 0px",
  },
  buttonplay: {
    textAlign: "center",
    margin: "10px 0px",
  },
  // firsttextfield: {
  //   text-align: center;
  //   margin-top: 150px;
  // }
  // .secondtextfield {
  //   text-align: center;
  //   margin: 10px 0px;
  // }
  // .buttonplay {
  //   text-align: center;
  //   margin: 10px 0px;
  // }
});

function FirstPage(props) {
  const { onChange1, value1, onChange2, value2, openSecondPage } = props;
  const classes = useStylesFirstPage();
  return (
    <>
      <div className={classes.firsttextfield}>
        <TextField
          label="Player1"
          variant="filled"
          value={value1}
          onChange={onChange1}
        />
      </div>
      <div className={classes.secondtextfield}>
        <TextField
          label="Player2"
          variant="filled"
          value={value2}
          onChange={onChange2}
        />
      </div>
      <div className={classes.buttonplay}>
        <Button
          variant="outlined"
          onClick={openSecondPage}
          disabled={!value1.trim() || !value2.trim()}
        >
          Play
        </Button>
      </div>
    </>
  );
}

export default FirstPage;
