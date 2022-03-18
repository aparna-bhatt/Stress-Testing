import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "strest",
  initialState: {
      bruteForceCode:"",
      optimizedCode:"",
      inputCode:"",
      langBrute:"",
      langOptimize:"",
      langInput:"",
  },
  reducers: {
      setBruteForceCode:(state,action)=>{
          return {
              ...state,
              bruteForceCode:action.payload
          }
          
      },
      setOptimizedCode:(state,action)=>{
        return {
            ...state,
            optimizedCode:action.payload
        }

      },
      setInputCode:(state,action)=>{
        return {
            ...state,
            inputCode:action.payload
        }
        
      },
      setBruteLang:(state,action)=>{
        return {
            ...state,
            langBrute:action.payload
        }
        
      },
      setOptimizedLang:(state,action)=>{
        return {
            ...state,
            langOptimize:action.payload
        }
        
      },
      setInputLang:(state,action)=>{
        return {
            ...state,
            langInput:action.payload
        }
        
      },
      setLang:(state,action)=>{
        return {
            ...state,
            langInput:action.payload,
            langOptimize:action.payload,
            langBrute:action.payload
        }
        
      }
  },
});

// Action creators are generated for each case reducer function
export const {
    setBruteForceCode,
    setOptimizedCode,
    setInputCode,
    setLang
  
} = counterSlice.actions;

export default counterSlice.reducer;