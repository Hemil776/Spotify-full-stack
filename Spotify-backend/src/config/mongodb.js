import mongoose from "mongoose";
const connetDB =async()=>{
    mongoose.connection.on('connected',()=>{
        console.log("connetiong established")
    })
    await mongoose.connect(`${process.env.MONGODB_URL}/spotify`)
}
export default connetDB;