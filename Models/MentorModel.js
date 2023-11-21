import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    course: {
        type: String,
        required:true
    }
})

const Mentor = mongoose.model("Mentor", mentorSchema);
//module.exports = mongoose.model('Mentor', mentorSchema);
export default Mentor;