const express = require('express')
const router = express.Router();
const { nanoid } = require('nanoid')
const createDB = require ('../config/db')
const URL = require('../models/urlModel')

const BASE_URL = 'http://localhost:1337/urlapi'

createDB.sync().then(()=>{
    console.log('db is running');
})
router.post('/', async (req,res)=>{
    try{
        const { longUrl } = req.body;
        //longUrl -->id
        const shortId = nanoid(4)
        //store in db
        const shortUrl = await Url.create({
            longUrl,
            shortUrl: shortId
        })
        return res.status(200).json({
            status:'OK',
            shortUrl:`${BASE_URL}/${shortUrl}`

        })

    } catch(e){
        console.error(e);
        return res.status(500).send(e)
    }
})

module.exports = router;