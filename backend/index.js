const express = require("express");
const app = express();
const PORT = process.env.PORT | 5000;
const cors = require("cors");
const Run =require("./routes/run");
//MiddleWares
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.post("/run", Run);

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}....`);
});