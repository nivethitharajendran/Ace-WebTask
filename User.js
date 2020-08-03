var mongoose= require("mongoose");

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
       // unique: true,
        //required: true,
        trim: true
      },
      phone:{
          type:Number,
          //unique: true,
          //required: true,
          trim:true
      },
   
    username: {
      type: String,
      //unique: true,
     // required: true,
      trim: true
    },
    address: {
      type: String,
    // required: true,
    },
    city: {
      type: String,
     // required: true,
    },
    country:{
        type: String,
    },
    code:{
        type:Number,
    }
    
});

var User = mongoose.model('User', UserSchema);
  module.exports = User;
  