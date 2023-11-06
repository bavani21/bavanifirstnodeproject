import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const MongoseConnect=  (URI)=>{
    
   try {
    let connect=  mongoose.createConnection(URI)

    console.log("mongodb connected")


    return connect
   } catch (error) {
    console.log(error)
   }
}


 const BFNP=MongoseConnect(process.env.MONGO_URI)
 

 export {BFNP}

 