import React from "react";
//import "./add-product.scss";
import { TextField, Button } from "@mui/material";
import { IIntake } from "../types/global.typing";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../constants/url.constants";

const AddIntake: React.FC = () => {
  const [intake, setIntake] = React.useState<Partial<IIntake>>({ name: "" });
  const redirect = useNavigate();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIntake({
      ...intake,
      [event.target.name]: event.target.value,
    });
  };

  const handleSaveBtnClick = () => {
    if (intake.name === "") {
      alert("Enter Values");
      return;
    }
    const data: Partial<IIntake> = { name: intake.name };
    axios
      .post(baseUrl, data)
      .then((response) =>
        redirect("/Intakes", {
          state: { message: "Intake Created Successfully" },
        })
      )
      .catch((error) => alert("Error"));
  };

  const handleBackBtnClick = () => {
    redirect("/Intakes");
  };

  return (
    <div className="add-product">
      <h2>Add New Product</h2>
      <TextField
        autoComplete="off"
        label="Intake Name"
        variant="outlined"
        name="name"
        value={intake.name}
        onChange={changeHandler}
      />

      <div>
        <Button variant="outlined" color="primary" onClick={handleSaveBtnClick}>
          Save
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleBackBtnClick}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default AddIntake;
