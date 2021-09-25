const router = require("express").Router();
const Exercise = require("../models/Exercise");

router.get("/api/workouts", (req, res)=> {
    Exercise.aggregate([
        { $addFields: {totalDuration: {$sum: "$exercises.duration"}}}
    ])
        .then (workouts => {
            res.json(workouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;