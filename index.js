const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send(JSON.stringify({
  message: 'Hello World!'
}, null, 2) + '\n'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
