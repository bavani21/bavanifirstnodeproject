import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { router as userRouter} from './routes/userRoutes.js'



dotenv.config()

const port=process.env.PORT || 5000

const app=express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/test',(req,res)=>{
    res.send("server is running")
})

app.use('/BFNP',userRouter)

app.listen(port, () => console.log(`Server started on port ${port}`));