const express = require("express")
const app = express()

const PORT = 1337

app.use(express.json());
app.use(express.ststic("public"));
app.use(express.urlencoded({extended:false}));

app.listen(PORT, ()=>{
    console.log(`Server in running at port http://localhost:${PORT}`)
})
