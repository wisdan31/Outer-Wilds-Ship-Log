const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("frontend/public"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

app.get('/', (req, res) => {
    res.sendFile("index.html");
})