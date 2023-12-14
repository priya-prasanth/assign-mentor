import express from 'express';
import Mentor from '../Models/MentorModel.js';


const mentorRouter = express.Router();
/* get all mentor details */

mentorRouter.get('/get-mentor', async (req, res) => {
    try {
        const mentors = await Mentor.find();
        res.send(mentors);
    } catch (error) {
        res.status(400).send(error); 
    }
})

/*create mentor*/
mentorRouter.post('/add-mentor', async (req, res) => {
    const { name, email, course } = req.body;
    const addMentor = new Mentor({
        "name": name,
        "email": email,
        "course":course
    })
    try {
        const newMentor = await addMentor.save();
        res.send(newMentor)
    } catch (err) {
        res.status(500);
        res.send(err);
    }
})

/*get mentor based on ID */
mentorRouter.get('/get-mentor/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const mentor = await Mentor.findById({ _id: id })
        res.status(200).send(mentor);
    } catch (err) {
        res.status(500);
        res.send(err);
    }
})
//module.exports = mentorRouter;
export default mentorRouter;