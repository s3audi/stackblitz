const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const directoryPath = path.join(__dirname, 'Arsiv');

app.use(express.static(directoryPath));

app.get('/list-html-files', (req, res) => {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory');
        }
        const htmlFiles = files.filter(file => path.extname(file) === '.html');
        res.json(htmlFiles);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
