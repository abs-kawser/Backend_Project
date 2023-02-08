const mongoose = require('mongoose');

const userSehema=({
    username:{
       require:true ,
       type: 'string',

    },
    email:{
       require:true,
       type:'string',
    },
    phone:{
        default:'',
        type:'string',
    },
    password:{
        default:'',
        require:true,
        type:'string',
    },


})

const userModel=mongoose.model('userModel',userSehema);
module.exports=userModel;
// use korta hba controller file a 