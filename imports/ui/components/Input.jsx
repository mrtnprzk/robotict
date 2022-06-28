import React, { useState } from "react";
import "./Input.css";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MoodIcon from "@mui/icons-material/Mood";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import CloudIcon from "@mui/icons-material/Cloud";
import CancelIcon from "@mui/icons-material/Cancel";

const Input = (props) => {

  const [number, setNumber] = useState("")
  const [disable, setDisable] = useState(true)

  const changeHandler = (e) => {
    const value = e.target.value;
    setNumber(value);

    if (value > props.range.to || value < props.range.from || value === "") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }

  const submitHandler = (e) => {  
    e.preventDefault();

    if (number % 3 === 0 && number % 5 === 0) {
      props.add({
        name: "RobotICT",
        text: "Divisible by 3 and 5 :)",
        icon: <MoodIcon/>
      });
    } else if (number % 3 === 0) {
      props.add({
        name: "Robot",
        text: "Divisible by 3",
        icon: <SmartToyIcon />,
      });
    } else if (number % 5 === 0) {
      props.add({
        name: "ICT",
        text: "Divisible by 5",
        icon: <CloudIcon />,
      });
    } else {
      props.add({
        name: number,
        text: "I am just number :(",
        icon: <CancelIcon />,
      });
    }
    setNumber("");
    setDisable(true);
  };

  return (
    <form onSubmit={submitHandler}>
      <TextField
        className="input"
        label={`Type Number from ${props.range.from} to ${props.range.to}`}
        type="number"
        name="number"
        value={number}
        onChange={changeHandler}
      />
      {disable ? (
        <Button variant="contained" disabled>
          Submit
        </Button>
      ) : (
        <Button variant="contained" type="submit">
          Submit
        </Button>
      )}
    </form>
  );
};

export default Input;