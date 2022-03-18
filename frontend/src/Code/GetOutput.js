import Axios from "axios";

Axios.defaults.withCredentials = true;

const getOutput = async (code1, lang, input, code2, code3) => {
  return new Promise(async (resolve) => {
    // let output1 = "";
    // let output2 = "";
    const result1 = await Axios.post("http://localhost:5000/run", {
      data: {
        code: code1,
        lang: lang,
        input: input,
      },
    });
    const output1 = await result1.data;
    console.log(output1);
    const result2 = await Axios.post("http://localhost:5000/run", {
      data: {
        code: code2,
        lang: lang,
        input: output1.result.output,
      },
    });
    const result3 = await Axios.post("http://localhost:5000/run", {
      data: {
        code: code3,
        lang: lang,
        input: output1.result.output,
      },
    });
    const output2 = await result2.data.result.output;
    const output3 = await result3.data.result.output;
    console.log(output3.length,"len");
    let flag=true;
    for(var i=0;i<output2.length;i++)
    {
      console.log(output2[i]);
      console.log(output3[i]);
      if(output2[i]!==output3[i])
      {
        flag=false;
        break;
      }
    }
    console.log(flag);
    if (flag===false) {
      resolve(output1.result.output);
    } else {
      resolve(true);
    }
  });
};
export default getOutput;
