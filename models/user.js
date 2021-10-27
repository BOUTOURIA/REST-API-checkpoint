const mongoose=require('mongoose')
const schema =mongoose.Schema

const userschema = new schema ({
    name:{
        type : String,
        required: true 
     },

    email: {
       type :  String,
       required: true,
       unique: true},

    age :{ 
        type :Number,
        required:true
     },
})

module.exports=User=mongoose.model('user, userSchema')