const connectToMongo = require("./db");
connectToMongo();
const express = require('express')
var cors = require('cors')
const app = express()
const port = 5000


app.use(cors())
app.use(express.json())
// Available routes
app.use("/api/auth",require("./routes/auth"))
app.use("/api/store",require("./routes/storeroute"))
app.use("/api/book",require("./routes/bookroute"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})