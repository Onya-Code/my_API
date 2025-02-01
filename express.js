const express = require("express");
const routes = require('../Routes/auth.routes');
const routes = require('../Routes/post.routes');

const app = express();

const PORT = process.env.PORT || 4004

app.use(express.json());

app.use('/auth', AuthRoutes);
app.use('/post', PostRoutes);

app.get('/', (req, res) => {
 res.send('Welcome to our api blog');
});

app.listen(PORT, () => {
 console.log("App is running on ${PORT}!");
})





