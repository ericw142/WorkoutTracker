const db = require("../models");


module.exports = function(app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(result => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
        })
    })

    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body)
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
        })
    })

    app.get("/api/workouts/:range", (req, res) => {
        db.Workout.find({}).then((result) => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
        })
    })

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(req.params.id, 
        { $push: { "exercises": req.body } }, { new: true }
        )
        .then((result) => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
        })
    })
}