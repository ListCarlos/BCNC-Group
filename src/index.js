const express = require('express');
const v1WorkoutRouter = require("./v1/routes/usuarioRoutes")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
     console.log('Server listening on port ' + PORT);
    });