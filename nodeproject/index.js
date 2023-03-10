const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 8000
const userRouter = require("./routes/user-route");
const productRouter = require("./routes/product-route");
var bodyParser = require('body-parser')
var cors = require('cors')
app.set('json spaces', 4);
const formData = require("express-form-data");

// different routing for user and product.
app.use(bodyParser.json());
app.use(formData.parse());
app.use(cors())


// 
app.use("/api/user", userRouter)
app.use("/api/product", productRouter)



app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/test', (req, res) => {
  console.log(req.body);
})


// mongose connected 
//("mongodb+srv://abskawser:vHQSSQBdDMERDUMG@cluster0.zguyzcy.mongodb.net/?retryWrites=true&w=majority")
//vHQSSQBdDMERDUMG
// stric query error slove 
 mongoose.set("strictQuery", false);
 mongoose
  .connect("mongodb+srv://abskawser:kawser@cluster0.zguyzcy.mongodb.net/totalCollection?retryWrites=true&w=majority")
  .then(() => {
    console.log("connection success mongoose\n");
    app.listen(port, () => {
      console.log("Hi i am node js")
    })
  }).catch((err) => {
    console.log(err, " not connect to Mongo")
  })

