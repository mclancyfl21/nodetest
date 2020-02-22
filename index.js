
const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => console.log(`server is running on ${PORT}`));
app.get('/', (req,res) => {
res.sendFile(path.join(__dirname, 'public', 'index.html'));
})
app.get('/button', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'button.html'));
    })