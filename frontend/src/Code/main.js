import React from "react";
import getOutput from "./GetOutput";
import Input from "./Input";
import "./Styles.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { display } from "@mui/system";

const Main = () => {
  const [lang, setLang] = useState("");
  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [code3, setCode3] = useState("");
  const [input, setInput] = useState("");
  const Run = async (info) => {
    if (info === "run" && code1 !== "" && code2 !== "") {
      const res = await getOutput(code1, lang, input, code2, code3);
      // console.log(res);
      // if(res===true)
      // alert("success");
      // else
      // alert("failed");

      console.log(res);
    } else {
      alert("please give the code");
    }
  };
 

  return (
    <>
          <div className="heading">
            <h1>STREST</h1>
          </div>
      <div className="mainDiv">
        <div className="leftdiv">
          <div className="input">
            <Input  />
          </div>
        </div>
        <div className="rightdiv">
          <div className="btn1">
          <Button  variant="contained">Login</Button>
          </div>
          <div className="lines">
            <TextField
              required
              id="outlined-required"
              label="Input"
              defaultValue="0"
              // className="inputText"
            />
            <TextField
              required
              id="outlined-required"
              label="Output"
              defaultValue="0"
              // className="inputText"
              // color="info"
            />
            {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
          </div>
          <Button onClick={() => Run("run")} variant="contained" className="btn">Run</Button>
        </div>
      </div>
    </>
  );
};

export default Main;
