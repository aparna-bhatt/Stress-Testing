import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOptimizedCode } from "../../features/strestSlice";
import LangSelect from "../Language";


const SecondCode = () => {
  const dispatch = useDispatch();
  const { optimizedCode } = useSelector((state) => {
    return state.strest;

  });
  console.log(optimizedCode);
  
  useEffect(() => {
    console.log(optimizedCode);
  }, [optimizedCode]);
  

  return (
    <>
    <LangSelect />
    <textarea
     id="1"
      value={optimizedCode}
      rows="25"
      cols="126"
      onChange={(e)=>{dispatch(setOptimizedCode(e.target.value))}}
    ></textarea>
    </>
  );
};

export default SecondCode;
