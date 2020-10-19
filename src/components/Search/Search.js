import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import "./Search.scss";

const useStyles = makeStyles((theme) => ({
  search: {
    width: "260px",
    height: "30px",
    position: "relative",
    "& .MuiInputLabel-outlined": {
      transform: "translate(10px, 12px) scale(1)",
      fontSize: "16px",
      lineHeight: "10px",
      color: "#808DA6",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "5px",
      border: "1px solid #B3D0FD",
      height: "30px",
    },
    "& .MuiOutlinedInput-input": {
      padding: "5px 23px 5px 10px",
      "&::placeholder": {
        fontSize: "16px",
        lineHeight: "16px",
        color: "#808DA6",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
}));

const Search = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="searchWrapper">
        <TextField
          className={classes.search}
          id="outlined-basic"
          placeholder="Search"
          variant="outlined"
        />
        <div className="search" />
      </div>
    </form>
  );
};

export default Search;
