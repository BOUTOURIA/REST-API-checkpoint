const mongoose=require('mongoose')

const connectDB = async() => {
    await mongoose.connect('mongodb://localhost/RestApiUser',()=>{
        try {
            console.log('the database is connected...');
        } catch (error) {
            console.log(error);
        }
    }
    )
}
module.exports=connectDB