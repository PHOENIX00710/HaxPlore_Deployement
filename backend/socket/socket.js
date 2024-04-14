import {Server} from 'socket.io'
import http from 'http'
import express from 'express'

const app=express()

const server=http.createServer(app)
const io=new Server(server,{
    cors:{
        origin:['http://localhost:5173','https://namasteayodhya.vercel.app','https://namasteayodhya.onrender.com'],
        methods:["GET","POST"],
        credentials: true,
    }
})

io.on('connection',(socket)=>{
    console.log('A user connected',socket.id)

    socket.on('disconnect',()=>{
        console.log("A user disconnected",socket.id)
    })
})

export {app,io,server}