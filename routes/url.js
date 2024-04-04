const express = require('express')
const router = express.Router();
// const { nanoid } = require('nanoid/generate')
// import { nanoid } from 'nanoid';
const shortid = require('shortid')

const createDB = require ('../config/db')
const Url = require('../models/urlModel')

const BASE_URL = 'http://localhost:1337/urlapi'

createDB.sync().then(()=>{
    console.log('db is running');
})
router.post('/', async (req,res)=>{
    try{
        const { longUrl } = req.body;
        //longUrl -->id
        const shortId = shortid.generate()
        console.log(shortId);
        //store in db
        const shortUrl = await Url.create({
            longUrl,
            shortUrl: shortId
        })
        return res.status(200).json({
            status:'OK',
            // shortUrl:`${BASE_URL}/${shortUrl}`
            shortUrl: `${BASE_URL}/${shortUrl.shortUrl}`

        })

    } catch(e){
        console.error(e);
        return res.status(500).send(e)
    }
})

router.get("/:short", async(req,res)=>{
    let shortId = req.params.short;
    try{
        let url = await Url.findOne({
            where: {
                shortUrl: shortId
            }
        })
        if(!url){
            res.status(404).send("Invalid short url")
        }
        return res.redirect(url.longUrl)
    } catch(e){
        return res.status(500).send(e);
    }
})

module.exports = router;