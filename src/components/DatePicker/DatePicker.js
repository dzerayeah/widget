import React, { useState } from "react";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const defaultMaterialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        display: "none",
      },
    },
    MuiPickersCalendar: {
      transitionContainer: {
        display: "none",
      },
    },
    MuiPickersCalendarHeader: {
      daysHeader: {
        display: "none",
      },
      switchHeader: {
        border: "1px solid #B3D0FD",
        borderRadius: "5px",
        height: "28px",
        marginTop: "0",
        marginBottom: "0",
      },
      iconButton: {
        height: "28px",
        width: "20px",
      },
    },
    MuiPickersStaticWrapper: {
      staticWrapperRoot: {
        minWidth: "unset",
        width: "160px",
        marginLeft: "10px",
      },
    },
    MuiPickersBasePicker: {
      pickerView: {
        minWidth: "unset",
        minHeight: "unset",
        width: "160px",
      },
      pickerViewLandscape: {
        padding: "0",
      },
    },
    MuiSvgIcon: {
      root: {
        fill: "#011A49",
      },
    },
    MuiTypography: {
      root: {
        fontSize: "16px!important",
        color: "#011C4D",
      },
    },
  },
});

const MonthDatePicker = React.forwardRef((props, ref) => {
  const [date, changeDate] = useState(new Date());

  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          autoOk
          orientation="landscape"
          variant="static"
          openTo="date"
          value={date}
          onChange={changeDate}
          ref={ref}
        />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
});

export default MonthDatePicker;
