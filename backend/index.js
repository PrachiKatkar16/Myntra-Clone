const express=require('express')
const cors=require('cors')
const authMiddleware=require('./middleware/auth.middleware')
const connection=require('./config/db');
const userRouter = require('./routes/user.route')
const clothRouter=require('./routes/cloth.route')
const sliderRouter=require('./routes/slider.route')
require('dotenv').config();
const PORT=process.env.PORT || 3005

const app=express();
app.use(express.json())
app.use(cors({
    origin:'*'
}))

app.use('/userAuth',userRouter)
app.use('/cloth',authMiddleware,clothRouter)
app.use('/slider',sliderRouter)

app.get('/',(req,res)=>{
    res.send("server is working fine")
})

app.listen(PORT,async()=>{
    try {
        await connection;
        console.log(`Server is running on port ${PORT} and connected to db`)
    } catch (error) {
        console.log(`Error while connecting to db ${error}`)
    }
})