const express = require("express")
const app = express()
const shortUrl = require('./routes/url')
const homeRoutes = require('./routes/home')
const PORT = 1337

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));
app.use('/urlapi',shortUrl)
app.use('/',homeRoutes)

app.listen(PORT, ()=>{
    console.log(`Server in running at port http://localhost:${PORT}`)
})
 