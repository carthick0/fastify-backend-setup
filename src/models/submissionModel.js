const mongoose=require('mongoose');

const submissionSchema= new mongoose.Schema({
    userId:{
        type:String,
        required:[true,"userId for the submission is missing"]
    },
    problemId:{
        type:String,
        required:[true,"problemId for the submission is missing"]
    },
    code:{
        type:String,
        required:[true,"code for the submission is missing"]
    },
    langauge:{
        type:String,
        required:[true,"langauge for the submission is missing"]
    },
    status:{
        type:String,
        enum:["pending","success","re","tl","mle","wa"],
        default:"pending"
    }
})

const Submission= mongoose.model('Submission',submissionSchema);

module.exports=Submission;