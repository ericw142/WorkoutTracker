const db = require("../models");


module.exports = function(app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(result => {
            console.log(result);
            res.json({result});
        })
    })

    app.post("/api/workouts", (req, res) => {
        console.log("Post: "+req.body);

        db.Workout.create(req.body);
    })

    app.get("/api/workouts/:range", (req, res) => {
        db.Workout.find({}).then((result) => {
            res.json(result);
        })
    })

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findOne({ id: req.params.id }).then((result) => {
            res.json(result);
        })
    })
}