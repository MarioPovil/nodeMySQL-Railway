import express from 'express'
import {pool} from './db.js'
import { PORT } from './config.js'
const app = express()

app.get('/',(req,res)=>{
    res.send('Welcome to server')
})

app.get('/ping', async (req,res)=>{
    const result = await pool.query('SELECT "Hello World" as RESULT' );
    res.json(result[0]);
}) 

app.listen(PORT)
console.log('Server on port',PORT)