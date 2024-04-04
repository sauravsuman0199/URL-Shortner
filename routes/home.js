const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', (req,res)=>{
    console.log('dirName',__dirName , htmlPath)
    const htmlPath = path.join(__dirName,'public','index.html')
    res.send(htmlPath)

})

module.exports = router