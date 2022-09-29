import React from "react";
import { Button, TextField } from "@mui/material";
import { IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";

export const CreatePage = () => {
  return (
    <div className="create-wrapper">
      <div className="create-banner">
        <h1>
          Lets create your <br />
          Awesome
          <br /> event together.
        </h1>
      </div>

      <div className="create-form">
        <TextField label="Event name" variant="outlined" className="create-form-item" />
        <TextField label="Host name" variant="outlined" className="create-form-item" />
        <TextField
          label="Start date"
          type="datetime-local"
          defaultValue="2022-09-29T10:30"
          className="create-form-item"
        />
        <TextField
          label="End date"
          type="datetime-local"
          defaultValue="2022-09-29T10:30"
          className="create-form-item"
        />
        <TextField label="Location" variant="outlined" className="create-form-item" />
        <Button variant="contained" component="label" className="create-form-item btn">
          Upload File
          <input type="file" hidden />
        </Button>
        <Link to="/event" className="next-btn">
          <p>
            Next <IoChevronForward className="arrow" />
          </p>
        </Link>
      </div>
    </div>
  );
};
