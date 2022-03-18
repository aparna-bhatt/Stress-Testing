import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  setInputCode } from "../../features/strestSlice";
import LangSelect from "../Language";


const SecondCode = () => {
  const dispatch = useDispatch();
  const {  inputCode } = useSelector((state) => {
    return state.strest;

  });
  console.log( inputCode);
  
  useEffect(() => {
    console.log( inputCode);
  }, [ inputCode]);
  

  return (
    <>
    <LangSelect />
    <textarea
     id="1"
      value={ inputCode}
      rows="25"
      cols="126"
      onChange={(e)=>{dispatch( setInputCode(e.target.value))}}
    ></textarea>
    </>
  );
};

export default SecondCode;
