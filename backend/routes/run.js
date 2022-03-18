const express = require("express");
const router = express.Router();
const request = require("request");
require("dotenv").config();
router.post("/run", (req, res) => {
    console.log(req.body.data.code);
    console.log(req.body.data.input);
    console.log(req.body.data.lang);
  const program = {
    script: req.body.data.code,
    language: req.body.data.lang,
    stdin: req.body.data.input,
    versionIndex: "0",
    clientId: process.env.JDoodle_Client_Id,
    clientSecret: process.env.JDoodle_Client_Secret,
  };
  request(
    {
      url: "https://api.jdoodle.com/v1/execute",
      method: "POST",
      json: program,
    },
    function (error, response, body) {
      let data = { ...body };
      if (error) {
        console.log(error);
        return res.send({err:true,success:false,message:"Error in code..."})
      } else {
        data.date = response.headers.date;
        return res.send({err:false,success:true,result:data});
      }
    }
  );
});

module.exports = router;