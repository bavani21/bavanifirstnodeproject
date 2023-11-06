import mongoose from "mongoose";
import { BFNP } from "../config/db.js";


const userSchema = mongoose.Schema({

    name:String,
    email:String,
    phone_number:Number,
},
{
    timestamps: true,
  }
)

const User=BFNP.model('user',userSchema)

export {User}