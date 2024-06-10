import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongo_db_atlas_url').then(()=>console.log("DB Connected"))
}

