
const SubmissionProducer=require('../producers/submissionProducer');

class SubmissionService{
    constructor(submissionRepository){
        this.submissionRepository=submissionRepository
    }
    async addSubmission(submissionPayload){
        const submission=this.submissionRepository.createSubmission(submissionPayload)
        if(!submission){
            throw{
                message:"not able to create submission"
            }
        }
        console.log(submission)
        const response = await SubmissionProducer(submission);
        return {queueResponse:response,submission};
    }

}

module.exports=SubmissionService