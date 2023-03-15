const express = require('express');
const multer = require('multer');

const app = express();

const upload = multer({ dest: 'uploads/' });

app.get('/updateFile', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
