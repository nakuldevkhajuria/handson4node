const express = require("express");
const cors = require("cors")
const bodyParser = require('body-parser');
const app = express();
const loginRouter = require("./routes/login");
const signupRouter = require("./routes/signup");

// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

app.use("/", loginRouter);
app.use("/signup", signupRouter);

app.listen(8000,()=>{
  console.log('port connected')
})