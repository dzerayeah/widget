import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import "./List.scss";

const useStyles = makeStyles({
  paperContainer: {
    boxShadow: "none",
  },
  table: {
    minWidth: "unset",
    marginTop: "10px",
  },
  tableHead: {
    fontSize: "16px",
    lineHeight: "29px",
    color: "#011C4D",
    opacity: "0.5",
    borderBottom: "1px solid #E6E9EE",
    fontFamily: "TT Commons",
  },
  row: {
    position: "relative",
    "&:after": {
      position: "absolute",
      content: '""',
      marginTop: "37px",
      right: "15px",
      width: "390px",
      height: "1px",
      background: "#F2F4F6",
      display: "block",
    },
  },
  cell: {
    padding: "13px 0 5px 0",
    borderBottom: "none",
    position: "relative",
    fontFamily: "TT Commons",
  },
  cellName: {
    fontSize: "20px",
    lineHeight: "15px",
    color: "#011C4D",
    "&:after": {
      width: "81%",
    },
  },
  cellSum: {
    fontSize: "12px",
    lineHeight: "20px",
    color: "#011C4D",
    opacity: "0.5",
  },
  cellBalance: {
    fontSize: "20px",
    lineHeight: "20px",
    color: "#011C4D",
    paddingRight: "12px",
  },
  cellCurrency: {
    fontSize: "14px",
    lineHeight: "20px",
    color: "#011C4D",
    opacity: "0.5",
  },
});

function createData(name, sum, balance, currency, state) {
  return { name, sum, balance, currency, state };
}

const data = [
  [
    createData("Withdraw", "0,00423 BTC", "0,084643", "BTC", "waiting"),
    createData("Deposit", "0,00423 BTC", "0,084643", "BTC", "confirmed"),
    createData("Transfer", "0,00423 BTC", "0,046431", "BTC", "canceled"),
  ],
  [createData("Conversion", "0,00423 BTC", "0,064213", "BTC", "confirmed")],
];

const BasicTable = () => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.paperContainer} component={Paper}>
      {data.map((table) => (
        <Table className={classes.table} aria-label="table">
          <TableHead className={classes.tableHead}>04.27.2020</TableHead>
          <TableBody>
            {table.map((row) => (
              <TableRow className={classes.row} key={row.name}>
                <TableCell
                  className={classNames(classes.cellName, classes.cell)}
                  component="th"
                  scope="row"
                >
                  <div className="icons">
                    <div className="operation-icon">
                      <div className={`arrow ${row.name.toLowerCase()}`} />
                    </div>
                    <span className="operation-name">{row.name}</span>
                    <div className="currency-icons">
                      {row.name === "Withdraw" && (
                        <div className="icon btc-out" />
                      )}
                      {row.name === "Deposit" && (
                        <div className="icon btc-in" />
                      )}
                      {row.name === "Transfer" && (
                        <div className="icon btc–btc" />
                      )}
                      {row.name === "Conversion" && (
                        <div className="icon btc-usd" />
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell
                  className={classNames(classes.cellSum, classes.cell)}
                  align="left"
                >
                  {row.sum}
                </TableCell>
                <TableCell
                  className={classNames(classes.cellBalance, classes.cell)}
                  align="right"
                >
                  {row.balance}&nbsp;
                  <span className={classes.cellCurrency}>{row.currency}</span>
                </TableCell>
                <TableCell className={classes.cell} align="left">
                  {row.state === "waiting" && (
                    <span className="state state-waiting" />
                  )}
                  {row.state === "confirmed" && (
                    <span className="state state-confirmed" />
                  )}
                  {row.state === "canceled" && (
                    <span className="state state-canceled" />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ))}
    </TableContainer>
  );
};

export default BasicTable;
