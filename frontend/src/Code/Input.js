import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import First from "./Tabs/FirstCode";
import Second from "./Tabs/SecondCode";
import Third from "./Tabs/ThirdCode";
import { ThemeProvider } from "@mui/system";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  // console.log(index, "aii");
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
 
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  })
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // console.log(value, "handle");
  };

  const handleChangeIndex = (index) => {
    setValue(index);
    // console.log(index, "index");
  };

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ bgcolor: "background.paper", width: 1000 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
      
          <First />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Second />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Third />
        </TabPanel>
      </SwipeableViews>
    </Box>
    </ThemeProvider>
  );
}
