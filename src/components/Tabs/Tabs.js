import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// Components
import BasicTable from '../Operations/List'
import Search from '../Search/Search'
import MonthDatePicker from '../DatePicker/DatePicker'

import './Tabs.scss'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    box: {
        "& .MuiBox-root": {
            padding: '0 16px 16px 16px',
        },
    },
    appBar: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
    },
    tabs: {
        margin: '21px 15px 0 15px',
        minHeight: '25px',
        borderBottom: '1px solid #E6E9EE',
        "& .MuiTabs-indicator": {
            backgroundColor: '#011C4D',
            height: '1px',
        },
    },
    tab: {
        color: '#011C4D',
        fontFamily: 'TT Commons',
        opacity: '0.5',
        fontSize: '16px',
        lineHeight: '16px',
        minWidth: 'unset',
        textTransform: 'none',
        minHeight: 'unset',
        marginRight: '14px',
        padding: '0',
        fontWeight: '400',
        "&.Mui-selected": {
            fontWeight: '500',
        },
    },
}));

const TabsPanel = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Tabs value={value} onChange={handleChange} aria-label="tabs" className={classes.tabs}>
          <Tab label="Events" {...a11yProps(0)} className={classes.tab} />
          <Tab label="Limits" {...a11yProps(1)} className={classes.tab} />
        </Tabs>
      </AppBar>
      <TabPanel className={classes.box} value={value} index={0}>
        <div className="filterContainer">
            <Search />
            <MonthDatePicker />
        </div>
        <BasicTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        
      </TabPanel>
    </div>
  );
}

export default TabsPanel;