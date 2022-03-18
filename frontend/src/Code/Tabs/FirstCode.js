import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBruteForceCode } from "../../features/strestSlice";
import LangSelect from "../Language";


const FirstCode = () => {
  const dispatch = useDispatch();
  const { bruteForceCode } = useSelector((state) => {
    return state.strest;

  });
  console.log(bruteForceCode);
  
  useEffect(() => {
    console.log(bruteForceCode);
  }, [bruteForceCode]);
  

  return (
    <>
    <LangSelect />
    <textarea
     id="1"
      value={bruteForceCode}
      rows="25"
      cols="126"
      onChange={(e)=>{dispatch(setBruteForceCode(e.target.value))}}
    ></textarea>
    </>
  );
};

export default FirstCode;
