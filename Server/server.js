import app from "./api/app.js";

const port = 8000;

app.listen(port, () => {
    console.log(`Trackify - Backend Server listening at http://localhost:${port}`)
});