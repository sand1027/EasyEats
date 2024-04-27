import mongoose from "mongoose"
export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://sandy:Sandeep1234@cluster0.k0immcm.mongodb.net/EasyEats').then(()=>{console.log("DB Connected")})

}